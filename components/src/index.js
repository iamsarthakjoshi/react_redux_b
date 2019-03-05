// Import the React and ReactDOM Libs
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component
const App = () => {
     return ( 
        <div className="ui container comments">
            {/* Also, <CommentDetails acts as a prop/child component for <ApprovalCard>, since proving some config to approvalcard component */}
            <ApprovalCard>
                {/* Provide props from parent(<CommentDetail .. /> jsx element) to child */}
                {/* author, timeAgo is a prop here, it can be named anything meaningful, Sam is a value of the prop, key-value */}
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    comment="Nice blog post!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail 
                    author="Sarthak" 
                    timeAgo="Today at 2:55PM" 
                    comment="Nice blog post!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Joshi" 
                    timeAgo="Today at 3:40PM" 
                    comment="Nice blog post!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard> 
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
        </div>
     );
};

// Take the react component and display it on the screen 
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);