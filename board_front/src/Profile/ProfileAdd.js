import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router-dom";

@inject('stores')
@observer
class ProfileAdd extends Component {
    state={
        id: this.props.userId,
        account: '',
        password: '',
        email: '',
        username: '',
        goToLogin: false,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleJoin = (e) => {
        if(this.props.userId && this.props.stores.ProfileStore.modifyItem(this.state)){
            this.props.stores.ProfileStore.login(this.state);

        }else{
            this.props.stores.ProfileStore.addItem(this.state);
        }

        this.setState({
            goToLogin: true
        })
    };

    constructor(props){
        super(props);
        if(this.props.userId && this.props.stores.ProfileStore.viewItem) {
            this.state = {
                ...this.state,
                account: this.props.stores.ProfileStore.viewItem.account,
                password: this.props.stores.ProfileStore.viewItem.password,
                email: this.props.stores.ProfileStore.email,
                username: this.props.stores.ProfileStore.viewItem.username,
            }
        }
    }

    render() {
        if(this.state.goToLogin)
            return <Redirect to={`/user`}/>;
        return (
            <div>
                <div>
                    <input value={this.state.account} placeholder="ID"
                           name="account" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="password" value={this.state.password} placeholder="PASSWORD"
                           name="password" onChange={this.handleChange}/>
                </div>
                <div>
                    <input value={this.state.email} placeholder="EMAIL"
                           name="email" onChange={this.handleChange} />
                </div>
                <div>
                    <input value={this.state.username} placeholder="USERNAME"
                           name="username" onChange={this.handleChange} />
                </div>
                <div>
                    <button onClick={this.handleJoin}>확인</button>
                </div>
            </div>
        );
    }
}

export default ProfileAdd;