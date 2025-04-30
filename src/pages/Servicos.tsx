import CardTriple from "../components/CardTriple"
import Footer from "../components/Footer"
import HeaderInternal from "../components/HeaderInternal"
import '../components/styles/Pages.css'
import '../components/styles/Servicos.css'
import Banner from "../components/Banner"

const servicos = () =>{
  return(
    <div>
      <HeaderInternal/>
      <Banner/>
      <div className="Content service">
        <h1 className="page-title-service">Serviços</h1>
        <CardTriple/>
      </div>
      <Footer/>
    </div>
  )
}

export default servicos