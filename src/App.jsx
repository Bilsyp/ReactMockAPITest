import React from 'react';
import {Routes,Route} from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Navbar from "./components/Navbar";
import "./App.css"
function App() {
  return (
    <main className=" en">
<Navbar/>
<Routes>
<Route path="/" element={<Create/>}  />
<Route path="/read" element={<Read/>}  />
<Route path="/update" element={<Update/>}  />
  
  

</Routes>
      
    </main>
  );
}

export default App;
