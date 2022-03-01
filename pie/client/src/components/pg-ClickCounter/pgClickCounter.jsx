import React, { useState } from 'react';

const ClickCounter = (props) => {
    const [clickCount,setCLickCount ] = useState(0);

    function handleClick(){
        setCLickCount(clickCount +1);
    }
    function otherClick() {
        setCLickCount(clickCount -1)
    }
    return ( 
        <div>
            <h2>Hello from Click Counter</h2>
            <button onClick={handleClick}> Click Me</button>
            <p>The button has been clicked {clickCount} times!</p>
            <button onClick={otherClick}>dont click me</button>
        </div>
     );
}
 
export default ClickCounter;