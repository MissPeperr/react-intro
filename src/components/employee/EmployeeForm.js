import React, { Component } from "react"
import './employee.css'

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        name: "",
        locationId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating employee object, and
        invoking the function reference passed from parent component
     */
    constructNewEmployee = event => {
        event.preventDefault()
            const employee = {
                name: this.state.name,
                locationId: this.props.locations.find(L => L.name === this.state.locationId).id
            }

            // Create the employee and redirect user to employee list
            this.props.saveEmployee("employees", employee).then(() => this.props.history.push("/employees"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee Full Name:</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Employee name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Assign to a Location:</label>
                        <select name="locationId" id="locationId" onChange={this.handleFieldChange}>
                        {
                            this.props.locations.map(location => <option key={location.id} id={location.id}>{location.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-info" id="employee-submit-btn">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}