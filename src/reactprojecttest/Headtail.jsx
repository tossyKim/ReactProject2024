import React from 'react';

function Headtail(props) {
    return (
        <div className={props.className}>
            <p>{props.sentence}</p>
        </div>
    );
}

export default Headtail;
