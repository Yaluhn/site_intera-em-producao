import Logo from '../assets/INTERA LOGO.png'
import Instagram from '../assets/instagram-svgrepo-com.svg'
import Youtube from '../assets/youtube-svgrepo-com.svg'
import Whatsapp from '../assets/whatsapp-svgrepo-com.svg'
import '../components/styles/header.css'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
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


  return (
    <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="slogan">
        <h1>
         {displayText}
        </h1>
        </div>
        <nav className="menu-redes-sociais">
          <a href='https://www.instagram.com/interacriativa/' target='_blank'> 
          <img src={Instagram} alt="Instagram" />
          </a>
          
        <a href='https://www.youtube.com/@interacriativa846' target='_blank'> 
          <img src={Youtube} alt="Youtube" />
        </a>
        <a href='https://wa.me/5579991196055' target='_blank'>
          <img src={Whatsapp} alt="Whatsapp" />
        </a>
        </nav>


    </header>
  )
}

export default Header
