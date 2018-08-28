import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dog from "./DogIcon.png"
import "./animal.css"

// import OwnerList from "../owner/OwnerList"

/*
    React Router will supply any dynamic pieces of the URL to the component via an object called match.params as own props of the related component.
*/

export default class AnimalList extends Component {
    render () {
        // make an if/else statement for the search bar function
        // if user types in anything related to the list of animals
        return (
            <section className="animals">
            <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}}>Admit Animal</button>
                </div>
                <div className="animal-cards">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" />
                                {animal.name} 
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                <Link
                                    onClick={() => this.props.editAnimal("animals", animal.id)}
                                    className="nav-link" to={`/animals/edit/${animal.id}`}>Edit Animal</Link>
                                <button
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete Animal</button>
                            </h5>
                            <p className="card-body">
                                {animal.name} is a {animal.type}!
                            </p>
                        </div>
                    </div>
                )
            }
            </div>
            </section>
        )
    }
}
