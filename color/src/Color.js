import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Color = () => {

    const { color } = useParams();
  
    useEffect(() => {

        document.body.style.backgroundColor = color;

        return () => {
            document.body.style.backgroundColor = '';          
        };
    }, [color])

    

   return (
    <div>
        <h1> Here is your selected color!</h1>
        <button><Link to={'/'} > Return Home </Link> </button>
    </div>
   )
};

export default Color;