import lightning from "../assests/lightning.svg"
import daily from "../assests/daily.svg"
import weekly from "../assests/weekly.svg"
import { Link } from "react-router-dom"

const GameType = ({image , type}) => {
    return(
        <div className="bg-[#F2F2F2] p-3 flex justify-center">
                <div className="flex gap-1 align-center">
                    <img src={image} alt="" />
                    <h1>{type}</h1>
                </div>
        </div>
    )
}

const Game = ({amount , type}) => {
    return(
        <div className=" w-[32%]">
            <div className="flex flex-col">
                <p className="text-[.7rem] m-auto">Game ends in</p>
                <span className="text-[.7rem] m-auto">01 : 15 : 04</span>
            </div>
            <div className="bg-[#C7DECC] rounded-xl py-3 text-[#28743A] text-center">
                <p className="text-[.7rem]">{type}</p>
                <p className="text-[.7rem]"><span className="font-bold text-[1rem]">{amount}</span><br/> salary for 30 years </p>
                <button className="bg-[#28743A] text-[#BBFF4B] rounded-xl text-[.7rem] p-1 px-3 m-2"><Link to="./GamesPages">Play Now</Link></button>
            </div>
        </div>
    )
}

const RapidGames = () => {
    return(
        <>
            <GameType image={lightning} type={"Play Rapid Games"}/>
            <div className="py-5 p-2 flex justify-between">
                <Game amount={"NGN20,000"} type={"RAPID GAMES"}/>
                <Game amount={"NGN50,000"} type={"RAPID GAMES"}/>
                <Game amount={"NGN70,000"} type={"RAPID GAMES"}/>
            </div>
        </>
    )
}

const DailyGames = () => {
    return(
        <>
            <GameType image={daily} type={"Play Daily Games"}/>
            <div className="py-5 p-2 flex justify-between">
                <Game amount={"NGN20,000"} type={"DAILY GAMES"}/>
                <Game amount={"NGN50,000"} type={"DAILY GAMES"}/>
                <Game amount={"NGN70,000"} type={"DAILY GAMES"}/>
            </div>
        </>
    )
}

const WeeklyGames = () => {
    return(
        <>
            <GameType image={weekly} type={"Play Weekly Games"}/>
            <div className="py-5 p-2 flex justify-between">
                <Game amount={"NGN20,000"} type={"WEEKLY GAMES"}/>
                <Game amount={"NGN50,000"} type={"WEEKLY GAMES"}/>
                <Game amount={"NGN70,000"} type={"WEEKLY GAMES"}/>
            </div>
        </>
    )
}

const Games = () => {
    return ( 
        <div>
            <RapidGames/>
            <DailyGames/>
            <WeeklyGames/>
        </div>
     );
}
 
export default Games;