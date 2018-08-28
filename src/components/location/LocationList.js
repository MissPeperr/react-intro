import React, { Component } from 'react'
import './location.css'

export default class LocationList  extends Component {
    render() {
        return (
            <div className="locations">
            <h2>Our Locations:</h2>
            {
                this.props.locations.map(location =>
                    <section key={location.id}>
                    <h4>{location.name}</h4>
                    <h5>{location.address}</h5>
                    <div className="employee-location-card">
                    <h5 id="empl-h5">Employees:</h5>
                    {
                        this.props.employees
                            .filter(empl => empl.locationId === location.id)
                            .map(empl => 
                                <div key={empl.id}>
                                    <li>{empl.name}</li>
                                </div>
                            
                            )
                    }
                    </div>
                    </section>
                )    
            }
            </div>
        )
    }
}
