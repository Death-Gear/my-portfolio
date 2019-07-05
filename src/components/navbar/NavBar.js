import React from 'react';
import './navbar.css';
import $ from "jquery";

class NavBar extends React.Component {
    componentDidMount() {
        $(window).scroll(() => {
            if ($(window).scrollTop() > 50) {
                $('#navbarWrapper').addClass('bg-white shadow');
            } else {
                $('#navbarWrapper').removeClass('bg-white shadow');
            }
        })
    }

    render() {
        return (
            <div className="container-fluid fixed-top pl-5 pr-5" id="navbarWrapper">
                <div className="row">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a href="#" className="navbar-brand text-primary" id="logo">
                            PORTFOLIO
                        </a>

                        <button className="navbar-toggler" type="button"
                                data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end"
                             id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-primary">Overview</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-primary">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-primary">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-primary">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-primary">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
};

export default NavBar;