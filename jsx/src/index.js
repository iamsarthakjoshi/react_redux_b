// Import the React and ReactDOM Libs
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const labelText = 'Enter Name:';
    const buttonText = {text: 'Click here'};
     return ( 
     <div>
         <label className="label" htmlFor="name">{labelText}</label>
         <input id="name" type="text"/>
         <button style={{ backgroundColor: 'grey', color: '#222222'}}>{buttonText}</button>
     </div>
     );
};

// Take the react component and display it on the screen 
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);