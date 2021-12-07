import React from 'react'
import { Link } from 'react-router-dom'
import { MdSearch } from "react-icons/md";

export const Header = () => {
    return (
        <nav className="navbar">
            <Link className="text-decoration-none text-reset " to="/"><h1 className="navbarItem" id="navLogo" >IPL Team</h1></Link>
            <Link className="text-decoration-none text-reset navbarItem" to="/AddTeams" ><button className="button1">Add Teams</button></Link>
            <Link className="text-decoration-none text-reset navbarItem" to="/AddPlayers"><button className="button1">Add Players</button></Link>
            <form className="d-flex">
                <input className="search-bar" type="text" placeholder="Search Teams" aria-label="Search" />
                <button className="round-search" type="submit"><MdSearch /></button>
            </form>
        </nav>
    )
}
