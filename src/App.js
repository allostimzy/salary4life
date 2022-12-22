import Home from "./components/Home";
import Login from "./components/Login";
import Join from "./components/JoinNow";
import Navbar from "./components/Navbar";
import ForgetPasswordForm from "./components/ForgetPasswordForm";
import OTPform from "./components/OTPform";
import Profile from "./components/Profile/ProfilePage";
import Deposit from "./components/Deposit/Deposit";
import Withdraw from "./components/Withdraw/Withdraw";
import AirtimeDeposit from "./components/Deposit/AirtimeDeposit";
import CardDeposit from "./components/Deposit/CardDeposit";
import USSDdeposit from "./components/Deposit/USSDdeposit";
import ChangePassword from "./components/Profile/ChangePassword";
import BankTransfer from "./components/Deposit/BankTransfer";
import TopUp from "./components/Deposit/TopUp";
import History from "./components/Gaming/History";
import GamesPages from "./components/Games/GamesPages";
import { BrowserRouter , Route , Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/join" element={<Join/>}/>
        <Route  path="/ForgetPassword" element={<ForgetPasswordForm/>}/>
        <Route  path="/OTP" element={<OTPform/>}/>
        <Route  path="/profile" element={<Profile/>}/>
        <Route  path="/deposit" element={<Deposit/>}/>
        <Route  path="/withdraw" element={<Withdraw/>}/>
        <Route  path="/airtime_deposit" element={<AirtimeDeposit/>}/>
        <Route  path="/card_deposit" element={<CardDeposit/>}/>
        <Route  path="/ussd_deposit" element={<USSDdeposit/>}/>
        <Route path="/ChangePassword" element={<ChangePassword/>}/>
        <Route  path="/bank_transfer" element={<BankTransfer/>}/>
        <Route  path="/top_up" element={<TopUp/>}/>
        <Route  path="/history" element={<History/>}/>
        <Route path="/GamesPages" element={<GamesPages/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
