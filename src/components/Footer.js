import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <header>
            <div>
                <footer>
                    <NavLink to="/">
                        Home
                    </NavLink>
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
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                </footer>
            </div>
        </header>
    )
}
