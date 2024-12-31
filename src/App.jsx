import './reset.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import OrderPizza from './components/OrderPizza/OrderPizza';
import Success from './components/Success/Success';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const pageRouter = (page) => {
    setCurrentPage(page);
  }

  /*<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/order-pizza">
    <OrderPizza />
  </Route>
  <Route path="/success">
    <Success />
  </Route>
  </Switch>*/

  return (
    <>
      {currentPage === 'home' && <Home pageRouter={pageRouter} />}
      {currentPage === 'order-pizza' && <OrderPizza pageRouter={pageRouter} />}
      {currentPage === 'success' && <Success pageRouter={pageRouter} />}
    </>
  )
}

export default App;
