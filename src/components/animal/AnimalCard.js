import React, { Component } from "react"
import { Link } from "react-router-dom"
import dog from "./DogIcon.png"
import "./animal.css"

export default class AnimalCard extends Component {
    render() {
        return (
            <div key={this.props.animal.id} className="card animal-card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={dog} alt="pupper" className="icon--dog" />
                        {this.props.animal.name}
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <Link onClick={() => this.props.editAnimal("animals", this.props.animal.id)}
                            className="nav-link" to={`/animals/edit/${this.props.animal.id}`}>Edit Animal</Link>
                        <button
                            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="card-link">Discharge</button>
                    </h5>
                </div>
            </div>
        )
    }
}