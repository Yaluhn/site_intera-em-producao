import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/INTERA LOGO.png';
import Instagram from '../assets/instagram-svgrepo-com.svg';
import Youtube from '../assets/youtube-svgrepo-com.svg';
import Whatsapp from '../assets/whatsapp-svgrepo-com.svg';
import MenuIcon from '../assets/menu_white_36dp.svg';
import CloseIcon from '../assets/close_white_36dp.svg';
import '../components/styles/HeaderInternal.css';

const HeaderInternal = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const text = 'APAIXONADOS PELA CRIATIVIDADE!';
    const [displayText,setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    useEffect(() =>{
      if(index < text.length){
        const timeOut = setTimeout(() =>{
          setDisplayedText(prev => prev + text[index])
          setIndex(index + 1);
        },40)
        return () => clearTimeout(timeOut)
      }
    },[index])

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header-container">
      <div className="logo-header-pages">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="slogan">
        <h1>
         {displayText}
        </h1>
        </div>
        <button className="mobile-menu-icon" onClick={toggleMenu}>
          <img
            src={menuOpen ? CloseIcon : MenuIcon}
            alt="Menu"
            className="icon"
          />
        </button>
      </div>

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}><h4>Home</h4></Link>
        <Link to="/quem-somos" onClick={toggleMenu}><h4>Quem Somos</h4></Link>
        <Link to="/servicos" onClick={toggleMenu}><h4>Serviços</h4></Link>
        <Link to="/por-onde-passamos" onClick={toggleMenu}><h4>Por Onde Passamos</h4></Link>
        <Link to="/nossos-projetos" onClick={toggleMenu}><h4>Nossos Projetos</h4></Link>
        <Link to="/oficinas-e-cursos" onClick={toggleMenu}><h4>Observatório</h4></Link>
        <Link to="/fale-conosco" onClick={toggleMenu}><h4>Fale com a gente</h4></Link>

        <div className="menu-redes-sociais-pages">
          <a href="https://www.instagram.com/interacriativa/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@interacriativa846" target="_blank" rel="noreferrer">
            <img src={Youtube} alt="Youtube" />
          </a>
          <a href="https://wa.me/5579991196055" target="_blank" rel="noreferrer">
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderInternal;
