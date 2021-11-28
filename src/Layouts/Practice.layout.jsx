import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import routes from '../Router/practice.routes';
import "bootstrap-icons/font/bootstrap-icons.css";

function Practice() {
   const match = useRouteMatch();
   return (
      <Switch>
         {
            routes.map(({ path, exact, Component }, index) => (
               <Route
                  key={index}
                  path={match.path + path}
                  exact={exact}
                  component={Component}
               />
            ))
         }
      </Switch>
   );
}

export default Practice;
