import React from 'react';
import { Route } from 'react-router';
import { routes } from 'config';

export default routes.map((RouteData, index) => <Route {...RouteData} key={index} />);

