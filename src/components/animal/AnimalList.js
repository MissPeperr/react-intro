import React, { Component } from "react"
import "./animal.css"
import AnimalCard from "./AnimalCard"

export default class AnimalList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="animals">
                <h2>Animals Admitted</h2>
                <div className="animalButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/animals/new")}
                            className="btn btn-success">
                        Admit Animal
                    </button>
                </div>
                <section className="animals animal-cards">
                {
                    this.props.animals.map(animal =>
                        <AnimalCard key={animal.id} animal={animal} deleteAnimal={this.props.deleteAnimal} {...this.props} />
                    )
                    
                }
                </section>
                </div>
            </React.Fragment>
        )
    }
}