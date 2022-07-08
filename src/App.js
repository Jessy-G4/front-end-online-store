import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ ProductsList } />
      <Route path="/cart" component={ Cart } />
      <Route
        path="/product-details/:id"
        // render={ (props) => <ProductDetails { ...props } /> }
        component={ ProductDetails }
      />
    </BrowserRouter>
  );
}

export default App;
