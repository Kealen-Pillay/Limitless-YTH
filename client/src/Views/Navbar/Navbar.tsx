import "./Navbar.css"

const Navbar = (): JSX.Element => {

    window.addEventListener("click", function () {
        const hamburgerMenu: any = document.querySelector(".mobile-navbar");
        hamburgerMenu.onclick = function () {
            const webNavigationBar: any = document.querySelector(".web-navbar");
            webNavigationBar.classList.toggle("active");
        }
    });

    return (
        <>
            <header>
                <nav className="web-navbar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#events">Events</a>
                    <a href="#gallery">Gallery</a>
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
