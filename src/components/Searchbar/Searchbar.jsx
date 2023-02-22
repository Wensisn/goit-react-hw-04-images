import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import css from './Searchbar.module.css';

export const Searchbar = ({ setSearchQuery }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
  });
  const initialValues = {
    name: '',
  };

  const handleSubmit = values => {
    setSearchQuery(values);
  };

  return (
    <header className={css.searchbar}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.span}>
              <FaSearch />
            </span>
          </button>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            name="name"
            className={css.input}
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};

Searchbar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};
