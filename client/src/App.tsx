import React from 'react';
import './App.css';
import "./fonts/Surfing Capital.ttf";
import HomeScreen from "./Views/Home/HomeScreen";
import EventsScreen from "./Views/Events/EventsScreen";
import AboutScreen from "./Views/About/AboutScreen";
import GalleryScreen from "./Views/Gallery/GalleryScreen";
import ContactScreen from "./Views/Contact/ContactScreen";
import Footer from "./Views/Footer/Footer";

const App = (): JSX.Element => {
    return (
        <>
            <div className="container">
                <HomeScreen/>
                <AboutScreen />
                <EventsScreen/>
                <GalleryScreen />
                <ContactScreen />
                <Footer />
            </div>
        </>
    );
}

export default App;
