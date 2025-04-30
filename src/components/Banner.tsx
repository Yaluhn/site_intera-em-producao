import "../components/styles/banner.css"
import card1 from "../assets/7.png";
const Banner = () =>{
  return(
    <div className="banner-container">
      <div className="banner-img">
        <img src={card1}/>
      </div>
    </div>
  )
}

export default Banner