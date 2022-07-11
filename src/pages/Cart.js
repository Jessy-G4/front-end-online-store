import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  state = {
    products: [],
    filteredProducts: [],
  }

  componentDidMount() {
    this.getItemsInStorage();
  }

  getItemsInStorage = () => {
    const productsInStorage = JSON.parse(localStorage.getItem('product'));
    this.setState({ products: productsInStorage },
      () => this.setUniqueProductsWithQuantity());
  }

  setUniqueProductsWithQuantity = () => {
    const { products } = this.state;

    if (!products) {
      // se o local storage estiver vazio, insere um array vazio no state
      this.setState({ products: [] });
    } else {
      // separar os produtos unicos
      const arrayWithAllIDs = products.map((product) => product.id);
      const uniqueIDs = [...new Set(arrayWithAllIDs)];
      const uniqueProducts = [];

      // foreach nos unicos, para criar novo objeto a ser renderizado
      uniqueIDs.forEach((id) => {
        // find para trazer os objetos completos de cada produto, uma unica vez.
        const productsX = products.find((product) => product.id === id);

        // filter pra contar os produtos
        const quantity = products.filter((product) => product.id === id).length;

        // adiciona uma nova chave dentro deles com a quantity.
        productsX.quantity = quantity;
        uniqueProducts.push(productsX);
      });

      this.setState({ filteredProducts: uniqueProducts });
    }
  }

  render() {
    const { filteredProducts } = this.state;

    return (
      <div>
        <Link to="/">Home</Link>
        <div>
          {filteredProducts.length === 0
          && <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio.</h4>}
          {filteredProducts.map((product) => (
            <div key={ product.id }>
              <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
              <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
