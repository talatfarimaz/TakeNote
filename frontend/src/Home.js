import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import {Container } from 'reactstrap';
import {Button} from "@material-ui/core";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="primary"><Link to="/clients">Clients</Link></Button>
                </Container>
            </div>
        );
    }
}

export default Home;