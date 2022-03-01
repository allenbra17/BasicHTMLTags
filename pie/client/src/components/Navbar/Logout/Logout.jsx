import React from "react";
import './logout.css';
import logOut from '../../../Assets/logOut.jpg';

const Logout = (props) => {
    console.log('logout component', props);
    return (
        <div>
        <img src={logOut} id='logout' className='logout' alt="power" onClick={props.clearLocalStorage} />
        </div>
    )
}

export default Logout;