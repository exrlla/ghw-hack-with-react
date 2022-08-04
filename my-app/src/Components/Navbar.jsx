import React, {useState} from 'react'; 
import '../stylesheets/App.css';
import GHWinitGirl from '../assets/cutemlhgirl.png'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <nav className="navbar">
            <div className='leftSide'>
                <div className='links' id={showLinks ? "hidden" : ""}>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                    <img className="mlh-icon" src={GHWinitGirl} alt='GHWinitGirl'></img>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>Open </button>
            </div>
           
            <div className='rightSide'>
                <input type="text" placeholder='hey hackers!'></input>
                <button className='search-button'>Search</button>
            </div>
           </nav>
    );
}

export default Navbar;