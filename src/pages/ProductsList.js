import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class ProductsList extends React.Component {
    state = {
      inputSearch: '',
      categoriesList: [],
      productsList: [],
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

    callgetProductsFromCategoryAndQuery = async () => {
      const { inputSearch } = this.state;
      const products = await getProductsFromCategoryAndQuery(undefined, inputSearch);
      this.setState({
        productsList: products.results,
      });
    }

    render() {
      const { inputSearch, categoriesList, productsList } = this.state;
      return (
        <div>
          <label htmlFor="inputSearch">
            <input
              type="text"
              name="inputSearch"
              id="inputSearch"
              data-testid="query-input"
              value={ inputSearch }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.callgetProductsFromCategoryAndQuery }
          >
            Pesquisar
          </button>
          { inputSearch.length === 0
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
            </label>
          )) }
          { productsList.map((product) => (
            <div
              key={ product.id }
              data-testid="product"
            >
              <h3>{ product.title}</h3>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
            </div>
          )) }
        </div>
      );
    }
}

export default ProductsList;
