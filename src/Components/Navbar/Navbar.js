import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'




const Navbar = () => {
    return (


        <div className="">
            <nav className="navbar  navbar-light bg-light">
                <a href="/"className="navbar-brand"><img src="../../logo2.png" alt="" width="100px"/></a>
                <div className="" id="navbarNavAltMarkup">
                    <div className="">
                        <FontAwesomeIcon className="ml-2" icon={faCartPlus} size ="2x"  />
                        <button className="btn btn-dark ml-2">Log In</button>
                        <button className="ml-2 btn btn-danger">Sign Up</button>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;