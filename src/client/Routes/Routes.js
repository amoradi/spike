import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { BaseLayout } from '../shared/layouts/BaseLayout';

import { PageNotFound } from '../PageNotFound';
import { HomePage } from '../HomePage';
import { PlayerPage } from '../PlayerPage';

const Routes = () =>
  (<BrowserRouter>
    <Switch>
      <BaseLayout path='/players' component={PlayerPage} />
      <BaseLayout exact path='/' component={HomePage} />
      <BaseLayout component={PageNotFound} />

    </Switch>
  </BrowserRouter>)
  ;

export { Routes };
