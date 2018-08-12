import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from '../Container';
import { TopNavigation } from '../TopNavigation';
import { Footer } from '../Footer';

const BaseLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => {
        return (
          <div className='PageContainer'>
            <TopNavigation />
            <Container>
              <Component {...matchProps} />
            </Container>
            <Footer />
          </div>
        )
      }}
    />
  );
};

BaseLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

export { BaseLayout };
