import React, { Component } from 'react'


export default class EmployeeDetail extends Component {
    render() {

        const employee = this.props.employees.find(e => e.id === parseInt(this.props.match.params.employeeId, 0)) || {}
        return (
            // EVERYTHING IN HERE IS NOT HTML
            // THIS IS XML!
            <section className="employees">
            <h2>Everyone that helps out!</h2>
                    <div key={employee.id} className="card">
                        <h3>
                        {employee.name}
                        </h3>
                        
                        <button href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Fire Employee</button>
                    </div>
            </section>
        )
    }
}