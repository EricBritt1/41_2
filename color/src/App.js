import React, {useState} from "react";
import { Navigate, Link, Route, BrowserRouter, Routes } from "react-router-dom";
import Colors from "./Colors";
import Color from "./Color";
import ColorForm from "./ColorForm";



function App(props) {

  const [colorArray, setColorArray] = useState(props.arrayProp);

  const addColor = (newColor) => {
    setColorArray([...colorArray, newColor]);
  };



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Colors colors={colorArray} />} />
        <Route path="/colors/:color" element={<Color />} />
        <Route path="/colors/new" element={<ColorForm addColor={addColor}/>} />
        <Route path="*" element={ <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

App.defaultProps = {
  arrayProp: ['coral', 'gold', 'hotpink', 'peachpuff', 'lavender']
};

export default App;
