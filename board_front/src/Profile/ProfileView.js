import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router-dom";

@inject('stores')
@observer
class ProfileView extends Component {
    state={
        id: 0,
        goToList: false,
        goToEdit: false,
    };

    handleChange = (e) =>{
        this.setState({
            ...this.state,
            goToEdit: true,
        });
    };

    handleDelete = (e) =>{
        if(window.confirm('삭제하시겠습니까?') === false) return;
        if(this.props.stores.ProfileStore.deleteItem(this.state.id)) {
            this.setState({
                goToList: true
            });
        }
    };

    componentDidMount() {
        this.setState({
            id: this.props.stores.ProfileStore.viewItem.id,
        })
    }


    render() {
        let u = this.props.stores.ProfileStore;
        if(this.state.goToList)
            return <Redirect to={`/`}/>;
        if(this.state.goToEdit)
            return <Redirect to={`/user/edit/${this.state.id}`}/>;
        if(!u.viewItem)
            return <div/>;
        return (
            <div>
                <div>ID: {u.viewItem.account}</div>
                <div>NAME: {u.viewItem.username}</div>
                <div>EMAIL: {u.viewItem.email}</div>
                <div>
                    <button onClick={this.handleChange}>수정</button>
                    <button onClick={this.handleDelete}>회원 탈퇴</button>
                </div>
            </div>
        );
    }
}

export default ProfileView;