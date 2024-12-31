import React, { useState } from 'react';
import './Body.css';

function Body() {
     const [text, setText] = useState("");
     function handleOnChange(e) {
          setText(e.target.value);
     }
 return (
      <div>
          <input value={text} onChange={handleOnChange} />
          <div>{text}</div>
      </div>
 )
}
Body.defaultProps = {
     favorList: [],
};

export default Body;