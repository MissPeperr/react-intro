import React, { Component } from "react"
import './owner.css'

export default class OwnerForm extends Component {
    // Set initial state
    state = {
        name: "",
        phoneNumber: ""
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
    constructNewOwner = event => {
        event.preventDefault()
            const owner = {
                name: this.state.name,
                phoneNumber: this.state.phoneNumber
            }

            // Create the employee and redirect user to employee list
            this.props.saveOwner("owners", owner).then(() => this.props.history.push("/owners"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner's Full Name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Owner's name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ownerNumber">Owner's Phone Number</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phoneNumber"
                               placeholder="Owner's Phone Number" />
                    </div>
                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-info" id="owner-submit-btn">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}