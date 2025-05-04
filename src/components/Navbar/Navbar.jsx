import React from 'react'
import '../Navbar/Navbar.css'
import Fire from "../../assets/fire.png"
import Star from "../../assets/glowing-star.png"
import Party from "../../assets/partying-face.png"
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <nav className='navbar'>
            <h1>Movie Freak</h1>

            <div className="navbar_links">
                <Link to="/"><img src={Fire} alt="Fire Emoji" className="navbar_emoji"/>Popular</Link>
                <Link to="/top-rated"><img src={Star} alt='Star Emoji' className='navbar_emoji'/>Top Rated</Link>
                <Link to="/upcoming"><img src={Party} alt='Party Emoji' className='navbar_emoji'/>Upcoming</Link>
            </div>
        </nav>
    )
}

export default Navbar