import React from 'react';


const Garage = (props) => {
    console.log(props);
    const size = props.size;
    return (<div>Who lives in my {size} Garage?</div>)
};

export default Garage