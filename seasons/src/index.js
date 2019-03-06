import React from 'react';
import ReactDOM from 'react-dom';

/* const App = () => {
    window.navigator.geolocation.getCurr entPosition(
        position => console.log(position),
        err => console.log(err)
    );
    return <div>Latitude: </div>
}; */

class App extends React.Component {
    constructor(props) { 
        super(props);
        /* initializing react's state property - 'State' is a JS object that contains data relevant to a component */
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                /* update this.state */
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    /* React says we need to define render method - it is invoked almost all the times */
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />, document.querySelector("#root")
);