import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import { styles } from './styles';
import Logo from '../sporting_spy_logo.png';

const RadiumizedLink = Radium(Link);
const TopNavigationLink = ({ text, to }) => {
  return <RadiumizedLink style={[styles.base]} to={to}>{text}</RadiumizedLink>;
};
const TopNavigationLinkFirst = ({ to }) => {
  return (
    <RadiumizedLink style={[styles.base, styles.floatLeft]} to={to}>
      <img src={Logo} alt='Sporting Spy' style={styles.logo} /> Sporting Spy
    </RadiumizedLink>
  );
};



export { TopNavigationLink, TopNavigationLinkFirst };

