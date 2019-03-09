import React from 'react';

const LoaderGif = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
}

// If message prop is empty of missing, it sets the default value, it also can be achieved as {props.message || 'Loading...'} instead of writing below code.
LoaderGif.defaultProps = {
    message: 'Loading...'
}

export default LoaderGif;