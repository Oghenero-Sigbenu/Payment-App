import React, {Component} from 'react';
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Home, Payments, PaymentDetails} from "./pages/index"
import AppNavbar from "../src/components/AppNavbar/AppNavbar"
import './App.css';

 class App extends Component {
   render(){
  return (
    <div className="App">
    <AppNavbar />
    <Switch>
    <Route exact path="/payments" component={Payments}/>
      <Route exact path="/" component={Home}/>
    </Switch>
    </div>
  );
   }
}

export default App;
