import "./index.css"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="nav-container">
                <Link to="/">
                    <img src="https://thumbs.dreamstime.com/b/doctor-appointment-icon-flat-style-vector-eps-doctor-appointment-icon-flat-style-vector-eps-154239786.jpg" alt="website-logo" className="website-logo" />
                </Link>
                
                <ul className="nav-tab">
                    <li>
                        <Link to="/" className="tab-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/doctors" className="tab-link">Doctors</Link>
                    </li>
                </ul>

                <button type="button" className="login-btn">Login</button>
            </div>
            <hr className="separator"/>
        </>
        
    )
}

export default Header