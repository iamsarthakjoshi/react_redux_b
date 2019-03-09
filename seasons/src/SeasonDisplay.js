import './SeasonDisplay.css'
import React from 'react';

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {iconName, text} = seasonConfig[season];
    // const text = season === 'winter' ? 'Burr, it is chilly!' : 'Lets hit the beach!';
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    console.log(season); 

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}; 

const seasonConfig = {
    summer: {
        iconName: 'sun',
        text: 'Let\'s hit the beach!'
    },
    winter: {
        iconName: 'snowflake',
        text: 'Burr, it is cold!'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'; // northen hemisphere
    } else {
        return lat > 0 ? 'winter' : 'summer'; // southern hemisphere 
    }
};

export default SeasonDisplay;