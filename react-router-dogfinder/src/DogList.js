import React from "react";
import './DogList.css';


function DogList (props) {
    const { dogs } = props;
    const dogImages = dogs.map((dog, index) => {
        return (
        <div key={index}>
            <li key={index}> {dog.name} </li>
            <img src={dog.src} alt='' className="img"></img>
            <br></br>
        </div>
        )
    }) 


  
    
    return (
        <div>

            <h1>Adopt a dog!</h1>
            <ul>
                {dogImages}
            </ul>
        </div>
    )
};

export default DogList;