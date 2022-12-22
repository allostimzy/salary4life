import profilepic from "../../assests/profilepic.png";
import settings from "../../assests/settings.svg";
import hidden from "../../assests/hidden.svg";
import arrowTo from "../../assests/arrowTo.svg";
import { Link } from "react-router-dom";


const Links = ({link , details}) => {
    return(
        <Link to={link} className="flex bg-[#EEEEEE] justify-between p-4 rounded-xl my-3">
            <p>{details}</p>
            <img src={arrowTo} alt="" />
        </Link>
    )
}


const Profile = () => {
    return ( 
        <div className="p-5">
            <h1 className="text-[#28743A] text-[1.5rem] font-medium">My Account</h1>
            <div className="">
                <div className="mt-4 flex justify-between items-center">
                    <div className="flex gap-2 align-center justify-between items-center">
                        <img src={profilepic} alt="" />
                        <span>08012345678</span>
                    </div>
                    <Link>
                    <img src={settings} alt="" />
                    </Link>
                </div>
                <div className="bg-[#28743A] my-6 rounded p-5 text-white">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <img src={hidden} alt="" />
                            Total Balance
                        </div>
                        <p className="text-[.8rem]">₦<span> 2,730.00</span></p>
                    </div>
                    <div className="mt-7 flex justify-between">
                        <Link className="w-[48%]" to="/deposit"><button className="bg-lemon p-2 text-[.8rem] w-[100%] px-12 text-[#28743A] rounded-full">Deposit</button></Link>
                        <Link className="w-[48%]" to="/withdraw"><button className="p-2 text-[.8rem] w-[100%] px-12 rounded-full border">Withdraw</button></Link>
                    </div>
                </div>

                <div>
                    <Links link="/history" details="Gaming History"/>
                    <Links link="" details="My Account Info"/>
                    <Links link="" details="Transaction History"/>
                    <Links link="/ChangePassword" details="Reset Password"/>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;