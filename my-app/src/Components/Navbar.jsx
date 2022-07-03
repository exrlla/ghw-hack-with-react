import React, {useState} from "react";
import '../stylesheets/App.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from "@material-ui/icons/Search";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return <nav className="Navbar"> 
    <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}> <ReorderIcon /></button>
    </div>
    <div className="rightSide">
        <input type="text" placeholder="search the site! " />
        <button className="search-button"> <SearchIcon /></button>
        </div>
    </nav>
}

export default Navbar;