import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class BoardAddComp extends Component {
    render() {
        let u = this.props.stores.ProfileStore;
        if(!u.viewItem)
            return <div/>;
            return (
            <div>
                <Link to="/board/add">추가</Link>
            </div>
        );
    }
}

export default BoardAddComp;