import React from 'react';
import './App.css';
import "./fonts/Surfing Capital.ttf";
import HomeScreen from "./Views/Home/HomeScreen";
import AboutScreen from "./Views/About/AboutScreen";
import ContactScreen from "./Views/Contact/ContactScreen";
import NoticesScreen from "./Views/Notices/NoticesScreen";
import SeriesScreen from "./Views/Series/SeriesScreen";
import Navbar from "./Views/Navbar/Navbar";

const App = (): JSX.Element => {
    return (
        <div>
            <Navbar />
            <HomeScreen />
        </div>
    );
}

export default App;
