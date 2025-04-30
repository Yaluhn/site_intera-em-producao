import Footer from "../components/Footer"
import HeaderInternal from "../components/HeaderInternal"
import InforCard from "../components/InforCards"
import '../components/styles/Pages.css'

const FaleComnosco = () =>{
  return(
    <div>
      <HeaderInternal/>
      <div className="Content">
        <h1>Fale Com a gente</h1>
        <InforCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default FaleComnosco