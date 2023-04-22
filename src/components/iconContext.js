import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

function ConfigIcon({ children }) {
  const contextValue = useMemo(() => ({ size: '23px' }));
  return (
    <IconContext.Provider value={contextValue}>
      {children}
    </IconContext.Provider>
  );
}

ConfigIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConfigIcon;
