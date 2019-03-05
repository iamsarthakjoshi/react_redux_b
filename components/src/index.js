// Import the React and ReactDOM Libs
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ComponentDetail from './ComponentDetail';

// Create a react component
const App = () => {
     return ( 
        <div className="ui container comments">
            <ComponentDetail />
        </div>
     );
};

// Take the react component and display it on the screen 
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);