import Footer from "../components/Footer";
import Header from "../components/Header";
import '../components/styles/Pages.css'
import '../components/styles/QuemSomos.css'
import Slideshow from "../components/SlideShow";

const QuemSomos = () => {
  return(
    <div>
      <Header/>
        <div className="Content-quemsomos">
        <h1 className="page-title">Quem Somos</h1>
        <Slideshow/>
        </div>
      <Footer/>
    </div>
  )
};
export default QuemSomos;