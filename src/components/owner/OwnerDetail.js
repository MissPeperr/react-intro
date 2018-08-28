import React, { Component } from 'react'

export default class OwnerDetail extends Component {
    render() {

        const owner = this.props.owners.find(o => o.id === parseInt(this.props.match.params.ownerId, 0)) || {}

        return (
            <section className="owners">
            
                <div key={owner.id}>
                    <h3>{owner.name} <button
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete Owner</button></h3>
                    <h5>Phone Number: {owner.phoneNumber}</h5>
                </div>
            </section>
            )
    }
}