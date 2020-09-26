import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AdminConsole } from './components/AdminConsole';
import { Top } from './components/Top';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminConsole></AdminConsole>
          </Route>
          <Route path="/">
            <Top></Top>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
