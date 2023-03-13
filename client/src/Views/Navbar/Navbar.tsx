import react from "react";
import "./Navbar.css"

const Navbar = (): JSX.Element => {

    window.addEventListener("click",function () {
        let hamburgerMenu:any = document.querySelector(".mobile-navbar");
        hamburgerMenu.onclick = function() {
            let webNavigationBar: any = document.querySelector(".web-navbar");
            webNavigationBar.classList.toggle("active");
        }
    });

    return (
        <>
            <header>
                <nav className="web-navbar">
                    <a className="active" href="#home">Home</a>
                    <a href="#notices">Events</a>
                    <a href="#series">Series</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="mobile-navbar">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
