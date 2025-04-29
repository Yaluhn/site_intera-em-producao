import CardTriple from "../components/CardTriple"
import Footer from "../components/Footer"
import Header from "../components/Header"
import '../components/styles/Pages.css'
import '../components/styles/Servicos.css'

const servicos = () =>{
  return(
    <div>
      <Header/>
      <div className="Content service">
        <h1 className="page-title-service">Serviços</h1>
        <CardTriple/>
      </div>
      <Footer/>
    </div>
  )
}

export default servicos