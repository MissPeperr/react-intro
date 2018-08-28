import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            <h2>All of the Animal's Owners!</h2>
            <button type="button"
                    id="add-owner-btn"
                    className="btn btn-info"
                    onClick={() => {this.props.history.push("/owners/new")}}>
                    Quick Add Owner
            </button>
            <div className="owner-cards">
            {
                this.props.owners.map((owner) =>
                <div key={owner.id} className="card">
                    <h3 className="card-title">{owner.name}</h3>
                    <button onClick={() => this.props.deleteOwner(owner.id)}
                            className="card-link btn btn-danger"
                            id="delete-owner-btn">Delete Owner
                    </button>
                    <div>
                    <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                    </div>
                </div>
                )
            }
            </div>
            </section>
        )
    }
}
/* <button onClick={()=> this.props.addOwner()}>Add a New Owner</button> */