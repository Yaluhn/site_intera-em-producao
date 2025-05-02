import CardGrid2 from "../components/CardGridService"
import Footer from "../components/Footer"
import HeaderInternal from "../components/HeaderInternal"
import '../components/styles/Pages.css'
import Banner from "../components/Banner"
import ImageBanner from '../assets/8.png'

const NossosProjetos = () =>{
  return(
    <div>
      <HeaderInternal/>
      <div className="Content">
      <Banner image={ImageBanner} Frase="Nossos Projetos"/>
      <CardGrid2/>
      </div>
      <Footer/>
    </div>
  )
}

export default NossosProjetos