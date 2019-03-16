import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  /* 1st way
  //Typical way to solve, 'this' scope issue is to use the constructor and bind the method
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  } 

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }
  */

  /*  
    - event object is a argument that is passed automatically when this method is called 
      through input's onChange prop, when a user types in input field.
    - target.value is a property of event object that hold the value of input's value. 
  */
  onInputChange(event) {
    console.log(event.target.value);
  }

  /* 2nd way
     Applying Arrow Function, it automatically makes sure that the value 
     of 'this' is always equal to the instance of the SeachBar  
  */
  onFormSubmit = event => {
    event.preventDefault();
    //console.log(this.state.term);
    /* 
      - In a class based component, we reference the props object with 'this', 
      unlike in fucntion based component.
      - _onSubmit function is from App Component
    */
    this.props._onSubmit(this.state.term);
  };

  /* 3rd way
    The other way to solve 'this', undefined issue is to use Arrow Function is the onSubmit prop itself, like below
    <form onSubmit={e => this.onFormSubmit(e)} className="ui form">
    Remember we have to pass the event or e object when we invoke this.onFormSubmit method. Here, 
    Arrow Function is only going to be called one time.
    
    onFormSubmit(event) {
      event.preventDefault();
      console.log(this.state.term);
    }
  */

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* Things to remember *
                - <input type="text" onChange={this.onInputChange} /> is a uncontrolled form element.
                - When using a state object and this.setState, we can controll the form element.

                - When we pass a method(onInputChange, it's also a callback function) to a prop(onChange), we dont put 
                  a set of paranthesis at the end of a method.
                - When we put paranthesis, a method is called automatically when render is invoked.
                - e => ... this method is same as calling onInputChange method but in a arrow function approach.
                - We don't have to write onInputChange once we use arrow function approach.
            */}
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
