import React from 'react';
import PropTypes from 'prop-types';

export default function ContainerComponent({children}) {
  return (
    <div className="w-full max-w-[1920px] flex self-stretch">{children}</div>
  );
}

ContainerComponent.propTypes = {
  children: PropTypes.node,
};
