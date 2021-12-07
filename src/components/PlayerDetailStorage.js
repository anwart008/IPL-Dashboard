import React from 'react'
import photo from "../IPL-PNG.png"

// const getPlayerDetails =()=>{
//     let localList = localStorage.getItem('playerdetails');

//     if (localList!==[]){
//         return JSON.parse(localStorage.getItem('playerdetails'));
//     } else {
//         return PlayerDetailStorage;
//     }
// }

// console.log(getPlayerDetails());

const defaultPhoto=<img src={photo} className="imgsize" alt="unable to load photo"/>;
export const PlayerDetailStorage= [
    {
        Full_Name: "Deepak Hooda",
        Photo:defaultPhoto,
        Team: "RCB" ,
        Price:10000000 ,
        Playing_Status:"On bench",
        Role: "Batsman"
    },
    {
        Full_Name: "Harbhajan Singh",
        Photo:defaultPhoto,
        Team: "MI" ,
        Price:20000000 ,
        Playing_Status:"On bench",
        Role: "Batsman"
    },
    {
        Full_Name: "Rishabh Pant",
        Photo:defaultPhoto,
        Team: "DC" ,
        Price:60000000 ,
        Playing_Status:"Playing",
        Role: "Batsman"
    },
    {
        Full_Name: "M S Dhoni",
        Photo:defaultPhoto,
        Team: "CSK" ,
        Price:80000000 ,
        Playing_Status:"Playing",
        Role: "Batsman"
    },
    {
        Full_Name: "David Warner",
        Photo:defaultPhoto,
        Team: "SRH" ,
        Price:70000000 ,
        Playing_Status:"Playing",
        Role: "Batsman"
    },
    // getPlayerDetails()
]

//format
// Full_Name: "Harbhajan Singh",
// Photo: <MdSpaceDashboard/>,
// Team: "RCB" ,
// Price: "20000000" ,
// Playing_Status: "On bench",
// Role: "Batsman"
