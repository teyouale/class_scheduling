import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Departements from "./Components/Departements/Departements";
import { createTable, initalzation } from "./algorthm"
import Button from './Components/Controls/Button';
import Result from './Components/Result/Result';

const App = () => {
  const [schedules, setschedules] = useState([])
  const handleMessage = (item) => {
    var a = initalzation(item);
    console.log(a);
    setschedules(a);
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Departements handleMessage={handleMessage} />
          </Route>
          <Route path="/result" exact>
            <Result schedules={schedules} />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
