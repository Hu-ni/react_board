import React, {Component} from 'react';

import {Redirect} from "react-router-dom";
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class ProfileFind extends Component {

    state={
        id: 0,
        account: '',
        password: '',
        goToList: false,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleLogin = (e) =>{
        this.props.stores.ProfileStore.login(this.state);

    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps.stores !== this.props.stores);
        if(prevProps.stores.ProfileStore !== this.props.stores.ProfileStore){
            this.setState({
                ...this.state,
                id: this.props.stores.ProfileStore.viewItem.id,
                goToList: true,
            })
        }
    }

    render() {
        // if(this.state.goToList)
        //     return <Redirect to={`/user/view/${this.state.id}`}/>;
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
                    <button onClick={this.handleLogin}>로그인</button>
                    <button>회원가입</button>
                </div>
            </div>
        );
    }
}

export default ProfileFind;