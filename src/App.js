import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ ProductsList } />
      <Route path="/cart" component={ Cart } />
    </BrowserRouter>
  );
}

export default App;
