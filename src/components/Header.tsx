import LOGO from "../assets/INTERA LOGO.png";
import INSTA from "../assets/instagram-svgrepo-com.svg";
import YOUTUBE from "../assets/youtube-svgrepo-com.svg";
import WHATSAPP from "../assets/whatsapp-svgrepo-com.svg";
import { P } from "./P";
import "../App.css";


const style = {
  fontSize: '16px',
  margin: '0', 
  color: '#4B2617',
  padding: '2.5vw',
  textAlign: 'center' as "center",
};

export const Header = () => {
  return (
  <header className='header'>
      <section className="logos">
        <div className='InterLogo'>
          <img src={LOGO} />
        </div>
        <div className="social">
          <img src={INSTA}/>
          <img src={YOUTUBE}/>
          <img src={WHATSAPP}/>
        </div>
      </section>
      <section className="title">
        <P style={style} p='AMAMOS CRIATIVIDADE E INOVAÇÃO, E COM ELAS ACREDITAMOS QUE UM MUNDO MELHOR É POSSÍVEL!' />  
      </section>
    </header>
  )
}