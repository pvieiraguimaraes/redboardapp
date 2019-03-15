import React from 'react';

const person = (props) => {
    return (
        <div className='RedBack'>
            <p>Seven Dead Signs</p>

            <h4>{props.name} have {props.power} of power</h4>

            <p>Secret weapon: {props.children}</p>
        </div>
    );

};

export default person;