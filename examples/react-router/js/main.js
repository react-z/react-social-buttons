import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Layout from './components/Layout'
import Book from './components/Book'
import Home from './components/Home'


let routes = (  
  <Route name='layout' path='/' handler={Layout}>
  	<DefaultRoute name='home' handler={Home} />
  	<Route name='book' path='/book/:title?' handler={Book} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {  
  React.render(<Handler/>, document.getElementById('app'));
});