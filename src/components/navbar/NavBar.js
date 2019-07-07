import React from 'react';
import './navbar.css';
import $ from "jquery";

class NavBar extends React.Component {
    componentDidMount() {
        const navBarWrapper = $('#navbarWrapper');
        $(window).scroll(() => {
            if ($(window).scrollTop() > 50) {
                navBarWrapper.addClass('bg-primary');
                navBarWrapper.css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
            } else {
                navBarWrapper.removeClass('bg-primary shadow');
                navBarWrapper.css("box-shadow", "none");
            }
        })
    }

    render() {
        return (
            <div className="container-fluid fixed-top" id="navbarWrapper">
                <div className="row">
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <a href="#" className="navbar-brand text-white" id="logo">
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
                                    <a href="#" className="nav-link text-white text-uppercase">Overview</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white text-uppercase">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white text-uppercase">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white text-uppercase">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white text-uppercase">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavBar;