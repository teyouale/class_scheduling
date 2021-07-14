import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Departements from "./Components/Departements/Departements";
import { inputFields, initalzation } from "./algorthm"
import Button from './Components/Controls/Button';
import Result from './Components/Result/Result';
import Example from './Components/ToPDF'
import Home from './Components/Home/Home';
import Corner from './Components/Controls/Corner'

const App = () => {
  const [schedules, setschedules] = useState([])
  const handleMessage = (item, index) => {
    console.log(index)
    inputFields(item, index);
    var a = initalzation(item, index);
    setschedules([...schedules, a]);
    // console.log(schedules);
  }

  return (
    <div className="App" >
      <Corner />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
            {/* <Departements handleMessage={handleMessage} /> */}
          </Route>
          <Route path="/classscheduling" exact>
            <Departements handleMessage={handleMessage} />
          </Route>

          <Route path="/result" exact>
            {
              (schedules.length == 0) ? <h1>Enter Correct Format</h1> :
                schedules.map((schedule) => (
                  <Result schedules={schedule} />
                ))}
          </Route>
          <Route path="/to" exact>
            <Example />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
