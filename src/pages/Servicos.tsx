import CardTriple from "../components/CardTriple"
import Footer from "../components/Footer"
import HeaderInternal from "../components/HeaderInternal"
import '../components/styles/Pages.css'
import '../components/styles/Servicos.css'
import Banner from "../components/Banner"
import card1 from "../assets/7.png";

const servicos = () =>{
  return(
    <div>
      <HeaderInternal/>
      <div className="Content-service">
        <Banner image={card1} Frase="Serviços"/>
        <CardTriple/>
      </div>
      <Footer/>
    </div>
  )
}

export default servicos 