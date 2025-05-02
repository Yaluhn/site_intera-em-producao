import Footer from "../components/Footer"
import HeaderInternal from "../components/HeaderInternal"
import InforCard from "../components/InforCards"
import '../components/styles/Pages.css'
import Banner from "../components/Banner"
import ImageBanner from '../assets/5.png'

const FaleComnosco = () =>{
  return(
    <div>
      <HeaderInternal/>
      <div className="Content">
        <Banner image={ImageBanner} Frase="Fale com a gente"/>
        <InforCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default FaleComnosco