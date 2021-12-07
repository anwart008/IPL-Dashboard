import React from 'react'
import { Link } from 'react-router-dom'
import { TeamDetailStorage } from '../components/TeamDetailStorage'
import { PlayerDetailStorage } from '../components/PlayerDetailStorage'

export const TeamDetails = () => {
    
    const getLocalPass = () => {
        let localName = localStorage.getItem('pass');

        if (localName !== 0) {
            return JSON.parse(localStorage.getItem('pass'));
        } else {
            return "not getting value";
        }
    }

    const Convey = (conname) => {
        localStorage.setItem("pass2",JSON.stringify(conname));
    }


    let pass1 = getLocalPass();

    return (
        <div>
            <h3 className="m-3">Team Details</h3>
            {TeamDetailStorage.map((item, index) => {
                if (pass1 === item.Team_Name) {

                    return (
                        <div className="teampage" key={index}>
                            <div className="float-container rounded">
                                <div className="float-child pt-4">{item.Team_Icon}</div>
                                <h4 className="float-child">{item.Team_Name}<hr/></h4>
                                <div className="float-child">Player Count: {item.Player_Count}</div>
                                <div className="float-child">Top Batsman: {item.Top_Batsman}</div>
                                <div className="float-child">Top Bowler: {item.Top_Bowler}</div>
                                <div className="float-child">Championship Won: {item.Championship_Won}</div>
                            </div>
                            {PlayerDetailStorage.map((item1, index1) => {
                                if (pass1 === item1.Team) {
                                    return (
                                        <Link className="text-decoration-none text-reset" onClick={()=>Convey(item1.Full_Name)} to="/PlayerDetails" key={index1} >
                                            <div className="container-fluid col-sm column text-center p-2 rounded card" >
                                                <div className="card-img-top pt-4">{item1.Photo}</div>
                                                <div className="card-body">
                                                    <h4 className="card-title">{item1.Full_Name}</h4>
                                                    <h5 className="card-text">{item1.Team}<hr/></h5>
                                                    <div className="card-text">Price: ₹{item1.Price}</div>
                                                    <div className="card-text">Playing Status: {item1.Playing_Status}</div>
                                                    <div className="card-text">Role: {item1.Role}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )
                }
            })}
        </div>
    )
}
