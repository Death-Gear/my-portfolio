import React from 'react';
import './navbar.css';
import $ from "jquery";

class NavBar extends React.Component {
    componentDidMount() {
        const navBar = $('#navBar');
        const navBarBrand = $('.navbar-brand');
        $(window).scroll(() => {
            if ($(window).scrollTop() > 50) {
                navBar.addClass('bg-primary shadow');
            } else {
                navBar.removeClass('bg-primary shadow');
            }
        })
    }

    render() {
        return (
            <div id="navBarWrapper">
                <nav className="navbar fixed-top navbar-expand-md navbar-dark" id="navBar">
                    <a className="navbar-brand text-white" href="#">PORTFOLIO LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-uppercase" href="#">Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase" href="#">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;