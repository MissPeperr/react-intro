import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./animal.css"
import "../../index.css"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews

            React Router will supply any dynamic pieces of the URL to the component via an object called match.params as own props of the related component.
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId, 0)) || {}

        return (
            <section className="animals">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={dog} alt="pupperino" className="icon--dog" />
                            {animal.name}
                        </h4>
                        <h6 className="card-title">{animal.type}</h6>
                        <Link className="nav-link" to="/animals" onClick={() => this.props.deleteAnimal(animal.id)}>Delete</Link>
                    </div>
                </div>
            </section>
        )
    }
}