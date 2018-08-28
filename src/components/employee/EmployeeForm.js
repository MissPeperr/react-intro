import React, { Component } from "react"
import './employee.css'

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        name: ""
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
            }

            // Create the employee and redirect user to employee list
            this.props.saveEmployee("employees", employee).then(() => this.props.history.push("/employees"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee Full Name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Employee name" />
                    </div>
                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-info" id="employee-submit-btn">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}