import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './pages/index/App';
import SignIn from './pages/signIn/SignIn';
import FulfillDetail from './pages/signIn/FulfillDetail';
import CreateOrder from './pages/createOrder/CreateOrder';

import registerServiceWorker from './registerServiceWorker';

function home() {
  return <h2>HOME PAGE</h2>;
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route path='/signin' component={SignIn}></Route>
            <Route path='/detail' component={FulfillDetail}></Route>
            <Route path='/order' component={CreateOrder}></Route>

        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
registerServiceWorker();
