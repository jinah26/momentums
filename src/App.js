import React from 'react';
import {Route } from 'react-router-dom'
import Name from './component/Name'
import Time from './component/Time'
import Todo from './component/Todo'

function App() {
  return(
    <>
    <Route exact path="/" component={Name} />
    <Route exact path="/Time" component={Time} />
    <Route exact path="/Todo" component={Todo} />
    </>
  );
};

export default App;