import React from "react"
import PropType from "prop-types"
import { Link } from "react-router-dom"
import dog from "./DogIcon.png"
import "./animal.css"

const AnimalCard = ({animal, deleteAnimal}) => {
        return (
            <div key={animal.id} className="card animal-card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={dog} alt="pupper" className="icon--dog" />
                        {animal.name}
                        <div>
                        <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                        </div>
                        <div className="link-div">
                        <Link className="nav-link" to={`/animals/edit/${animal.id}`}>Edit Animal</Link>
                        </div>
                        <button
                            onClick={() => deleteAnimal(animal.id)}
                            className="card-link">Discharge</button>
                    </h5>
                    </div>
            </div>
        )
}

AnimalCard.propTypes = {
    animal: PropType.shape({
        name: PropType.string.isRequired,
        type: PropType.string.isRequired,
        employeeId: PropType.number.isRequired,
        id: PropType.number.isRequired
        })
}

export default AnimalCard