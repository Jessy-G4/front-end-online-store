import React from 'react';
import PropTypes from 'prop-types';

class CategoriesCard extends React.Component {
  render() {
    const {
      name,
    } = this.props;

    return (
      <label htmlFor="categoryRadio" data-testid="category">
        <input
          type="radio"
          name="categoryRadio"
          value={ name }
          id="categoryRadio"
        />
        { name }
      </label>
    );
  }
}

CategoriesCard.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default CategoriesCard;
