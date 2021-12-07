import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import {Homepage} from "./websitepages/Homepage";
import {PlayerDetails} from "./websitepages/PlayerDetails";
import {TeamDetails} from "./websitepages/TeamDetails";
import { AddPlayers } from './websitepages/AddPlayers';
import { AddTeams } from './websitepages/AddTeams';
import {Header} from './Header';

function App() {
  return (
    <div className="App ">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="/TeamDetails" element={<TeamDetails/>} />
          <Route path="/PlayerDetails" element={<PlayerDetails/>} /> 
          <Route path="/AddTeams" element={<AddTeams/>} />
          <Route path="/AddPlayers" element={<AddPlayers/>} />
        </Routes>
      </div>
  );
}

export default App;
