import React from 'react';
import {Route} from 'react-router-dom'
import Home from './page/Home'

function App() {
  return(
    <>
    <Route exact path="/" component={Home} />
    </>
  );
};

export default App;