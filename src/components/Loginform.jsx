import { Link } from "react-router-dom";

const Loginform = () => {
    return ( 
        <div className='flex flex-col justify-center p-5'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray- pb-10  px-2'>
            <h2 className='text-[#28743A] text-[1.6713rem] my-2 text-left font-medium'>Log In</h2>
            <p className="py-2">Welcome back. Please enter your mobile number and salary4life password to login</p>
            <div className='flex flex-col py-4'>
                <label>Mobile Number</label>
                <input className='rounded-lg mt-2 p-2 border focus:border-green-500 focus:outline-none' type="text" placeholder="+234"/>
            </div>
            <div className='flex flex-col py-2'>
                <label>Password</label>
                <input className='p-2 rounded-lg border mt-2 focus:border-green-500 focus:outline-none' type="password" placeholder="Kindly enter your password" />
            </div>
            <div className='flex justify-between text-[#797979] text-[.8rem] py-2'>
                <p className='flex items-center'>*Minimum 4 Character</p>  
            </div>
            <button className='w-full my-5 py-2 bg-[#BBFF4B] shadow shadow-black-500/50 hover:shadow-teal-500/40 text-[#28743A] text-[1rem] font-normal rounded-full'>Log In</button>
            <div className="flex justify-center "><p className='text-black-400 underline underline-offset-1'><Link to="/ForgetPassword">Forgot Password</Link></p></div>
        </form>
    </div>
     );
};
 
export default Loginform;