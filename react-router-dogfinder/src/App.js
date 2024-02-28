import React from 'react';
import { BrowserRouter as Router, Route, Switch, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import NavBar from './NavBar';
import { whiskey, duke, perry, tubby } from './images';


//Everything went great with this assignment besides css styling. Will watch videos to get better at it. Definitely need to figure out how to place navbar and very top and h1 on separate line.


function App({ dogs }) {
  return (
    <BrowserRouter>
    <NavBar dogs={dogs} />
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
    </Routes>
    </BrowserRouter>
  );
}


App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
