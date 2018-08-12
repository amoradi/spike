import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { BaseLayout } from '../shared/layouts/BaseLayout';

import { HomePage } from '../HomePage';
import { PlayerPage } from '../PlayerPage';

const Routes = () =>
  (<BrowserRouter>
    <Switch>
      <BaseLayout path='/players' component={PlayerPage} />
      <BaseLayout path='/' component={HomePage} />
    </Switch>
  </BrowserRouter>)
  ;

export { Routes };
