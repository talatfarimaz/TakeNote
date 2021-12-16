import React, {Component} from 'react';
import './App.css';
import AppNavbar from "./Components/AppNavbar";
import AppContent from "./Components/AppContent";
import ScrollButton from "./Components/ScrollButton";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <AppNavbar/>
                <AppContent/>
                <ScrollButton/>
            </div>
        );
    }
}

export default Home;