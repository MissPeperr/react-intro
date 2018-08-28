import  React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews" // Import ApplicationViews component
/*
    Also note that you're importing a single CSS file directly into this component. 
    No need to worry about <link> tags in your HTML any more. 
    All of the styles in the imported CSS should only apply to the JSX elements you are making in this component.
*/
import "../index.css"
import "bootstrap/dist/css/bootstrap.min.css"

// You can only return one item at a time
// So we're creating a fragment to return ALL of the things inside of that fragment, to one return

class Kennel extends Component {
    state = {
        searchValue: ""
    }
    updateSearchFunction = (userSearch) => {
        this.setState({
            searchValue: userSearch
        })
    }

    render() {
        return (
            <React.Fragment>
                <NavBar updateSearchFunction={this.updateSearchFunction}/>
                <ApplicationViews searchValue={this.state.searchValue}/>
            </React.Fragment>
        )
    }
}

export default Kennel
