import React from 'react';

class NavbarCustom extends React.Component {
    render () {
        return(
            <>
            <nav id="navbar" className="navbar navbar-expand-lg fixed-top p-0 text-white">
                <div className="d-lg-flex w-100 align-items-start">
                    <a className="navbar-brand text-primary" href="/">
                        <img className="d-none d-lg-block navbar-brand__img" src="img/logo.png" alt="logo"/>
                        <img className="d-lg-none navbar-brand__img" src="img/logo-small.png" alt="logo"/>
                    </a>
                    <button type="button" className="d-lg-none navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active page-scroll" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#aboutus">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#collection">Collection</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#contactus">Contact Us</a>
                        </li>
                        <li className="nav-item ml-lg-4 d-lg-none">
                            <span className="nav-link">&copy; Théophane et Lara.</span>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
        );
    }
}

export default NavbarCustom;
