import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {Route, Switch} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PrimarySearchAppBar from './components/menu';
import Cart from './components/pages/Cart';
import Signup from './components/pages/Signup';
import SignIn from './components/pages/signin';
import PrivateRoute from './components/privateRoute/privateRoute';
import Search from './components/pages/searched';
import Checkout from './components/pages/Checkout'




const MainRouter=(props)=>{
    return (
        <div>
             <PrimarySearchAppBar />
        <Switch>
            
            <Route path="/" component={Home} exact={true} />
            <Route path="/product/:productId" component={About} />
            <Route path='/cart' component={Cart} />
            <Route path="/checkout" component={Checkout} />

        </Switch>
        </div>
    );
}

export default hot(module)(MainRouter);