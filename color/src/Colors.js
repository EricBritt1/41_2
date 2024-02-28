import {React, useState, useRef} from "react";
import { Link } from "react-router-dom";


const Colors = ({ colors }) => {
 
    const [colorArray, setColorArray] = useState(colors)

    const createColorList = colorArray.map(color => {
    return (
        <li>
            <Link to={`/colors/${color}`}> {color} </Link>
        </li>
        )
    })


    return (
        <div>
            <div>
                <h1> Welcome to the color factory! </h1>
                <Link to='/colors/new'>Add a new color!</Link>
            </div>
            <div>
                <ul>
                    {createColorList}
                </ul>
            </div>
        </div>
    )
};

export default Colors;