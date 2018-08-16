import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import { HOME, PLAYERS, GAMES, TEAMS, COMPARE } from '../Routes/paths';

import { styles } from './styles';

import { TopNavigationLink, TopNavigationLinkFirst } from './TopNavigationLink';

class TopNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isScrolled: false };
    this.scrollFunction = this.scrollFunction.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFunction, false);
  }

  scrollFunction() {
    this.setState((prevState, props) => {
      return { isScrolled: (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)};
    });
  }

  render() {
    return (
      <nav style={[styles.base, styles.fixed, this.state.isScrolled && styles.shadowed]}>
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
  }
};

TopNavigation = Radium(TopNavigation);
export { TopNavigation };
