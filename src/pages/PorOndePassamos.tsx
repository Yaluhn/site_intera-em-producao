import Banner from "../components/Banner"
import Footer from "../components/Footer"
import HeaderInternal from "../components/HeaderInternal"
import ImageSlider from "../components/ImageSlider"
import '../components/styles/PorOndePassamos.css'
import imageBanner from '../assets/7.png'

const PorOndePassamos = () =>{
  return(
    <div>
      <HeaderInternal/>
      <div className="Content-por-onde-passamos">
        <Banner image={imageBanner} Frase="Por Onde Passamos"/>
      <ImageSlider/>
      </div>
      <Footer/>
    </div>
  )
}

export default PorOndePassamos