import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { BaseLayout } from 'layouts/BaseLayout';
import { HomePage } from 'pages/HomePage';
import { PageNotFoundPage } from 'pages/PageNotFoundPage';
import { PlayerPage } from 'pages/PlayerPage';
import { HOME, PLAYER } from './paths';

const Routes = () =>
  (<BrowserRouter>
    <Switch>
      <BaseLayout path={PLAYER} component={PlayerPage} />
      <BaseLayout exact path={HOME} component={HomePage} />
      <BaseLayout component={PageNotFoundPage} />
    </Switch>
  </BrowserRouter>)
  ;

export { Routes };

