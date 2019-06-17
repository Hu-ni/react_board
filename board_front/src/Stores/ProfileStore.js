import {observable, action} from "mobx";

import axios from 'axios';

class ProfileStore{
    static __instance = null;
    static getInstance(){
        if(ProfileStore.__instance === null){
            ProfileStore.__instance = new ProfileStore();
        }
        return ProfileStore.__instance;
    }
    constructor(){
        ProfileStore.__instance = this;
    }

    @observable user = null;

    @action fetchItem = async (id) => {
        try{
            this.user = null;
            let response = await axios({
                url: `http://localhost:8080/user/findById/${id}`,
                method: 'get',
                header: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            console.log(response);
            if(response.status === 200)
                this.user = response.data;
        }catch (ex) {
            alert(ex.toLocaleString());
        }
    };


    @observable viewItem = null;
    @action login = async (user) => {
        try{
            this.viewItem = null;
            let response = await axios({
                url: `http://localhost:8080/user/findByUser?account=${user.account}&password=${user.password}`,
                method: 'get',
                header: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            console.log(response);
            if(response.status === 200)
                this.viewItem = response.data;
        }catch (ex) {
            alert(ex.toLocaleString());
        }
    };

    @action addItem = async (user) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/user/add`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                data: JSON.stringify(user),
                timeout: 3000
            });
            return (response.status === 200);
        }catch(ex){
            alert(ex.toLocaleString());
            return false;
        }

    };

    @action deleteItem = async (userId) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/user/${userId}`,
                method: 'delete',
                timeout: 3000
            });
            if(response.status === 200){
                this.viewItem = null;
                return true;
            }else
                return false;
        }catch(ex){
            alert(ex.toLocaleString());
            return false;
        }
    };

    @action modifyItem = async (user) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/user/modify`,
                method: 'put',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                data: JSON.stringify(user),
                timeout: 3000
            });
            return (response.status === 200);
        }catch(ex){
            alert(ex.toLocaleString());
            return false;
        }

    };
}

export default ProfileStore.getInstance();