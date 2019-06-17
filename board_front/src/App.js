import React from 'react';

import {BrowserRouter, Route, Link} from "react-router-dom";
import {Provider} from "mobx-react"

import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Stores from "./Stores";
import Board from "./Board";
import Profile from "./Profile";

import './App.scss';


class App extends React.Component {

    render(){
    return(
        <Provider stores={Stores}>
            <BrowserRouter>
                <header className="app-header">
                    <ul className="menu-bar">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/Board">게시판</Link></li>
                        <li><Link to="/user">로그인</Link></li>
                        <li><Link to="/Page3">Page3</Link></li>
                    </ul>

                </header>

                <section className="app-body">
                    <Route path="/" exact component={Home}/>
                    <Route path="/page1" component={Page1}/>
                    <Route path="/page2" component={Page2}/>
                    <Route path="/page3" component={Page3}/>
                    <Route path="/board/:command?/:postId?" exact component={Board}/>
                    <Route path="/user/:command?/:userId?" exact component={Profile}/>
                </section>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
