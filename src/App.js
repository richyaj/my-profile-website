import React,{Component} from "react";
import {hot} from "react-hot-loader";
import MyPage from "./MyPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component{
    render(){
        return(
            <div className="App">
                <MyPage/>
            </div>
        );
    }
}

export default hot(module)(App);