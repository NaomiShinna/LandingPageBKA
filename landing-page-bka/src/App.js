import React from 'react';
// import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Assets/css/style.css';

//import Components
import BKA_ALUMNI_UNPAR from './Components/bka_alumni_unpar';

function App() {
  return (

    <Router>
      <Switch>
        <Route path = "/Alumni/" component = {BKA_ALUMNI_UNPAR}/>
      </Switch>
    </Router>
  );
}

export default App;
