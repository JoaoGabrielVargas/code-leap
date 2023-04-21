import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';

export default function ConfigIcon({ children }) {
  const contextValue = useMemo(() => ({ size: '23px' }));
  return (
    <IconContext.Provider value={contextValue}>
      {children}
    </IconContext.Provider>
  );
}
