import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import SignUp from './components/pages/SignUp.js';

//stadiums
import Barcelona from './components/pages/Barcelona.js';
import Manchester from './components/pages/Manchester.js';
import Kiev from './components/pages/Kiev.js';
import Paris from './components/pages/Paris.js';
import London from './components/pages/London.js';
import Milan from './components/pages/Milan.js';
import Monachium from './components/pages/Monachium.js';

import './App.css';

function App() {
    return (
        <>
            <Router basename={process.env.PUBLIC_URL}>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/products" exact component={Products} />
                    <Route path="/sign-up" exact component={SignUp} />
                    <Route path="/Barcelona" exact component={Barcelona} />
                    <Route path="/Manchester" exact component={Manchester} />
                    <Route path="/Kiev" exact component={Kiev} />
                    <Route path="/Paris" exact component={Paris} />
                    <Route path="/Milan" exact component={Milan} />
                    <Route path="/Monachium" exact component={Monachium} />
                    <Route path="/London" exact component={London} />
                </Switch>
            </Router>
        </>
    );
}

export default App;