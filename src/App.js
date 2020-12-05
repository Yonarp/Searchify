import React from 'react';
import {Searchbox} from './Components/searchbox/searchbox.component.jsx';
import {Route,Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact = {true} path ='/'>
      <Searchbox/>
      </Route>
      <Route  path = '/search'>
        <h1>This is the search page</h1>
      </Route>
      </Switch>

    </div>
  );
}

export default App;
