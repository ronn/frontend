import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';

export default class Routes extends Component {
    render() {
        // Return Routes
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" initial={true} />
                    <Scene key="register" component={Signup} title="Signup" />
                </Stack>
            </Router>
        )
    }
}