import React from 'react'
import { useState, useEffect } from 'react'

export const AddTeams = () => {

    const [team_Name, setTeam_Name] = useState("");
    const [player_Count, setPlayer_Count] = useState("");
    const [top_Batsman, setTop_Batsman] = useState("");
    const [top_Bowler, setTop_Bowler] = useState("");
    const [championship_Won, setChampionship_Won] = useState("");

    const [teamdetails, setTeamdetails] = useState([]);

    const onSubmit=()=>{

        setTeamdetails(...teamdetails,{
            "Team_Name": team_Name ,
            "Team_Icon":"defaultIcon",
            "Player_Count": player_Count ,
            "Top_Batsman":top_Batsman ,
            "Top_Bowler":top_Bowler ,
            "Championship_Won":championship_Won
            }
        
       )

       setTeam_Name("");
       setPlayer_Count("");
       setTop_Batsman("");
       setTop_Bowler("");
       setChampionship_Won("");
       
    }

    useEffect(() => {
        localStorage.setItem("teamdetails",JSON.stringify(teamdetails));
    }, [teamdetails]);

    return (
        <div>
            <h3 className="detailsEntry">Add Teams</h3>
            <div className="teampage">
            <div className="detailscontainer rounded">
                <div className="detailsEntry">
                    <label className="label">Team Name:</label>
                    <input className="detailsInput" value={team_Name} onChange={(e) => setTeam_Name(e.target.value)} type="text" placeholder="Team Name" aria-label="Search" />
                </div>
                {/* <div className="detailsEntry">
                    <label className="label">Team Icon:</label>
                    <input className="detailsInput" type="text" placeholder="Input" aria-label="Search" />
                </div> */}
                <div className="detailsEntry">
                    <label className="label">Player Count:</label>
                    <input className="detailsInput" value={player_Count} onChange={(e) => setPlayer_Count(e.target.value)} type="text" placeholder="Player Count" aria-label="Search" />
                </div>
                <div className="detailsEntry">
                    <label className="label">Top Batsman:</label>
                    <input className="detailsInput" value={top_Batsman} onChange={(e) => setTop_Batsman(e.target.value)} type="text" placeholder="Top Batsman" aria-label="Search" />
                </div>
                <div className="detailsEntry">
                    <label className="label">Top Bowler:</label>
                    <input className="detailsInput" value={top_Bowler} onChange={(e) => setTop_Bowler(e.target.value)} type="text" placeholder="Top Bowler" aria-label="Search" />
                </div>
                <div className="detailsEntry">
                    <label className="label">Championships Won:</label>
                    <input className="detailsInput" value={championship_Won} onChange={(e) => setChampionship_Won(e.target.value)} type="text" placeholder="Championships Won" aria-label="Search" />
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
//Team Name
//Team Icon
//Player Count
//Top Batsman
//Top Bowler
//Championship Won Count
//Card grid with all the players. 