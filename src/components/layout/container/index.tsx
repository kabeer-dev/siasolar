import React from 'react';
import PropTypes from 'prop-types';

export default function Container({children}) {
  return (
    <div className="container mx-auto sm:pl-20 sm:pr-20 pl-5 pr-5">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};
