import LoginContainer from 'containers/LoginContainer';
import TodoContainer from 'containers/TodoContainer';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginContainer />
        </Route>
        <Route path="/">
          <TodoContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
