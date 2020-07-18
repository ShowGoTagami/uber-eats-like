import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import { Restaurants } from './containers/Restaurants.jsx';
import { Foods } from './containers/Foods.jsx';
import { Orders } from './containers/Orders.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/restaurants">
          <Restaurants />
        </Route>
        <Route
          exact
          path="/restaurants/:restaurantsId/foods"
          render={({ match }) =>
            <Foods
              match={match}
            />
        }
        />
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
