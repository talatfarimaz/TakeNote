import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {Container } from 'reactstrap';
import AppNavbar from "./Components/AppNavbar";
import {Button, Grid} from "@material-ui/core";
import LeftMenu from "./Components/LeftMenu";
import AppContent from "./Components/AppContent";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <AppContent/>
            </div>
        );
    }
}

export default Home;