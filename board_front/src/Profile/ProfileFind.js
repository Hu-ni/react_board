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
        goToJoin: false,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleLogin = async (e) =>{
        await this.props.stores.ProfileStore.login(this.state);

        this.setState({
            ...this.state,
            id: this.props.stores.ProfileStore.viewItem.id,
            goToList: true,
        });

    };

    handleJoin = (e) =>{
        this.setState({
            ...this.state,
            goToJoin: true,
        })
    }

    render() {
        if(this.state.goToList)
            return <Redirect to={`/user/view/${this.state.id}`}/>;
        if(this.state.goToJoin)
            return <Redirect to={`/user/add`}/>;
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
                    <button onClick={this.handleJoin}>회원가입</button>
                </div>
            </div>
        );
    }
}

export default ProfileFind;