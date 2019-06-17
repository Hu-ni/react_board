import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import BoardList from './BoardList';

import './Board.scss';
import PostView from "./PostView";
import PostAdd from "./PostAdd";

@inject('stores')
@observer
class Board extends Component {


    componentDidMount() {
        this.props.stores.PostStore.fetchItems();
    }

    render() {
        let u = this.props.stores.ProfileStore;
        // if(this.props.match && this.props.match.params.postId)
        if(this.props.match && this.props.match.params.command === 'view')
            return <PostView postId={this.props.match.params.postId}/>;
        // if(this.props.location && this.props.location.pathname === "/board/add")
        if(this.props.match && this.props.match.params.command === 'add' && u.viewItem)
            return <PostAdd userId={u.viewItem.id}/>;
        if(this.props.match && this.props.match.params.command === 'edit')
            return <PostAdd postId={this.props.match.params.postId}/>;
        let p = this.props.stores.PostStore;
        return (
            <div>
                {p.items && <BoardList items={p.items}/>}
            </div>
        );
    }
}

export default Board;