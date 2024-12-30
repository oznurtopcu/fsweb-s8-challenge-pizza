import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './reset.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import OrderPizza from './components/OrderPizza/OrderPizza';
import Success from './components/Success';
import { Switch, Route } from 'react-router-dom';


function App() {

  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/order-pizza">
          <OrderPizza />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
  )
}

export default App;
