import piePic from "../../Assets/piePic.jpg"
import "./navbar.css";
import Logout from "./Logout/Logout";
const Navbar = (props) => {
    return (
        <div>
            <nav>
                <img src={piePic} alt="" id="piePic" />
                <Logout clearLocalStorage={props.clearLocalStorage}/>
            </nav>
        </div>
    )
}

export default Navbar;