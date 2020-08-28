import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AdminConsole } from './components/AdminConsole';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminConsole></AdminConsole>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
