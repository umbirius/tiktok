import React from 'react'
import './App.css';
import Video from './Video';

function App() {
  return (

    // Bem naming convention
    <div className="app">
      <h1>Mern</h1>

      <div className="app__videos">
        <Video />
        <Video />
      </div>

      { /* app container */}
      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}

    </div>
  );
}

export default App;
