import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class ProfileView extends Component {


    render() {
        return (
            <div>
                <div>이름: {this.props.item.username}</div>
                <div>이메일: {this.props.item.email}</div>
                <div>비밀번호: {this.props.item.password}</div>
                <div>
                    <button>수정</button>
                    <button>회원 탈퇴</button>
                </div>
            </div>
        );
    }
}

export default ProfileView;