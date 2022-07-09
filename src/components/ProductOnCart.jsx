import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductDetails } from '../services/api';

class ProductOnCart extends React.Component {
  state = {
    product: [],
  }

  getProduct = async (id) => {
    const productData = await getProductDetails(id);
    this.setState((prevState) => (
      { product: [...prevState.product, productData] }));
  }

  sendToCar = async () => {
    const { id } = this.props;
    await this.getProduct(id);
    const { product } = this.state;
    localStorage.setItem('product', JSON.stringify(product));
  }

  render() {
    const { product } = this.state;
    return (
      <div
        data-testid="product"
      >
        <h3>{ product.title }</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p>
        <Link
          to={ `/product-details/${product.id}` }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

ProductOnCart.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;

export default ProductOnCart;
