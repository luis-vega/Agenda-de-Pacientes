import React, { Component } from "react";
import { connect } from "react-redux";

import UpdateProcedure from "./UpdateProcedure"
class ProcedureList extends Component {
  render() {
    return(
      <div>
        <h3 className="d-flex justify-content-center">Update Procedures</h3>
        {this.props.procedures.map((procedure) => <UpdateProcedure key={procedure.id} procedure={procedure} />)}
        <hr/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    doctors: state.doctors,
    rooms:state.rooms,
    procedures:state.procedures
  }
}

export default connect (mapStateToProps)(ProcedureList);
