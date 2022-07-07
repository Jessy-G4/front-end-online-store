import React from 'react';
import { Link } from 'react-router-dom';

class ProductsList extends React.Component {
    state = {
      inputSearch: '',
    }

    handleChange = (event) => {
      const { value, name } = event.target;
      this.setState({
        [name]: value,
      });
    }

    render() {
      const { inputSearch } = this.state;
      return (
        <div>
          <label htmlFor="inputSearch">
            <input
              type="text"
              name="inputSearch"
              id="inputSearch"
              onChange={ this.handleChange }
            />
          </label>
          {inputSearch.length === 0
          && (
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.

            </p>)}
          <Link to="/cart" data-testid="shopping-cart-button">carrinho</Link>
        </div>
      );
    }
}

export default ProductsList;
