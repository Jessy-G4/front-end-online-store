import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class ProductsList extends React.Component {
    state = {
      inputSearch: '',
      categoriesList: [],
    }

    componentDidMount() {
      this.callGetCategories();
    }

    callGetCategories = async () => {
      const categories = await getCategories();
      this.setState({
        categoriesList: categories,
      });
    }

    handleChange = (event) => {
      const { value, name } = event.target;
      this.setState({
        [name]: value,
      });
    }

    render() {
      const { inputSearch, categoriesList } = this.state;
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
          { categoriesList.map((category) => (
            <label htmlFor="categoryRadio" key={ category.id } data-testid="category">
              <input
                type="radio"
                name="categoryRadio"
                value={ category.name }
                id="categoryRadio"
              />
              {category.name}
            </label>)) }

        </div>
      );
    }
}

export default ProductsList;
