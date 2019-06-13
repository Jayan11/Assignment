  import React from 'react';
import Postlist from './Postlist';
import details from './details';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';



function App() {
  return (
<Router>
    <div className="App">
        <Route exact path="/"  component={Postlist} />
        <Route path="/details/:id" component={details} />
    </div>
</Router>
  );
}


export default App;
