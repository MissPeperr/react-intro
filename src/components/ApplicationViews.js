import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './Login'
import EditAnimal from './animal/EditAnimal'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeForm from './employee/EmployeeForm'
import EmployeeList from './employee/EmployeeList'
import OwnerDetail from './owner/OwnerDetail'
import OwnerForm from './owner/OwnerForm'
import OwnerList from './owner/OwnerList'
import DataManager from '../modules/DataManager'

/*
    In the ApplicationViews component, you will define how your application will 
    respond when the URL matches each of those patterns. 
    When a user clicks on one of the hyperlinks in the navigation bar, 
    this code dictates which component should be rendered.
*/

export default class ApplicationViews extends Component {
    // Check if credentials are in local storage
    isAuthenticated = () => (localStorage.getItem("credentials") !== null) || (sessionStorage.getItem("credentials") !== null)

  
    state = {
            employees: [],
            locations: [],
            animals: [],
            owners: [],
            searchValue: ""
    }

    componentDidMount() {
        console.log("component mounted!")
        const newState = {}

        // need to pass each object into the getAll()
        DataManager.getAll("animals")
        .then(allAnimals => newState.animals = allAnimals)
        DataManager.getAll("employees")
        .then(allEmployees => newState.employees = allEmployees)
        DataManager.getAll("locations")
        .then(allLocations => newState.locations = allLocations)
        DataManager.getAll("owners")
        .then(allOwners => newState.owners = allOwners)
        .then(() => {
            this.setState(newState)
        })
    }

    deleteAnimal = id => {
    DataManager.delete("animals", id)
    .then(() => DataManager.getAll("animals"))
    .then(allAnimals => this.setState({
        animals: allAnimals
        }))
    }
    saveAnimal = (string, animal) => DataManager.saveNew(string, animal)
    .then(() => DataManager.getAll("animals"))
    .then(animals => this.setState({
        animals: animals
    }))
    editAnimal = (string, animalID, animalObject) => DataManager.edit(string, animalID, animalObject)
    .then(() => DataManager.getAll("animals"))
    .then(animals => this.setState({
        animals: animals
    }))

    deleteEmployee = id => {
        DataManager.delete("employees", id)
        .then(() => DataManager.getAll("employees"))
        .then(employees => this.setState({
            employees: employees
            })
        )
    }
    saveEmployee = (string, employee) => DataManager.saveNew(string, employee)
    .then(() => DataManager.getAll("employees"))
    .then(employees => this.setState({
        employees: employees
    }))

    deleteOwner = id => {
        DataManager.delete("owners", id)
        .then(() => DataManager.getAll("owners"))
        .then(owners => this.setState({
            owners: owners
            })
        )
    }
    saveOwner = (string, owner) => DataManager.saveNew(string, owner)
    .then(() => DataManager.getAll("owners"))
    .then(owners => this.setState({
        owners: owners
    }))

    /*
    render() will run whenever the state changes
    */
    render(){
        console.log("render!")
        /*
            *--exact is needed on the first route, otherwise it will also match the other two routes, 
                and the LocationList will be the only component rendered, no matter what the URL is.

            The <Link/> and the <Route/> JSX elements are complementary to each other. 
            If you add a new Link element in your application with a new URL, then you must create a matching Route element.
            EX: www.google.com/aboutus
                                        V-- THE LINK THAT WAS ROUTED TO THE HOMEPAGE
                http://localhost:3000/animals

            By adding this route, "/animals/:animalId(\d+)" you are setting up your application to view a single animal at a time, 
            and you determine which animal is to be viewed by looking in the URL. The animal's primary key will be the last part of the URL path.

            *--The (\d+) is looking for numbers ONLY
        */ 
            
            
//                 if(this.isAuthenticated()){
//                     return (
//                 <React.Fragment>
//                     <Route exact path="/" render={(props) => {
//                         return <LocationList {...props} locations={this.state.locations}
//                                                     employees={this.state.employees} />
//                     }} />
//                     <Route exact path="/animals" render={props => {
//                         return <AnimalList {...props} deleteAnimal={this.deleteAnimal}
//                                                       animals={this.state.animals} />
     
//                     }} />
//                     <Route exact path="/animals/:animalId(\d+)" render={(props) => {
//                         return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} 
//                                                     animals={this.state.animals} />
//                     }} />
//                     <Route path="/animals/new" render={(props) => {
//                         return <AnimalForm {...props} saveAnimal={this.saveAnimal}
//                                                   employees={this.state.employees}
//                                                   owners={this.state.owners} />
//                     }} />
//                     <Route exact path="/animals/edit/:animalId(\d+)" render={(props) => {
//                         return <EditAnimal {...props} editAnimal={this.editAnimal} 
//                                                   animals={this.state.animals} 
//                                                   employees={this.state.employees} />
//                     }} />
//                     <Route exact path="/employees" render={props => {
//                         return <EmployeeList {...props} deleteEmployee={this.deleteEmployee}
//                                                         animals={this.state.animals}
//                                                         employees={this.state.employees}
//                                                         locations={this.state.locations} />
//                     }} />
//                     <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
//                         return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} 
//                                                       employees={this.state.employees} />
//                     }} />
//                     <Route path="/employees/new" render={(props) => {
//                         return <EmployeeForm {...props} saveEmployee={this.saveEmployee} 
//                                                     employees={this.state.employees}
//                                                     locations={this.state.locations}/>
//                     }} />
//                     <Route exact path="/owners" render={props => {
//                         return <OwnerList {...props} deleteOwner={this.deleteOwner}
//                                                      owners={this.state.owners} />
//                     }} />
//                     <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
//                         return <OwnerDetail {...props} deleteOwner={this.deleteOwner}
//                                                    owners={this.state.owners}
//                                                    animals={this.state.animals} />
//                     }} />
//                     <Route path="/owners/new" render={(props) => {
//                         return <OwnerForm {...props} saveOwner={this.saveOwner} 
//                                                  owners={this.state.owners} />
//                     }} />
//                 </React.Fragment>
//                     )
//             }
//             if(!this.isAuthenticated()){
//                 return <React.Fragment><Route exact path="/login" component={Login}/>
//                 </React.Fragment>
//             }
//             return (<React.Fragment>
//                     <div id="need-to-login-container">
//                         <div>
//                             <h3>You need to sign in to access this information.</h3>
//                             <button><a className="nav-link" to="/login">Sign In</a></button>
//                         </div>
//                     </div>
//                     </React.Fragment>
//             )
    
//     }
// }








return (
    <React.Fragment>
        <Route path="/login" component={Login}/>
        <Route exact path="/" render={(props) => {
            return <LocationList {...props} locations={this.state.locations}
                                            employees={this.state.employees} />
        }} />
        <Route exact path="/animals" render={props => {
            if (this.isAuthenticated()) {
                return <AnimalList {...props} deleteAnimal={this.deleteAnimal}
                                              animals={this.state.animals} />
            } else {
                return <Redirect to="/login" />
            }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
            return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} 
                                            animals={this.state.animals} />
        }} />
        <Route path="/animals/new" render={(props) => {
            return <AnimalForm {...props} saveAnimal={this.saveAnimal}
                                          employees={this.state.employees}
                                          owners={this.state.owners} />
        }} />
        <Route exact path="/animals/edit/:animalId(\d+)" render={(props) => {
            return <EditAnimal {...props} editAnimal={this.editAnimal} 
                                          animals={this.state.animals} 
                                          employees={this.state.employees} />
        }} />
        <Route exact path="/employees" render={props => {
            if (this.isAuthenticated()) {
                return <EmployeeList {...props} deleteEmployee={this.deleteEmployee}
                                                animals={this.state.animals}
                                                employees={this.state.employees}
                                                locations={this.state.locations} />
            } else {
                return <Redirect to="/login" />
            }
        }} />
        <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
            return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} 
                                              employees={this.state.employees} />
        }} />
        <Route path="/employees/new" render={(props) => {
            return <EmployeeForm {...props} saveEmployee={this.saveEmployee} 
                                            employees={this.state.employees}
                                            locations={this.state.locations}/>
        }} />
        <Route exact path="/owners" render={props => {
            if (this.isAuthenticated()) {
                return <OwnerList {...props} deleteOwner={this.deleteOwner}
                                             owners={this.state.owners} />
            } else {
                return <Redirect to="/login" />
            }
        }} />
        <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
            return <OwnerDetail {...props} deleteOwner={this.deleteOwner}
                                           owners={this.state.owners}
                                           animals={this.state.animals} />
        }} />
        <Route path="/owners/new" render={(props) => {
            return <OwnerForm {...props} saveOwner={this.saveOwner} 
                                         owners={this.state.owners} />
        }} />
       
    </React.Fragment>
)
}
}
