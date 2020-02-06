import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class UpdateProcedure extends Component {
  handleFinished = (e) => {
      e.preventDefault();
      this.props.dispatch({
        type: "FINISHED_PROCEDURE",
        payload: this.props.procedure
      });
    }

  handleInProgress= (e) => {
    console.log(this.props.procedure);
      e.preventDefault();
      this.props.dispatch({
        type: "INPROGRESS_PROCEDURE",
        payload: this.props.procedure
      });
    }

  render() {
    return(
      <div>
      <Form>
        <Form.Row className="d-flex justify-content-center">
          <Form.Group className="p-2 text-center">
            <Form.Label className="p-2 text-center">Procedure ID</Form.Label>
            <Form.Control size = "sm" plaintext readOnly value= {this.props.procedure.id} className="p-2 text-center"/>
          </Form.Group>
          <Form.Group className="p-2 text-center">
            <Form.Label className="p-2 text-center">Patient</Form.Label>
            <Form.Control size = "sm" plaintext readOnly value= {this.props.procedure.patient} className="p-2 text-center"/>
          </Form.Group>
          <Form.Group className="p-2 text-center">
            <Form.Label className="p-2 text-center">Procedure Description</Form.Label>
            <Form.Control size = "sm" plaintext readOnly value= {this.props.procedure.description} className="p-2 text-center"/>
          </Form.Group>
          <Form.Group className="p-2 text-center">
            <Form.Label className="p-2 text-center">Procedure Status</Form.Label>
            <Form.Control size = "sm" plaintext readOnly value= {this.props.procedure.status} className="p-2 text-center"/>
          </Form.Group>
        </Form.Row>
        <Form.Row className="d-flex justify-content-center">
        <Form.Group className="p-2 text-center">
          <Form.Label className="p-2 text-center">Performing Doctor</Form.Label>
          <Form.Control size = "sm" plaintext readOnly value= {this.props.procedure.doctor} className="p-2 text-center"/>
        </Form.Group>
        <Form.Group className="p-2 text-center">
          <Form.Label className="p-2 text-center">Procedure Room</Form.Label>
          <Form.Control size = "sm" plaintext readOnly value= {this.props.procedure.room} className="p-2 text-center"/>
        </Form.Group>
          <Form.Group className="p-2 text-center">
            <Form.Label className="p-2 text-center">Procedure Planned Start time</Form.Label>
            <Form.Control size = "sm" plaintext readOnly value= {this.props.procedure.startTime} className="p-2 text-center"/>
          </Form.Group>
          <Form.Group className="p-2 text-center">
            <Form.Label className="p-2 text-center">Procedure Estimated End time</Form.Label>
            <Form.Control size = "sm" plaintext readOnly value= {this.props.procedure.endTime} className="p-2 text-center"/>
          </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
          <Form.Group className="p-2 text-center">
          <Button onClick={this.handleInProgress} variant="outline-secondary" size="sm" type="submit">In Progress</Button>
          </Form.Group>
          <Form.Group className="p-2 text-center">
          <Button onClick={this.handleFinished} variant="outline-success" size="sm" type="submit">Finished</Button>
          </Form.Group>
        </Form.Row>
      </Form>

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

export default connect (mapStateToProps)(UpdateProcedure);
