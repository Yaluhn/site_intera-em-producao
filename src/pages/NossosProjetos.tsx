import CardGrid2 from "../components/CardGridService"
import Footer from "../components/Footer"
import HeaderInternal from "../components/HeaderInternal"
import '../components/styles/Pages.css'

const NossosProjetos = () =>{
  return(
    <div>
      <HeaderInternal/>
      <div className="Content">
      <h1>Nossos Projetos</h1>
      <CardGrid2/>
      </div>
      <Footer/>
    </div>
  )
}

export default NossosProjetos