import React, {Component} from 'react';
import ProfileFind from "./ProfileFind";
import ProfileView from "./ProfileView";
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class Profile extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        let u = this.props.stores.ProfileStore;
        if(this.props.match && this.props.match.params.command === "view")
            return <ProfileView userId={this.props.match.params.userId}/>;
        return (
            <div>
                {/*{u.viewItem === null && <ProfileFind/>}*/}

                <ProfileFind/>
            </div>
        );
    }
}

export default Profile;