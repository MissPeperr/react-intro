import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AnimalCard from '../animal/AnimalCard'


export default class EmployeeList extends Component {
    render() {
        return (
            // EVERYTHING IN HERE IS NOT HTML
            // THIS IS XML!
            <section className="employees">
            <h2>Everyone that helps out!</h2>
            <button type="button"
                    id="add-employee-btn"
                    className="btn btn-info"
                    onClick={() => {this.props.history.push("/employees/new")}}>
                    Quick Add Employee
            </button>
            <div className="employee-cards">
            {
                this.props.employees.map((employee) =>
                    <div key={employee.id} className="card">
                        <h3>
                        {employee.name}
                        </h3>
                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                        <button
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link btn btn-danger"
                                    id="delete-employee-btn">Fire Employee
                        </button>
                        <h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
                    <div className="animals--caretaker">
                    {
                        this.props.animals
                            .filter(anml => anml.employeeId === employee.id)
                            .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                    }
                    </div>
                    </div>
                    
                )
            }
            </div>
            </section>
        )
    }
}

/*
 THIS IS HOW IT WOULD LOOK LIKE IN VANILLA JAVASCRIPT:

const state = {
    locations = [
        {
            name: "Nashville North",
            address: "500 Puppy Way"
        },
        {
            name: "Nashville North",
            address: "576 Puppy Way"
        }
    ],
    employees = [
        {
            name: "Meg Ducharme"
        },
        {
            name: "Blaise Roberts"
        }
    ]
}

function printEmployee (employee) {
    return `<div id={employee.id}>
                {employee.name}
            </div>`
}

state.employees.forEach(employee =>
    document.querySelector(".employees").innerHTML += printEmployee(employee)
)
*/

