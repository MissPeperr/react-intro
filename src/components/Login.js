import React, { Component } from "react"


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        isChecked: false
    }

    // Update state whenever an input field is edited
    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.

            write an if/else statement that if 'isChecked' is true, put it in localStorage
            else, put it in sesssionStorage
        */
       if(this.state.isChecked === true){
           localStorage.setItem(
               "credentials",
               JSON.stringify({
                   email: this.state.email,
                   password: this.state.password
               })
           )
       } else {
        sessionStorage.setItem(
            "loserCredentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
       }
    }

    render() {
        return (
            <form onSubmit={this.handleLogin} id="login-form">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" />
                <button type="submit">
                    Sign in
                </button>
                Remember Me:
                <input onClick={ () => {this.setState({isChecked: true})}} id="isChecked" type="checkbox" name="remember"/>
            </form>
        )
    }
}