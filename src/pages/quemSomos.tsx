import Footer from "../components/Footer";
import '../components/styles/Pages.css'
import '../components/styles/QuemSomos.css'
import Slideshow from "../components/SlideShow";
import HeaderInternal from "../components/HeaderInternal";
import Banner from "../components/Banner";
import ImagemBanner from '../assets/5.png'

const QuemSomos = () => {
  return(
    <div>
      <HeaderInternal/>
        <div className="Content-quemsomos">
        <Banner image={ImagemBanner} Frase="Quem Somos"/>
        <Slideshow/>
        </div>
      <Footer/>
    </div>
  )
};
export default QuemSomos;