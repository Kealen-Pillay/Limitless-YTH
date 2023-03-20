import "../Footer/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = (): JSX.Element => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div>
                        <a href="https://www.facebook.com/limitlessyouthnz/" target="_blank"  rel="noreferrer">
                            <FacebookIcon className="icon"/>
                        </a>
                        <a href="https://www.instagram.com/limitlessyouth/?hl=en" target="_blank"  rel="noreferrer">
                            <InstagramIcon className="icon"/>
                        </a>
                        <a href="https://www.youtube.com/@limitlessythnz6636" target="_blank"  rel="noreferrer">
                            <YouTubeIcon className="icon"/>
                        </a>
                    </div>
                    <div>
                        <p className="footer-text">© 2023. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
