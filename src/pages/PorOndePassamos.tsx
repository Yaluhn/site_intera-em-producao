import Footer from "../components/Footer"
import Header from "../components/Header"
import ImageSlider from "../components/ImageSlider"
import '../components/styles/PorOndePassamos.css'

const PorOndePassamos = () =>{
  return(
    <div>
      <Header/>
      <div className="Content-por-onde-passamos">
        <h1>Por Onde Passamos</h1>
      <ImageSlider/>
      </div>
      <Footer/>
    </div>
  )
}

export default PorOndePassamos