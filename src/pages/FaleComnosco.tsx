import Footer from "../components/Footer"
import Header from "../components/Header"
import InforCard from "../components/InforCards"
import '../components/styles/Pages.css'

const FaleComnosco = () =>{
  return(
    <div>
      <Header/>
      <div className="Content">
        <h1>Fale Com a gente</h1>
        <InforCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default FaleComnosco