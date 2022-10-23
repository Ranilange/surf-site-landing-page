import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
const Footer = () => {
    return (
        <div id="about" className="footer-container">
            <div className="section1">
                <br />
                <div className="footerlogo">
                    <img className="logo-img"
                        alt="logo"
                        src="http://localhost:3000/static/media/SurfOn-logos-removebg-preview.eefc1d479983e75bbe14.png" />
                    <span>
                        <h1 style={{ color: "white" }}>SurfOn</h1>
                    </span>
                </div>
                <h3>
                    Surfon is a pro surfing site, <br />

                </h3>
                <div className="icon-section">
                    <br></br>
                    <a href="https://www.instagram.com/">
                        <InstagramIcon style={{ color: "white" }} />

                    </a>
                    <a href="https://www.facebook.com/">
                        <FacebookIcon style={{ color: "white" }} />
                    </a>
                    <a href="https://twitter.com/?lang=en">
                        {" "}
                        <TwitterIcon style={{ color: "white" }} />
                    </a>
                    <a href="https://www.youtube.com/">
                        <YouTubeIcon style={{ color: "white" }} />
                    </a>
                </div>
            </div>

            <div className="section1">
                <br></br>
                <br></br>
                <h1 className="footer-headers">PROGRAMS</h1>
                <br></br>
                <p>Training Programs</p>
                <p>expert programs</p>
                <p>begginer programs</p>
            </div>
            <div className="section1">
                <br></br>
                <br></br>
                <h1 className="footer-headers">ABOUT</h1>
                <br></br>
                <p>About Me</p>
                <p>Blog</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
            <div className="section1">
                <br></br>
                <br></br>
                <h1 className="footer-headers">MY SPONSORS</h1>
                <br></br>
                <p>MacroFactor Surf App</p>
                <p>Mass Research Review</p>
                <p>Rise Surf Gear</p>
                <p>Neck Flex</p>
            </div>
        </div>
    );
};

export default Footer;