import React from 'react';
import './App.css';
import "./fonts/Surfing Capital.ttf";
import HomeScreen from "./Views/Home/HomeScreen";
import EventsScreen from "./Views/Events/EventsScreen";
import AboutScreen from "./Views/About/AboutScreen";

const App = (): JSX.Element => {
    return (
        <>
            <div className="container">
                <HomeScreen/>
                <AboutScreen />
                <EventsScreen/>
            </div>
        </>
    );
}

export default App;
