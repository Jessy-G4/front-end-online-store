import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesCard from '../components/CategoriesList';
import ProductsCard from '../components/ProductsList';

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
            <CategoriesCard
              key={ category.id }
              name={ category.name }
            />
          )) }
          { productsList.map((product) => (
            <ProductsCard
              key={ product.id }
              title={ product.title }
              thumbnail={ product.thumbnail }
              price={ product.price }
            />
          )) }
        </div>
      );
    }
}

export default ProductsList;
