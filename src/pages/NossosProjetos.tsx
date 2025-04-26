import CardGrid2 from "../components/CardGridService"
import Footer from "../components/Footer"
import Header from "../components/Header"
import '../components/styles/Pages.css'

const NossosProjetos = () =>{
  return(
    <div>
      <Header/>
      <div className="Content">
      <h1>Nossos Projetos</h1>
      <CardGrid2/>
      </div>
      <Footer/>
    </div>
  )
}

export default NossosProjetos