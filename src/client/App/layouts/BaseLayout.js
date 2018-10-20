import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'Container';
import { Footer } from 'Footer';
import { TopNavigation } from 'TopNavigation';


const BaseLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => {
        return (
          <React.Fragment>
            <TopNavigation />
            <Container isPoised>
              <Component {...matchProps} />
            </Container>
            <Footer />
          </React.Fragment>
        )
      }}
    />
  );
};

BaseLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

export { BaseLayout };

