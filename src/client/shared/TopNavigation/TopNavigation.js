import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import { HOME, PLAYERS, GAMES, TEAMS, COMPARE } from '../Routes/paths';

import { styles } from './styles';

import { TopNavigationLink, TopNavigationLinkFirst } from './TopNavigationLink';

let TopNavigation = () => {
  return (
    <nav style={styles.base}>
      <div style={[styles.base, styles.container]}>
        <TopNavigationLinkFirst to={HOME} />
        <div style={styles.linkGroup}>
          <TopNavigationLink to={COMPARE} text='COMPARE' />
          <TopNavigationLink to={PLAYERS} text='PLAYERS' />
          <TopNavigationLink to={GAMES} text='GAMES' />
          <TopNavigationLink to={TEAMS} text='TEAMS' />
        </div>
      </div>
    </nav>
  );
};

TopNavigation = Radium(TopNavigation);
export { TopNavigation };
