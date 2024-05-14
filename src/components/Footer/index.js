import "./Footer.css";
import { IoLogoFacebook,IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";



const Footer = () =>{
    return <>
        <footer>
            <div className="social-media">
                <a href="https://www.facebook.com/profile.php?id=100064995581461&mibextid=avESrC">
                    <IoLogoFacebook alt="facebook icon" className="social-media_icon"/>
                </a>
                <a href="https://www.linkedin.com/in/barbozacecilia/">
                    <IoLogoLinkedin alt="linkedin icon" className="social-media_icon"/>
                </a>
                <a href="mailto:barboza.ceciliam@gmail.com">
                    <MdOutlineEmail alt="email icon" className="social-media_icon"/>
                </a>
             </div>
            <div className="info-footer-container">
                <strong className="info-footer">Sitio desarrollado por Cecilia Barboza</strong>
            </div>
        </footer>
    </>
}

export default Footer;