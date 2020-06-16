import React from 'react';

class Navbar_Custom extends React.Component {
    render () {
        return(
            <>
            <nav id="navbar" class="navbar navbar-expand-lg fixed-top p-0 text-white">
                <div class="d-lg-flex w-100 align-items-start">
                    <a class="navbar-brand text-primary" href="#">
                        <img class="d-none d-lg-block navbar-brand__img" src="img/logo.png" alt="logo"/>
                        <img class="d-lg-none navbar-brand__img" src="img/logo-small.png" alt="logo"/>
                    </a>
                    <button type="button" class="d-lg-none navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active page-scroll" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#aboutus">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#collection">Collection</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#contactus">Contact Us</a>
                        </li>
                        <li class="nav-item ml-lg-4 d-lg-none">
                            <span class="nav-link">&copy; Théophane et Lara.</span>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
        );
    }
}

export default Navbar_Custom;
