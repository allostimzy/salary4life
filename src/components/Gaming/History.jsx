import rightArrow from "../../assests/rightArrow.svg"
import { Link } from "react-router-dom"

const Ongoing = () => {
    return(
        // <Link className="blue">
            <li className="rounded-[10px] bg-[#EEEEEE] mb-4 pb-1">
                <div className="px-4 py-2 text-[.8rem] flex flex-col">
                    <span className="font-semibold">14</span>
                    <span>Aug</span>
                </div>
                <div className="px-4 flex justify-between text-[.8rem] bg-white">
                    <p className="text-[#606060]">Rapid Games</p>
                    <div className="flex gap-2 font-semibold">
                        <span>ONGOING</span>
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
                <div className="px-4 flex justify-between mt-3">
                    <div>
                        <p className="text-[#28743A] text-[.8rem]">Total Stake (₦)</p>
                        <span>₦200.00</span>
                    </div>
                    <div className="text-right">
                        <p className="text-[.8rem] text-[#606060]">Total Return</p>
                        <span>₦0.00</span>
                    </div>
                </div>
                <div className="px-4 mt-4">
                    <p className="text-[#606060] text-[.8rem]">Draw Numbers</p>
                    <div className="flex items-center gap-5 mt-2 mb-5 text-[.9rem] text-black">
                        <span className="p-3 leading-none rounded-[50%] bg-white">32</span>
                        <span className="p-3 leading-none rounded-[50%] bg-white">14</span>
                        <span className="p-3 leading-none rounded-[50%] bg-white">13</span>
                        <span className="p-3 leading-none rounded-[50%] bg-white">04</span>
                    </div>
                </div>
            </li>
        // </Link>
    )
}

const Won = () => {
    return(
        // <Link className="blue">
            <li className="rounded-[10px] bg-[#28743A] mb-4 pb-1 text-white">
                <div className="px-4 py-2 text-[.8rem] flex flex-col">
                    <span className="font-semibold">14</span>
                    <span>Aug</span>
                </div>
                <div className="px-4 flex justify-between text-[.8rem] bg-lemon">
                    <p className="text-[#606060]">Rapid Games</p>
                    <div className="flex gap-2 font-semibold">
                        <span className="text-black">WON</span>
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
                <div className="px-4 flex justify-between mt-3">
                    <div>
                        <p className="text-lemon text-[.8rem]">Total Stake (₦)</p>
                        <span>₦200.00</span>
                    </div>
                    <div className="text-right">
                        <p className="text-[.8rem] text-white">Total Return</p>
                        <span>₦0.00</span>
                    </div>
                </div>
                <div className="px-4 mt-4">
                    <p className="text-white text-[.8rem]">Draw Numbers</p>
                    <div className="flex items-center gap-5 mt-2 mb-5 text-[.9rem] text-black">
                        <span className="p-3 leading-none rounded-[50%] bg-white">32</span>
                        <span className="p-3 leading-none rounded-[50%] bg-white">14</span>
                        <span className="p-3 leading-none rounded-[50%] bg-white">13</span>
                        <span className="p-3 leading-none rounded-[50%] bg-white">04</span>
                    </div>
                </div>
            </li>
        // </Link>
    )
}

const Lost = () => {
    return(
        // <Link className="blue">
            <li className="rounded-[10px] bg-[#940006] text-white mb-4 pb-3">
                <div className="px-4 py-2 text-[.8rem] flex flex-col">
                    <span className="font-semibold">14</span>
                    <span>Aug</span>
                </div>
                <div className="px-4 flex justify-between text-[.8rem] bg-white">
                    <p className="text-[#606060]">Rapid Games</p>
                    <div className="flex gap-2 font-semibold">
                        <span className="text-black">LOST</span>
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
                <div className="px-4 flex justify-between mt-3">
                    <div>
                        <p className="text-white text-[.8rem]">Total Stake (₦)</p>
                        <span>₦200.00</span>
                    </div>
                    <div className="text-right">
                        <p className="text-[.8rem] text-white">Total Return</p>
                        <span>₦0.00</span>
                    </div>
                </div>
                <div className="px-4 mt-4">
                    <p className="text-white text-[.8rem]">Draw Numbers</p>
                    <div className="flex items-center gap-5 mt-2 mb-5 text-[.9rem] text-black">
                        <span className="p-3 leading-none rounded-[50%] bg-white">32</span>
                        <span className="p-3 leading-none rounded-[50%] bg-white">14</span>
                        <span className="p-3 leading-none rounded-[50%] bg-white">13</span>
                        <span className="p-3 leading-none rounded-[50%] bg-white">04</span>
                    </div>
                </div>
            </li>
        // </Link>
    )
}


const History = () => {
    return ( 
        <div className="p-5">
                <h1 className="text-[#28743A] text-[1.5rem] font-medium">Gaming History</h1>
                <p className="text-[.8rem]">Here is the history of games you’ve played</p>

            <ul className="mt-10">
                <Ongoing/>
                <Won/>
                <Lost/>
            </ul>
        </div>
     );
}
 
export default History;