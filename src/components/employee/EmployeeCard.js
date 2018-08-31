import React from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import AnimalCard from '../animal/AnimalCard'


/*
    In order to use 'propTypes', we're using a function as opposed to a component.
    We're passing in two parameters, 'employee' and 'animals' that were passed from EmployeeList.js
        1. Creating the div/card FOR EACH employee
        2. The 'h3' tag is holding the name of the employee
        3. Creating a 'Link' to the details of the employee
        4. Creating a button to fire the employee with
            4a. using the 'onClick' function, when the user clicks on the button, we're using this.props.deleteEmployee that takes the parameter 'employee.id' of that specfic card.
                *--this.props.deleteEmployee is a prop that was passed from EmployeeList.js
        5. We're using animals that was passed from EmployeeList.js to:
            -Filter them by the employee.id
            -Then mapping over the animals to be passed to the AnimalCard.js file
                *--We're passing them to the AnimalCard so the AnimalCard can be rendered on the DOM with the specified employee
        6. We're taking the function EmployeeCard, and adding propTypes to it.
*/

const EmployeeCard = ({employee, animals, deleteEmployee}) => {
        return (
        /*--1--*/
        <div key={employee.id} className="card employee-card">
        {/*--2--*/}
        <h3>
        {employee.name}
        </h3>
        {/*--3--*/}
        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
        {/*--4--*/}
        <button         /*--4a--*/
                    onClick={() => deleteEmployee(employee.id)}
                    className="card-link btn btn-danger"
                    id="delete-employee-btn">Fire Employee
        </button>
        
        <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
    <div className="animals--caretaker">
        {
            /*--5--*/
            animals
                .filter(anml => anml.employeeId === employee.id)
                .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
        }
    </div>
    </div>
    )
}
/*--6--*/
EmployeeCard.propTypes = {
    /*
        This rule ensures that `employee` is passed a property
        and that it is an object - not a string or number
        By using .shape, we can make sure that the object has a number for the id, a string for the name, and a number for the locationId.
    */
    employee: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        locationId: PropTypes.number
    })

}

export default EmployeeCard


