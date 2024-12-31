import React from 'react';
import './Body.css';

function Body(props) {
     console.log(props)
 return (
      <div className="body">
          <p>{props.name}</p>
          <p>{props.location}</p>
      </div>
 )
}

export default Body;