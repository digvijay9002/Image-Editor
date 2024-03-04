import "./Navbar.css"
import logo from "./../../assets/images/Picsller.png"
const Navbar = () => {

    return (
        <>
            <div className="navbar-main-container">
                <div className="navbar-container">
                    <div className="photoEditor-title">
                        <img src={logo} className="logo-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;