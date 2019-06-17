import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Link, Redirect} from "react-router-dom";

@inject('stores')
@observer
class PostEditComp extends Component {
    state = {
        goToList: false,
        goToEdit: false
    };

    handleClickDelete = (e) =>{
        if(e.target.innerHTML === ' 삭제'){
            if(window.confirm('삭제하시겠습니까?') === false) return;
            if(this.props.stores.PostStore.deleteItem(this.props.postId)) {
                this.props.stores.PostStore.fetchItems();
                this.setState({
                    goToList: true
                });
            }
        }else{
        }

    };

    handleClickModify = (e) =>{
        this.setState({
            goToEdit: true
        })
    };

    render() {
        if(this.state.goToList)
            return <Redirect to="/"/>;
        if(this.state.goToEdit)
            return <Redirect to={`/board/edit/${this.props.postId}`}/>;


        if(!this.props.stores.ProfileStore.viewItem || this.props.stores.ProfileStore.viewItem.id !== this.props.userId)
            return (
                <div>
                    <button><Link to="/">목록</Link></button>
                </div>
            );
        return (
            <div>
                <button><Link to="/">목록</Link></button>
                <button onClick={this.handleClickDelete}>삭제</button>
                <button onClick={this.handleClickModify}>수정</button>
            </div>
        );
    }
}

export default PostEditComp;