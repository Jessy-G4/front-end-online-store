import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ ProductsList } />
    </BrowserRouter>
  );
}

export default App;
