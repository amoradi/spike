import React from 'react';
import Radium from 'radium';

import { styles } from './styles';

let Container = ({ children, isPoised }) => {
  let computedStyles = isPoised ? [styles.base, styles.poised] : styles.base;

  return (
    <div style={computedStyles}>
      { children }
    </div>
  )
};

Container = Radium(Container);
export { Container };
