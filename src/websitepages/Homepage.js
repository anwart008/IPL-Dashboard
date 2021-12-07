import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { TeamDetailStorage } from '../components/TeamDetailStorage'

const getTeamDetails =()=>{
    let localList = localStorage.getItem('teamdetails');

    if (localList!==[] || getTeamDetails()!=={} || getTeamDetails()!==null){
        return JSON.parse(localStorage.getItem('teamdetails'));
    } else {
        return TeamDetailStorage;
    }
}

console.log(getTeamDetails());

export const Homepage = () => {

    const [state, setState] = useState(TeamDetailStorage);

    const Convey = (conname) => {
        localStorage.setItem("pass",JSON.stringify(conname));
    }

    useEffect(() => {
            if(getTeamDetails()!==[] || getTeamDetails()!=={} || getTeamDetails()!==null ){
            setState([...state,getTeamDetails()]);
        }else{
            // setstate(TeamDetailStorage);
        }

    }, [])

    // const getTeamDetails =()=>{
    //         let localList = localStorage.getItem('teamdetails');
        
    //         if (localList!==[] || getTeamDetails()!=={} || getTeamDetails()!==null){
    //             setState([...state,JSON.parse(localStorage.getItem('teamdetails'))]);
    //             console.log([...state,JSON.parse(localStorage.getItem('teamdetails'))]);
    //         } else {
    //             // setState(TeamDetailStorage);
    //         }
    //     }
    
    console.log(state);

    return (
        <>
        <h3 className="m-3" onClick={()=>{getTeamDetails()}}> Homepage </h3>
        <div className="container-fluid row ">
            {state.map((item, index) => {
                return (
                    <Link className="text-decoration-none text-reset" to="/TeamDetails" onClick={()=>Convey(item.Team_Name)} key={index}>
                    <div className="container-fluid col-sm column text-center p-2 rounded card" >
                        <div className="card-img-top pt-4">{item.Team_Icon}</div>
                        <div className="card-body" ><h4 className="card-title">{item.Team_Name}</h4></div>
                    </div>
                    </Link>
                )
            })}
        </div>
        </>
    )
}

