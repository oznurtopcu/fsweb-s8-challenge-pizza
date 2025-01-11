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
import { useLocation } from 'react-router-dom';

const initialData = {
  pizza: '',
  fiyat: 0,
  adet: 1,
  boyut: '',
  kalinlik:'',
  extra: [],
  isim: '',
  siparisNotu: '',
};

function App() {
  const [data, setData] = useState(initialData);
  const [dataResponse, setDataResponse] = useState({});

  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <main>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/order-pizza">
              <OrderPizza initialData={initialData} data={data} setData={setData} setDataResponse={setDataResponse}/>
            </Route>
            <Route path="/success">
              <Success dataResponse={dataResponse}/>
            </Route>
        </Switch>
      </main>
      <Footer/> 
    </>
  )
}

export default App;