import react from "react";
import "./Navbar.css"

const Navbar = (): JSX.Element => {
    return (
        <>
            <header>
                <nav className="navigation">
                    <div className="web-navbar">
                        <a className="active" href="#home">Home</a>
                        <a href="#notices">Events</a>
                        <a href="#series">Series</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="mobile-navbar">
                        <button>
                            button
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
