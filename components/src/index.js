// Import the React and ReactDOM Libs
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// Create a react component
const App = () => {
     return ( 
        <div className="ui container comments">
            {/* Provide props from parent(<CommentDetail .. /> jsx element) to child */}
            {/* author, timeAgo is a prop here, it can be named anything meaningful, Sam is a value of the prop, key-value */}
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                comment="Nice blog post!" 
                avatar={faker.image.avatar()} 
            />
            <CommentDetail 
                author="Sarthak" 
                timeAgo="Today at 2:55PM" 
                comment="Nice blog post!" 
                avatar={faker.image.avatar()} 
            />
            <CommentDetail 
                author="Joshi" 
                timeAgo="Today at 3:40PM" 
                comment="Nice blog post!" 
                avatar={faker.image.avatar()} 
            />
        </div>
     );
};

// Take the react component and display it on the screen 
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);