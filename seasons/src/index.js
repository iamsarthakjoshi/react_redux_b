import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './LoaderGif';

/* const App = () => {
    window.navigator.geolocation.getCurr entPosition(
        position => console.log(position),
        err => console.log(err)
    );
    return <div>Latitude: </div>
}; */

class App extends React.Component {
    // constructor(props) { 
    //     super(props);

    //     /* initializing react's state property - 'State' is a JS object that contains data relevant to a component */
    //     this.state = { lat: null, errorMessage: '' };
    // }

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        console.log("Component was rendered to the screen");
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log("Component was just updated - it rerendered");
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Loader message="Please accept location request."/>;
    }

    /* React says we need to define render method - it is invoked almost all the times */
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector("#root")
);