import { Link } from "react-router-dom";
import "./Header.css";





const Header=()=>{
    return(
        <>
          <ul className="header-1">
            <l1>
                <Link to="/">Home</Link>
            </l1>
            <l1>
                <Link to="/about">About</Link>
            </l1>
            <l1>
                <Link to="/contect">Contect</Link>
            </l1>
            <l1>
                <Link to="/friend">Friend</Link>
            </l1>
            <l1>
                <Link to="/Information">Information</Link>
            </l1>
          </ul>
        </>
    )
}
export default Header;