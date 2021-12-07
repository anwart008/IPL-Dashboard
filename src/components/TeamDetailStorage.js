import React from 'react'
import icon from "../IPL-PNG.png";

// const getTeamDetails =()=>{
//     let localList = localStorage.getItem('teamdetails');

//     if (localList!==[]){
//         return JSON.parse(localStorage.getItem('teamdetails'));
//     } else {
//         return TeamDetailStorage;
//     }
// }

// console.log(getTeamDetails());

const defaultIcon=<img  src={icon} className="imgsize" alt="unable to load icon"/>;
export const TeamDetailStorage= [
    {
        Team_Name:"RCB",
        Team_Icon:defaultIcon,
        Player_Count:15,
        Top_Batsman:"xyz",
        Top_Bowler:"abc",
        Championship_Won:1
    },
    {
        Team_Name:"MI",
        Team_Icon:defaultIcon,
        Player_Count:17,
        Top_Batsman:"xyz",
        Top_Bowler:"abc",
        Championship_Won:4
    },
    {
        Team_Name:"DC",
        Team_Icon:defaultIcon,
        Player_Count:14,
        Top_Batsman:"xyz",
        Top_Bowler:"abc",
        Championship_Won:2
    },
    {
        Team_Name:"CSK",
        Team_Icon:defaultIcon,
        Player_Count:18,
        Top_Batsman:"xyz",
        Top_Bowler:"abc",
        Championship_Won:5
    },
    {
        Team_Name:"SRH",
        Team_Icon:defaultIcon,
        Player_Count:16,
        Top_Batsman:"xyz",
        Top_Bowler:"abc",
        Championship_Won:3
    },
    // getTeamDetails()
]

//format
//Team Name
//Team Icon
//Player Count
//Top Batsman
//Top Bowler
//Championship Won
//Card grid with all the players. 