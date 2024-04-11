import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from "./components/Home";
import About from "./routes/About";
import AIBoard from "./routes/AIBoard";
import PlayerBoard from "./routes/PlayerBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/ai" element={<AIBoard/>}/>
        <Route path = "/2-player" element = {<PlayerBoard/>}/>
        
      </Routes>
    </>
  );
}

export default App;
