import React, { Component } from "react"
import "./animal.css"

export default class EditAnimal extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            type: "",
            employeeId: ""
        }
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    componentDidMount(){
        console.log("edit animal mounted", this.props)
        /*
            need to setState with the values of the card
            and input it inside of this form below VvvV
            If you only want to set the initial value of the input, use defaultValue property (docs). defaultValue will set the initial value, but then allow the value to be changed.
        */

        // this.props.match.params is an object inside of your browser
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId, 0)) || {}
        // console.log("animal.find", animal)
        this.setState({
            name: animal.name,
            type: animal.type,
            employeeId: animal.employeeId,
            id: animal.id
        })
        // console.log("setState?", this.state);

    }

    render() {
        // console.log("edit animal rendered", this.props)
        
        return (
            <React.Fragment>
                    <div className="form-group animalForm">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               defaultValue={this.state.name}
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="type"
                               defaultValue={this.state.type}
                               placeholder="Type of Animal" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue={this.state.employeeId} name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" id="submit-edit" onClick={() => {this.props.editAnimal("animals", this.state.id, {
                        name: this.state.name,
                        type: this.state.type,
                        employeeId: this.state.employeeId,
                        id: this.state.id
                    }).then(this.props.history.push("/animals"));}}>Submit</button>
            
            </React.Fragment>
        )
    }
}