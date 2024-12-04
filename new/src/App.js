import Home from "./Router/Home";
import About from "./Router/About";
import Navigation from "./Router/Navigation";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Records from "./Router/Records";

function App() {
  return (
    <div>
       <BrowserRouter>
       <Navigation/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/records' element={<Records/>}/>
       </Routes>
       
       </BrowserRouter>
    </div>
      );
}

export default App;








/*import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./IplDashboard/Header";
import TeamCard from "./IplDashboard/TeamCard";
import MatchSchedule from "./IplDashboard/MatchSchedule";
import PlayerStats from "./IplDashboard/PlayerStats";

function App() {
  return (
    <>
     <div>
        <Header />
        <TeamCard />
        <MatchSchedule />
        <PlayerStats />
        </div>
  
);   
        }

export default App;*/





