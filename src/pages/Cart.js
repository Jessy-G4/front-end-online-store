import React from 'react';
import { Link } from 'react-router-dom';
import ProductOnCart from '../components/ProductOnCart';

class Cart extends React.Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.productLocal();
  }

  productLocal = () => {
    const getProduct = JSON.parse(localStorage.getItem('product'));
    // return getProduct;
    this.setState({ products: getProduct });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Link to="/">Ir para Home</Link>

        { products.map((product) => (
          <ProductOnCart
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
          />
        ))}
      </div>
      // <p data-testid="shopping-cart-empty-message">
      //   Seu carrinho está vazio
      // </p>);
    );
  }
}

export default Cart;
