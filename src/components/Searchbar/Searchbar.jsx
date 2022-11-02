import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ifEmptySearchAlert } from '../Notiflix/Notiflix';
import { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ setSearchQuery }) => {
  const [inputText, setInputText] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    setSearchQuery(inputText);

    if (setInputText === '') {
      ifEmptySearchAlert();
    }
  };
  const handleInputChange = event => {
    setInputText(event.target.value);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.span}>
            <FaSearch />
          </span>
        </button>

        <input
          className={css.input}
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};
