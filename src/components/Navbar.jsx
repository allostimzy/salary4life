import menuIcon from "../assests/DotsThreeCircleVertical.svg";
import userIcon from "../assests/UserCircleGear.svg";
import logo from "../assests/whiteLogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Fragment } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Navbar = () => {

    return (
        <div className="sticky top-0 z-10">
            <Fragment>
            <div className="flex items-center py-3 px-5 justify-between bg-[#FFFFFF]">
                <Menu>
                    <MenuHandler>
                        <div className="flex items-center gap-1">
                            <p className="text-[#28743A]">Menu</p>
                            <img src={menuIcon} alt="Menu Icon" className="w-5"/>
                        </div>
                    </MenuHandler>

                 <MenuList className="absolute z-10 p-5 rounded bg-white text-center flex flex-col gap-5">
                    <Link to="/"><MenuItem className="p-2 px-10">Home</MenuItem></Link>
                    <Link to="/deposit"><MenuItem className="p-2 px-10">Deposit</MenuItem></Link>
                    <Link to="/history"><MenuItem className="p-2 px-10">Gaming History</MenuItem></Link>
                    <Link to=""><MenuItem className="p-2 px-10">View Winning</MenuItem></Link>
                    <Link to="/withdraw"><MenuItem className="p-2 px-10">Withdrawal</MenuItem></Link>
                    <Link to=""><MenuItem className="p-2 px-10">Settings</MenuItem></Link>
                </MenuList>
                </Menu>
                <Link to="/profile" className="flex items-center gap-1">
                    <p className="text-[#28743A]">My account</p>
                    <img src={userIcon} alt="User Icon" className="w-5"/>
                </Link>
            </div>
           
            
                
            </Fragment>

            <header className="flex p-5 bg-[#28743A] justify-between">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <div className="flex gap-2">
                    <Link to="/login" className="text-[#BBFF4B] border-2 border-lemon p-1 rounded-full px-3">Log in</Link>
                    <Link to="/join" className="bg-[#BBFF4B] text-[#28743A] p-1 rounded-full px-3">Join Now</Link>
                </div>
            </header>
        </div>
     );
}
 
export default Navbar;