import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Categories";

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>  
      <Food/>
      <Category/>
      </>
    </div>
  );
}

export default App;
