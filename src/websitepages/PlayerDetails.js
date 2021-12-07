import React from 'react'
import { PlayerDetailStorage } from '../components/PlayerDetailStorage'

export const PlayerDetails = () => {

    const getLocalPass =()=>{
        let localName = localStorage.getItem('pass2');
    
        if (localName!==0){
            return JSON.parse(localStorage.getItem('pass2'));
        } else {
            return "not getting value";
        }
    }

    let pass2= getLocalPass();

    console.log(pass2);
    return (
        <div><h3 className="m-3">Player Details</h3>
        <div className="teampage">
            {PlayerDetailStorage.map((item1, index) => {
                if(pass2===item1.Full_Name){
                    return(
                    <div className="float-container rounded" key={index} >
                        <div className="float-child pt-4">{item1.Photo}</div>
                        <h4 className="float-child">{item1.Full_Name}</h4>
                        <h5 className="float-child">{item1.Team}<hr/></h5>
                        <div className="float-child">Price: ₹{item1.Price}</div>
                        <div className="float-child">Playing Status: {item1.Playing_Status}</div>
                        <div className="float-child">Role: {item1.Role}</div>
                    </div>
                    )
                }
            })}
        </div>
        </div>
    )
}
