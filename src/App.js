import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import EmployeesRedux from './Components/EmployeesRedux';
import CounterRedux from './Components/CounterRedux';
import UserListRedux from './Components/UserListRedux';
import Navbar from './Components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/employees'} element={<EmployeesRedux/>}/>
          <Route path={'/counter'} element={<CounterRedux/>}/>
          <Route path={'/users'} element={<UserListRedux/>}/>
        </Routes>
    </React.Fragment>
  );
}

export default App;
