import React from 'react';
import MapContainer from "./containers/MapContainer/MapContainer";
import './App.css';
import Header from "./components/Header/Header";

const App = (props) => {
  return (
    <div className="wrapper">

            <Header classname="Header" />


            <MapContainer />


    </div>
  );
}

export default App;
