import img from "./assets/kamron.jpg";
import "./styles/Header/Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header_nav">
        <div className="nav-logo">
          <img className="logo-img" src={img} alt="Kamron Fozilov. Mentor" />
          <div className="logo-links">
            <a className="link" href="https://www.instagram.com/fozilovkamron/">
              KAMRON FOZILOV
            </a>
            <p className="job">Dasturchi</p>
          </div>
        </div>
      </nav>
      <div className="header_content">
        <h4 className="content-title">Web dasturlash</h4>
        <h1 className="content-desc">
          FRONTEND BOOTCAMP - ENDI SIZ <br /> HAMMASINI BITTADA O’RGANASIZ
        </h1>
      </div>
    </header>
  );
};

export default Header;
