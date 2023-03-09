import react from "react";
import "./Navbar.css"

const Navbar = (): JSX.Element => {
    return (
        <>
            <header>
                <nav className="navigation">
                    <a className="active" href="#home">Home</a>
                    <a href="#notices">Notices</a>
                    <a href="#series">Series</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
