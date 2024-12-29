import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import OrderPizza from './components/OrderPizza';
import Success from './components/Success';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className='route-section'>
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
    </div>
  )
}

export default App;
