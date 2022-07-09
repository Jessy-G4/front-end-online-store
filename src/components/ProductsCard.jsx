import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getProductDetails } from '../services/api';

class ProductsCard extends React.Component {
  // state = {
  //   product: [],
  // }

  // getProduct = async (id) => {
  //   const productData = await getProductDetails(id);
  //   this.setState((prevState) => (
  //     { product: [...prevState.product, productData] }));
  // }

  // sendToCar = async () => {
  //   const { id } = this.props;
  //   await this.getProduct(id);
  //   const { product } = this.state;
  //   localStorage.setItem('product', JSON.stringify(product));
  // }

  render() {
    const {
      title,
      thumbnail,
      price,
      id,
    } = this.props;
    return (
      <div
        data-testid="product"
      >
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <Link
          to={ `/product-details/${id}` }
          data-testid="product-detail-link"
        >
          Detalhes

        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.sendToCar }
        >
          Enviar para o carrinho
        </button>
      </div>
    );
  }
}

ProductsCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;

export default ProductsCard;
