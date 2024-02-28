import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar(props) {
    const {dogs} = props;

    const dogLink =  dogs.map(dog => {
    return (
        <Link to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
        </Link>  
     )    
    })

    return (
    <div>
        <nav className="NavBar">
        <Link to='/dogs'>Home</Link>
            {dogLink}
        </nav>
    </div>
    )
}

export default NavBar;