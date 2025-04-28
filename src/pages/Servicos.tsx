import CardTriple from "../components/CardTriple"
import Footer from "../components/Footer"
import Header from "../components/Header"
import '../components/styles/Pages.css'

const servicos = () =>{
  return(
    <div>
      <Header/>
      <div className="Content">
        <h1>Serviços</h1>
        <CardTriple/>
      </div>
      <Footer/>
    </div>
  )
}

export default servicos