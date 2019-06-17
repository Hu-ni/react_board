import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Link, Redirect} from "react-router-dom";


@inject('stores')
@observer
class PostView extends Component {
    state = {
        goToList: false,
        goToEdit: false
    }
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


    componentDidMount() {
        this.props.stores.PostStore.fetchItem(this.props.postId);
    }

    render() {
        if(this.state.goToList)
            return <Redirect to="/"/>;
        if(this.state.goToEdit)
            return <Redirect to={`/board/edit/${this.props.postId}`}/>;

        let p = this.props.stores.PostStore;
        if(!p.viewItem)
            return <div/>;
        return (
            <div className='board board-view-item'>
                <div>
                    제목: {p.viewItem.title}
                </div>
               <div>
                    내용:
                   <div dangerouslySetInnerHTML={{__html:p.viewItem.content}}/>
                </div>
                <div>
                    작성시간: {new Date(p.viewItem.created).toLocaleString()}
                </div>
                <div>
                    <button><Link to="/">목록</Link></button>
                    <button onClick={this.handleClickDelete}>삭제</button>
                    <button onClick={this.handleClickModify}>수정</button>
                </div>
            </div>
        );
    }
}

export default PostView;