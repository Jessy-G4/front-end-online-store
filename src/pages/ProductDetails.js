import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';

class ProductDetails extends React.Component {
state = {
  product: [],
};

componentDidMount() {
  this.getProduct();
}

getProduct = async () => {
  const { match } = this.props;
  const productId = match.params.id;
  const productData = await getProductDetails(productId);
  this.setState({ product: productData });
}

sendToCar = async () => {
  const { match } = this.props;
  const productId = match.params.id;
  await this.getProduct(productId);
  const { product } = this.state;
  const oldProduct = JSON.parse(localStorage.getItem('product'))
    ? JSON.parse(localStorage.getItem('product'))
    : [];
  localStorage.setItem('product', JSON.stringify([...oldProduct, product]));
}

render() {
  const { product: { title, thumbnail, price } } = this.state;
  return (
    <div>
      <Link to="/">Home</Link>
      {' '}
      <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
      <div>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ this.sendToCar }
      >
        Enviar para o carrinho
      </button>
    </div>
  );
}
}
ProductDetails.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductDetails;
