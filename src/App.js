import React from 'react';
import Home from './Pages/Home/home.component.jsx';
import SearchPage from './Pages/SearchPage/searchpage.component.jsx';
import {Route,Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact = {true} path ='/'>
      <Home/>
      </Route>
      <Route  path = '/search'>
        <SearchPage/>
      </Route>
      </Switch>

    </div>
  );
}

export default App;
