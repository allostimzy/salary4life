import heroImage from "../assests/heroImage.svg";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return ( 
        <div className="bg-[#FFFFFF] py-4 px-5 ">
            <Link to="/GamesPages" className="">
                <img src={heroImage} alt="" className=""/>
            </Link>
        </div>
     );
}
 
export default HeroSection;