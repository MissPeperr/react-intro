import React, { Component } from "react"
import "./animal.css"

export default class EditAnimal extends Component {
    // Set initial state
    state = {
        name: "",
        type: "",
        employeeId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewAnimal = evt => {
        evt.preventDefault()
        if (this.state.employee === "") {
            window.alert("Please select a caretaker")
        } else {
            const animal = {
                name: this.state.name,
                type: this.state.type,
                employee: this.props.employees.find(e => e.name === this.state.employee).id
            }
            console.log("animals are dope yo", animal)

            // // Create the animal and redirect user to animal list
            // this.props.editAnimal("animals", animal)
        }
    }




    // componentDidMount(){
    //     //need to setState with the values of the card
    //     //and input it inside of this form below VvvV
    //     //If you only want to set the initial value of the input, use defaultValue property (docs). defaultValue will set the initial value, but then allow the value to be changed.
    // }

    render() {
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId, 0)) || {}
        return (
            <React.Fragment>
                    <div className="form-group animalForm">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               defaultValue={animal.name}
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="type"
                               defaultValue={animal.type}
                               placeholder="Type of Animal" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue={animal.employeeId} name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                        <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" id="submit-edit" onClick={() => {this.props.editAnimal("animals", animal.id, {
                        name: this.state.name,
                        type: this.state.type,
                        employeeId: animal.employeeId,
                        id: animal.id
                    })}}>Submit</button>
            
            </React.Fragment>
        )
    }
}