import React from 'react';

import { styles } from './styles';

const Container = ({ children }) => {
  return (
    <div style={styles}>
      { children }
    </div>
  )
};

export { Container };
