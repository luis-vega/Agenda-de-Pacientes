import React, { Component } from "react"
import {connect} from 'react-redux';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class User extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const id = 0;
    const id_user = this.getId.value;
    const name = this.getName.value;
    const gender = this.getGender.value;
    const birthDate= this.getbirthDate.value;
    const userdata = {
      id,
      id_user,
      name,
      gender,
      birthDate
    }
    this.props.dispatch({
      type: "ADD_USER",
      payload: userdata
    });
    this.getId.value = "";
    this.getName.value = "";
    this.getGender.value = "@UserGender";
    this.getbirthDate.value = "";
  }

  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-center">Create User</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row className="d-flex justify-content-center">
            <Form.Group className="p-2 text-center">
                <Form.Label>Enter Patient ID</Form.Label>
                <Form.Control size = "sm" min="0" required type="number" placeholder="@UserID" ref={(input) => this.getId = input}/>
            </Form.Group>
            <Form.Group className="p-2 text-center">
                <Form.Label>Enter Patient Name</Form.Label>
                <Form.Control size = "sm" required type="text" placeholder="@Username" ref={(input) => this.getName = input}/>
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Form.Group className="p-2 text-center">
              <Form.Label>Select User Gender</Form.Label>
              <Form.Control as="select" size = "sm" ref={(input) => this.getGender = input}>
                <option>@UserGender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="p-2 text-center">
              <Form.Label>Enter User Birth Date</Form.Label>
              <Form.Control size = "sm"  type="date" placeholder="@UserBirthDate" ref={(input) => this.getbirthDate = input}/>
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Button variant="primary" type="submit">Add User</Button>
          </Form.Row>
        </Form>
        <hr/>
      </div>
    );
  }
}
export default connect()(User);
