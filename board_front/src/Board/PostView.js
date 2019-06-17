import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import PostEditComp from "./PostEditComp";


@inject('stores')
@observer
class PostView extends Component {


    componentDidMount() {
        this.props.stores.PostStore.fetchItem(this.props.postId);
    }

    render() {

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

                    <PostEditComp userId={p.viewItem.user_id}/>
                </div>
            </div>
        );
    }
}

export default PostView;