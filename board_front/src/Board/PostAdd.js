import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@inject('stores')
@observer
class PostAdd extends Component {
    state = {
        user_id: this.props.userId,
        title: '',
        content: '',
        goToList: false,
        goToPost: false
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleEditor = (event, editor) => {
        this.setState({
            ...this.state,
            content: editor.getData()
        });
    }

    handleClick = (e) => {
        console.log(this.props.postId);
        if (this.props.postId && this.props.stores.PostStore.modifyItem (this.state)) {
            this.props.stores.PostStore.fetchItems();
            this.setState({
                ...this.state,
                goToPost: true
            });
        } else if(this.props.stores.PostStore.addItem(this.state)){
            this.setState({
                goToList: true
            });
        }
        this.props.stores.PostStore.fetchItems();
    };

    constructor(props){
        super(props);
        if(this.props.postId && this.props.stores.PostStore.viewItem){

            this.state = {
                ...this.state,
                title: this.props.stores.PostStore.viewItem.title,
                content: this.props.stores.PostStore.viewItem.content,
                id: this.props.stores.PostStore.viewItem.id
            }
        }
    }

    render() {
        if(this.state.goToList)
            return <Redirect to="/"/>;
        if(this.state.goToPost)
            return <Redirect to={`/board/view/${this.props.postId}`}/>;
        return (
            <div className='board board-add'>
                <div className='board-add-header'>
                    <div>제목</div>
                    <div>
                        <input id="title" value={this.state.title} onChange={this.handleChange}/><br/>
                    </div>
                </div>
                <div>
                    내용
                    <div>
                        <CKEditor id="content" editor={ClassicEditor}
                                  data={this.state.content} onChange={this.handleEditor}/>
                    </div>
                </div>
                <div><button onClick={this.handleClick}>확인</button></div>
            </div>
        );
    }
}

export default PostAdd;