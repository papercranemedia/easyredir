import React from "react";
import { NavLink } from "react-router-dom";
import heroLogo from "../images/NavBar/easyredir__logo.svg"
import mobLogo from "../images/NavBar/easyredir__logo-mobile.png"

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <div className="nav__bar">
                        <NavLink to="/" className="nav__logo-block">
                            <img src={heroLogo} height="100" alt="" class="nav__dt-logo" />
                            <img src={mobLogo} alt="" class="nav__mob-logo"/>
                        </NavLink>
                        <div className="nav__right-container">
                            <a href="https://dashboard.easyredir.com/profile/sign-in?utm_source=easyredir&utm_medium=web_www" className="button nav__sign-in">Sign In</a>
                            <a href="/enterprise" className="button --orange-button --caps">Enterprise</a>
                            <a href="/pricing" className="button nav__free-button --caps">Try For Free</a>
                            
                        </div>
                        <div className="nav__lottie-block"></div>
                    </div>
                    <div className="nav__link-container">
                        <h5>
                            Explore EasyRedir
                        </h5>
                        <div className="nav__top-links">
                            <NavLink to="/solutions">
                                Solutions
                            </NavLink>
                            <NavLink to="/features">
                                Features
                            </NavLink>
                            <NavLink to="/pricing">
                                Pricing
                            </NavLink>
                            <NavLink to="/enterprise">
                                Enterprise
                            </NavLink>
                        </div>
                        <div className="nav__mid-slider">

                        </div>
                        <div className="nav__bot-links">
                            <NavLink to="/customers">
                                Customers
                            </NavLink>
                            <NavLink to="/about-us">
                                About Us
                            </NavLink>
                            <NavLink to="/blog">
                                Blog
                            </NavLink>
                            <NavLink to="/reviews">
                                Testimonials
                            </NavLink>
                        </div>
                        <div className="nav__mob-buttons">
                            <a href="https://dashboard.easyredir.com/profile/sign-in?utm_source=easyredir&utm_medium=web_www" className="button --white-button">Sign In</a>
                            <a href="/enterprise" className="button --orange-button">For Enterprise</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
