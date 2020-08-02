import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ getUsersList, isLoading }) => (
  <div className="center">
    <button
      className="btn btn-success"
      type="button"
      onClick={getUsersList}
    >
      Download data
    </button>
    {isLoading && <h1 className="loading">Is loading...</h1>}
  </div>

);

Button.propTypes = {
  getUsersList: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
