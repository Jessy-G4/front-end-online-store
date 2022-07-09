import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = { product: [] };
  }

  componentDidMount() {
    this.getProduct();
  }

getProduct = async () => {
  const { match } = this.props;
  const productId = match.params.id;
  const productData = await getProductDetails(productId);
  this.setState({ product: productData });
}

render() {
  const { product: { title, thumbnail, price } } = this.state;
  return (
    <div>
      <h3 data-testid="product-detail-name">{ title}</h3>
      <img src={ thumbnail } alt={ title } />
      <p>{price}</p>
      <Link to="/cart">carrinho</Link>
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
