import React from 'react';

function Functionprops(props){
    return(
        <div>
            <h3>This is a functtional component</h3>
            <h3>All {props.name}! All {props.name2}</h3>
        </div>
    )
}

export default Functionprops;