import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  /* Gets called after the component gets rendered */
  componentDidMount() {
    console.log(this.imageRef);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

/* 
React Refs

React refs are a system to give you direct access to a single dom element that is rendered by a component. 
We do this in place of using code like document.querySelector('element') in order to create a ref.

We're going to define our constructor function. We're going to call a function inside the constructor to 
create a reference and assign it as a instance variable on our class.

We can in theory assigned references to the state of our component but it's really not required to do so 
because these refs are not going to change over time and we're never going to call set state withthe ref.

So no need to link it up to states in general. We only put data in states if we expect it to change over time.

Once we assign that ref as a instance variable on our class we're then going to go down to our rendermethod 
and pass that ref into some particular JSX element as a prop.
*/
