import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import ReadBookContext from './ReadBookContext';

function Provider({ children }) {

  const context = {
  };

  return (
    <ReadBookContext.Provider value={context}>
      { children }
    </ReadBookContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
