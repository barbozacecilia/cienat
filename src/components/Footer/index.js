import "./Footer.css";

const Footer = () =>{
    return <footer>
                <img src="./img/cat.png" alt="cat icon" className="cat-img" />
                <div className="social-media">
                <a href="https://www.facebook.com/profile.php?id=100064995581461&mibextid=avESrC">
                    <img src="./img/facebookicon.png" alt="facebook icon" />
                </a>
                <a href="https://www.linkedin.com/in/barbozacecilia/">
                    <img src="./img/linkedingicon.png" alt="linkedin icon" />
                </a>
                <a href="mailto:barboza.ceciliam@gmail.com">
                    <img src="./img/email-icon.png" alt="email icon" />
                </a>
         </div>
        <img src="./img/lamp.png" alt="lamp" className="lamp-img" />
        <div className="logo-footer">
            <img src="./img/footer-logo.png" alt="logo Cienat" className="logo-cienat" />
        </div>
        <div className="info-footer-container">
        <strong className="info-footer">Desarrollado por Cecilia</strong>
        <strong className="info-footer">Barboza</strong>    
        </div>

        <img src="./img/atom.png" alt="atom icon" className="atom-img"  />

    </footer>
}

export default Footer;