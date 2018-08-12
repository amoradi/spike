import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { BaseLayout } from '../layouts/BaseLayout';
import { HOME, PLAYERS, PLAYER } from './paths';

import { PageNotFound } from '../../PageNotFound';
import { HomePage } from '../../HomePage';
import { PlayerPage } from '../../PlayerPage';

const Routes = () =>
  (<BrowserRouter>
    <Switch>
      <BaseLayout path={PLAYER} component={PlayerPage} />
      <BaseLayout exact path={HOME} component={HomePage} />
      <BaseLayout component={PageNotFound} />
    </Switch>
  </BrowserRouter>)
  ;

export { Routes };
