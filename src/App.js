import React, { Component } from 'react';
import { connect } from "react-redux";

import User from "./User";
import Procedure from "./Procedure";
import ProcedureList from "./ProcedureList"

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "ADD_DOCTORS" });
    this.props.dispatch({ type: "ADD_ROOMS"})
  }
  render(){
    return (
      <div className="App">
          <User />
          <Procedure />
          <ProcedureList />
      </div>
    );
  }
}
export default connect()(App);
