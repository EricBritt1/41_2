import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

//Note to self. On form submit make sure we just navigate back home automatically!

const ColorForm = ({ addColor }) => {
    const [newColor, setNewColor] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        addColor(newColor);

        setNewColor('');

        navigate('/')
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Note: Hexadecimal number format not supported (Ex: #f0f6fc) </h4>
            <input
                type="text"
                placeholder="Enter a new color"
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
            />
            <button type="submit">Add Color</button>
        </form>
    );
};

export default ColorForm;