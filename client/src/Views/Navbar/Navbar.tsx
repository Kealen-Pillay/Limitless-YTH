import react from "react";
import "./Navbar.css"

const Navbar = (): JSX.Element => {
    return (
        <>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#notices">Notices</a>
                </li>
                <li>
                    <a href="#series">Series</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </>
    );
};

export default Navbar;
