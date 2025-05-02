import Banner from "../components/Banner"
import Footer from "../components/Footer"
import HeaderInternal from "../components/HeaderInternal"
import '../components/styles/Pages.css'
import ImageBanner from '../assets/10.png'

const OficinaseCursos = () =>{
  return(
    <div>
      <HeaderInternal/>
      <div className="Content">
        <Banner image={ImageBanner} Frase="Observatório da Cultura"/>
        </div>
      <Footer/>
    </div>
  )
}

export default OficinaseCursos
