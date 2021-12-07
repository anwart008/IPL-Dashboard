import { useState, useEffect } from "react";
import React from 'react';

export const AddPlayers = () => {

    const [full_Name, setFull_Name] = useState("");
    const [team, setTeam] = useState("");
    const [price, setPrice] = useState("");
    const [playing_Status, setPlaying_Status] = useState("");
    const [role, setRole] = useState("");

    const [playerdetails, setPlayerdetails] = useState([]);

    const onSubmit=()=>{

        setPlayerdetails(...playerdetails,{
            "Full_Name": full_Name ,
            "Photo":"defaultPhoto",
            "Team": team ,
            "Price":price ,
            "Playing_Status":playing_Status ,
            "Role":role
            }
            
       )

       setFull_Name("");
       setTeam("");
       setPrice("");
       setPlaying_Status("");
       setRole("");
       
    };
    
    useEffect(() => {
        localStorage.setItem("playerdetails",JSON.stringify(playerdetails));
    }, [playerdetails]);

    return (
        <div>
            <h3 className="detailsEntry">Add Players</h3>
            <div className="teampage">
            <div className="detailscontainer rounded">
                <div className="detailsEntry">
                    <label className="label">Full Name:</label>
                    <input className="detailsInput" value={full_Name} onChange={(e) => setFull_Name(e.target.value)} type="text" placeholder="Full Name" aria-label="Search" />
                </div>
                {/* <div className="detailsEntry">
                    <label className="label">Photo:</label>
                    <input className="detailsInput" type="text" placeholder="Photo" aria-label="Search" />
                </div> */}
                <div className="detailsEntry">
                    <label className="label">Team:</label>
                    <input className="detailsInput" value={team} onChange={(e) => setTeam(e.target.value)} type="text" placeholder="Team" aria-label="Search" />
                </div>
                <div className="detailsEntry">
                    <label className="label">Price:</label>
                    <input className="detailsInput" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" aria-label="Search" />
                </div>
                <div className="detailsEntry">
                    <label className="label">Playing Status:</label>
                    <input className="detailsInput" value={playing_Status} onChange={(e) => setPlaying_Status(e.target.value)} type="text" placeholder="Playing Status" aria-label="Search" />
                </div>
                <div className="detailsEntry">
                    <label className="label">Role:</label>
                    <input className="detailsInput" value={role} onChange={(e) => setRole(e.target.value)} type="text" placeholder="Role" aria-label="Search" />
                </div>
                <div className="detailsEntry">
                    <button type="submit" className="btn btn-success" onClick={()=>onSubmit()}>Submit</button>
                </div>
            </div>
            </div>
        </div>
    )
}

//format
// Full_Name: "Harbhajan Singh",
// Photo: <MdSpaceDashboard/>,
// Team: "RCB" ,
// Price: "20000000" ,
// Playing_Status: "On bench",
// Role: "Batsman"