import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div>
                <h1 className='text-[#ffe400] text-[25px]'>Movie Freak</h1>
            </div>

            <div>
                <button 
                    className="sm:hidden text-white text-xl" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
                <div className={`navbar_links ${isMenuOpen ? 'block' : 'hidden'} sm:flex`}>
                    <Link to="/"><img src={Fire} alt="Fire Emoji" className="navbar_emoji" />Popular</Link>
                    <Link to="/top-rated"><img src={Star} alt='Star Emoji' className='navbar_emoji' />Top Rated</Link>
                    <Link to="/upcoming"><img src={Party} alt='Party Emoji' className='navbar_emoji' />Upcoming</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;