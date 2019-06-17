import {observable, action} from "mobx";

import TimeStore from './TimeStore';
import axios from 'axios';

class PostStore {

    getSomething = () => TimeStore.getTime();

    static __instance = null;
    static getInstance(){
        if(PostStore.__instance === null){
            PostStore.__instance = new PostStore();
        }
        return PostStore.__instance;
    }
    constructor(){
        PostStore.__instance = this;
    }
    @observable current_time = null;
    @action getTime = async () => this.current_time = await new Date().getTime();

    @observable items = null;
    @action fetchItems = async () => {
        try{
            this.items = null;
            let response = await axios({
                url: 'http://localhost:8080/post/findAll',
                method: 'get',
                header: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            console.log(response);
            if(response.status === 200)
                this.items = response.data;
        }catch (ex) {
            alert(ex.toLocaleString());
        }
    };

    @observable viewItem = null;
    @action fetchItem = async (postId) => {
        try{
            this.viewItem = null;
            let response = await axios({
                url: `http://localhost:8080/post/findById/${postId}`,
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

    @action addItem = async (post) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/post/add`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                data: JSON.stringify(post),
                timeout: 3000
            });
            return (response.status === 200);
        }catch(ex){
            alert(ex.toLocaleString());
            return false;
        }

    };

    @action deleteItem = async (postId) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/post/${postId}`,
                method: 'delete',
                timeout: 3000
            });
            return (response.status === 200);
        }catch(ex){
            alert(ex.toLocaleString());
            return false;
        }
    };

    @action modifyItem = async (post) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/post/modify`,
                method: 'put',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                data: JSON.stringify(post),
                timeout: 3000
            });
            return (response.status === 200);
        }catch(ex){
            alert(ex.toLocaleString());
            return false;
        }

    };
}

export default PostStore.getInstance();