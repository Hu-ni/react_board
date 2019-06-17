import React from 'react';

import BoardListItem from './BoardListItem';
import BoardAddComp from "./BoardAddComp";

const BoardList = (props) => {
    return (
        <div className='board'>
            {props.items.map(item => <BoardListItem key={item.id} post={item} />)}
            <BoardAddComp/>
        </div>
    );
};

export default BoardList;