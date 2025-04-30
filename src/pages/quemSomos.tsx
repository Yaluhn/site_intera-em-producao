import Footer from "../components/Footer";
import '../components/styles/Pages.css'
import '../components/styles/QuemSomos.css'
import Slideshow from "../components/SlideShow";
import HeaderInternal from "../components/HeaderInternal";

const QuemSomos = () => {
  return(
    <div>
      <HeaderInternal/>
        <div className="Content-quemsomos">
        <h1 className="page-title">Quem Somos</h1>
        <Slideshow/>
        </div>
      <Footer/>
    </div>
  )
};
export default QuemSomos;