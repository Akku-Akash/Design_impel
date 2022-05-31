import React from "react"
import { Route, Routes } from "react-router-dom";
import City from "./component/city";
import Country from "./component/country";
import Edit from "./component/edit";
import Home from "./component/Home";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path = "/add-city" element = {<City/>}/>
        <Route path = "/add-country" element = {<Country/>}/>
        <Route path = "/edit/:id" element = {<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
