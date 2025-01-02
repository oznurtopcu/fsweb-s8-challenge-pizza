import './reset.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import OrderPizza from './components/OrderPizza/OrderPizza';
import Success from './components/Success/Success';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

const initialData = {
  boyut: '',
  kalinlik:'',
  extra: [],
  isim: '',
  siparisNotu: '',
  adet: 1
};

function App() {

  const [currentPage, setCurrentPage] = useState('home');
  const [data, setData] = useState(initialData);
  const [dataResponse, setDataResponse] = useState({});

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
      {currentPage !== 'home' && <Header />}
      {currentPage === 'home' && <Home pageRouter={pageRouter} />}
      {currentPage === 'order-pizza' && <OrderPizza pageRouter={pageRouter} initialData={initialData} data={data} setData={setData} setDataResponse={setDataResponse}/>}
      {currentPage === 'success' && <Success pageRouter={pageRouter} dataResponse={dataResponse}/>}
      {<Footer/>}
    </>
  )
}

export default App;
