import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import EmployeeCard from './EmployeeCard'


export default class EmployeeList extends Component {
    render() {
        const animals = this.props.animals
        console.log("animalsss", animals)
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

                {/* 
                    Here we are passing a key, the employees, and the animals to the EmployeeCard.js
                    Key is the id of the employee
                    Employee is the list of employees
                    Animals is the list of animals
                */}
            {
                this.props.employees.map((employee) =>
                   <EmployeeCard key={employee.id} employee={employee} animals={animals} deleteEmployee={this.props.deleteEmployee} {...this.props}/>
                    
                )
            }
            </div>
            </section>
        )
    }
}