import React from 'react';
import { Router } from '@reach/router';
import Navbar from './components/navbar';
import Homepage from './components/home';
import Dashboard from './components/dashboard';

function App() {
    return (
        <div className="app--root">
            <Navbar />
            <div className="app--base">
                <Router>
                    <Homepage path="/" />
                    <Dashboard path="/dashboard" />
                </Router>
            </div>
        </div>
    );
}

export default App;
