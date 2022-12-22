import Footer from "../Footer";
import Testimonials from "../Testimonials";

const GamesPages = () => {
    return ( 
        <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray- p-6 px-2'>
            <h2 className='text-[#28743A] text-[1.6713rem] m-4 font-medium'>Play Games</h2>
            <p className="px-4 text-[1.3rem]">Win 25,000 Salary for 12 Months</p>
            
            <div>
                <p className=" mx-4 my-4">Play multiple draws to stand higher chances of winning</p>
                <div className="grid grid-cols-5 gap-4 ml-4 mr-4">
                    <input className='w-[3.75rem] h-[3.75rem] rounded-full p-2 border-2 text-center text-[1rem] font-bold' type="text" readOnly/>
                    <input className='w-[3.75rem] h-[3.75rem] rounded-full p-2 border-2 text-center text-[1rem] font-bold' type="text" readOnly/>
                    <input className='w-[3.75rem] h-[3.75rem] rounded-full p-2 border-2 text-center text-[1rem] font-bold' type="text" readOnly/>
                    <input className='w-[3.75rem] h-[3.75rem] rounded-full p-2 border-2 text-center text-[1rem] font-bold' type="text" readOnly/>
                    <input className='w-[3.75rem] h-[3.75rem] rounded-full p-2 border-2 text-center text-[1rem] font-bold' type="text" readOnly/>
                </div>
            </div>
            <div className='flex space-x-4 flex-row my-4 mx-2'>
                <button className='w-full py-2 bg-[#BBFF4B]  text-[#28743A] font-normal rounded-full'>Generate Lucky Numbers</button> 
                <button className='w-[6.5rem] text-[#28743A] font-normal rounded-full border-2'>Clear</button>
            </div> 
        </form>
        <div>
            <p className='flex text-black-400 mx-6 my-4'>Select Up to 5 numbers to play</p>
            <div className="grid grid-cols-5 gap-4 mx-6 bg-[#28743A] p-5 rounded-2xl">
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">1</button>
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">2</button>
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">3</button>
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">4</button>
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">5</button>
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">6</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">7</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">8</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">9</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">10</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">11</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">12</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">13</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">14</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">15</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">16</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">17</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">18</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">19</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">20</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">21</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">22</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">23</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">24</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">25</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">26</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">27</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">28</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">29</button>   
                <button className="w-11 h-11 rounded-full text-[#28743A] bg-white text-[1rem]">30</button>  
            </div>
            <div className="flex mx-6 my-4"><button className='w-full py-2 border-2 text-[#28743A] font-normal rounded-full'>Play</button> </div>
        </div>
        <Testimonials/>
        <Footer/>
    </div>
     );
};
 
export default GamesPages;