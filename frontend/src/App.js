import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ClientList from './ClientList';
import ClientEdit from "./ClientEdit";
import {ThemeProvider} from '@material-ui/core/styles';
import DefaultTheme from "./Themes/DefaultTheme";
import {Provider} from "react-redux";
import store from "./state/store";

class App extends Component {
    render() {
        const theme = DefaultTheme;
        return (
            <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route path='/' exact={true} component={Home}/>
                        <Route path='/clients' exact={true} component={ClientList}/>
                        <Route path='/clients/:id' component={ClientEdit}/>
                    </Switch>
                </Router>
            </ThemeProvider>
            </Provider>
        )
    }
}

export default App;