import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import './DogDetails.css'

function DogDetails (props) {
const { dogs } = props;
const params = useParams();

const getDogInfo = () => {
        const dog = dogs.find(dog => (dog.name).toLowerCase() === params.name);


        if (!dog) {
            //Change to a naviage to homepage later!
            return (
            <div>
                 <h1>Dog not found</h1>
                 <Link to='/dogs'>Go Home!</Link>

            </div>
            
            )
        }

        const dogFacts = dog.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
        ));

    return (
        <div>
                <h1> {dog.name} </h1>
            <img src={dog.src} alt='' />
            <ul>
                <li key={dog.age}>
                    Age: {dog.age}
                </li>
                <li key='facts'> Facts:
                    <ul>
                        {dogFacts}
                    </ul>
                </li>
            </ul>
        </div>
        ) 
};

return (
    <div>
       {getDogInfo()}
    </div>
)
};

export default DogDetails;