import React from 'react';
import { Router } from '@reach/router';
import Navbar from './components/navbar';
import Homepage from './components/home';
import Dashboard from './components/dashboard';
import Infohub from './components/infohub';
import Register from './components/auth/register';

function App() {
    return (
        <div className="app--root">
            <Navbar />
            <div className="app--base">
                <Router>
                    <Homepage path="/" />
                    <Dashboard path="/dashboard" />
                    <Infohub path="/infohub" />
                    <Register path="/register" />
                </Router>
            </div>
        </div>
    );
}

export default App;
