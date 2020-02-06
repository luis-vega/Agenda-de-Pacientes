import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class Procedure extends Component {
  handleSubmitProc = (e) => {
    e.preventDefault();
    const id = 0;

    const patient = this.props.users['0']['name'];
    const description = this.getDescription.value;
    const doctor = this.getDoctor.value;
    const room = this.getRoom.value;
    const status = "Planned"
    const startTime = this.getStartTime.value;
    const endTime = this.getEndTime.value;
    const procdata = {
      id,
      patient,
      description,
      doctor,
      room,
      status,
      startTime,
      endTime
    }
    if(doctor==="@Doctor" || room==="@Room" || patient ==="@Patient") {
      if (patient==="@Patient"){
          alert("Please specify a Patient for the procedure");
      }else if (doctor==="@Doctor") {
          alert("Please specify a Doctor for the procedure");
      }else{
          alert("Please specify a Room for the procedure");
      }
    }else{
      this.props.dispatch({
        type: "ADD_PROCEDURE",
        payload: procdata
      });
      this.getPatient.value = "@Patient"
      this.getDescription.value = "";
      this.getDoctor.value = "@Doctor";
      this.getRoom.value = "@Room";
      this.getStartTime.value = "";
      this.getEndTime.value = "";
    }

  }
  render() {
    let patients = this.props.users.map((patients) =>
                    <option key={patients.id} value={patients.id}>
                        {patients.name}
                    </option>
                );
    let doctors = this.props.doctors.map((doctor) =>
                    <option key={doctor.id} value={doctor.id}>
                        {doctor.name}
                    </option>
                );
    let rooms = this.props.rooms.map((room) =>
                    <option key={room.id} value={room.id}>
                        {room.name}
                    </option>
                );

    return (
      <div>
        <h1 className="d-flex justify-content-center">Schedule a Procedure</h1>
        <Form onSubmit={this.handleSubmitProc}>
          <Form.Row className="d-flex justify-content-center">
            <Form.Group className="p-2 text-center">
                <Form.Label>Select Patient</Form.Label>
                <Form.Control as="select" size = "sm" required ref={(input) => this.getPatient = input}>
                  <option>@Patient</option>
                  {patients}
              </Form.Control>
            </Form.Group>
            <Form.Group className="p-2 text-center">
                <Form.Label>Study description</Form.Label>
                <Form.Control size = "sm" required type="text" placeholder="@Description" ref={(input) => this.getDescription = input}/>
            </Form.Group>
            <Form.Group className="p-2 text-center">
                <Form.Label>Select Doctor</Form.Label>
                <Form.Control as="select" size = "sm" required ref={(input) => this.getDoctor = input}>
                  <option>@Doctor</option>
                  {doctors}
              </Form.Control>
            </Form.Group>
            </Form.Row>
            <Form.Row className="d-flex justify-content-center">
            <Form.Group className="p-2 text-center">
                <Form.Label>Select Room</Form.Label>
                <Form.Control as="select" size = "sm" required ref={(input) => this.getRoom = input}>
                  <option>@Room</option>
                  {rooms}
              </Form.Control>
            </Form.Group>
            <Form.Group className="p-2 text-center">
                <Form.Label>Planned Start time</Form.Label>
                <Form.Control size = "sm" required type="datetime-local" placeholder="@Planned Start time" ref={(input) => this.getStartTime = input}/>
            </Form.Group>
            <Form.Group className="p-2 text-center">
                <Form.Label>Estimated End time</Form.Label>
                <Form.Control size = "sm" type="datetime-local" placeholder="@Estimated End time" ref={(input) => this.getEndTime = input}/>
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Button variant="primary" type="submit">Add Procedure</Button>
          </Form.Row>
        </Form>
        <hr/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    doctors: state.doctors,
    rooms:state.rooms
  }
}

export default connect (mapStateToProps)(Procedure);
