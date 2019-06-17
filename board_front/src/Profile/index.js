import React, {Component} from 'react';
import ProfileFind from "./ProfileFind";
import ProfileView from "./ProfileView";
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router-dom";
import ProfileAdd from "./ProfileAdd";

@inject('stores')
@observer
class Profile extends Component {

    render() {
        let u = this.props.stores.ProfileStore;
        if((this.props.match && this.props.match.params.command === "view"))
            return <ProfileView userId={this.props.match.params.userId}/>;
        if((this.props.match && this.props.match.params.command === "add"))
            return <ProfileAdd/>;
        if((this.props.match && this.props.match.params.command === "edit"))
            return <ProfileAdd userId={this.props.match.params.userId}/>;
        if(u.viewItem)
            return <Redirect to={`/user/view/${u.viewItem.id}`}/>;
        return (
            <div>
                {/*{u.viewItem === null && <ProfileFind/>}*/}
                <ProfileFind/>
            </div>
        );
    }
}

export default Profile;