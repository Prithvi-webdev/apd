import logo from '../../radha-krishna-gurdeep-sharma.jpg';
import './main.css'
import Home from '../home/home';
import Intro from '../intro/intro';
import Variables from '../variables/variables';
import { Route, Routes } from 'react-router-dom';
import Expenses from '../expenses/expenses';

function Main(){
return ( <main>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/intro" element={<Intro/>}/>
            <Route path="/var" element={<Variables/>}/>
            <Route path="/expenses" element={<Expenses/>}/>
        </Routes>
    <img src={logo} alt="Logo" />
  </main>)

}
export default Main;