import React from 'react';
import './App.css';
import "./fonts/Surfing Capital.ttf";
import HomeScreen from "./Views/Home/HomeScreen";
import NoticesScreen from "./Views/Notices/NoticesScreen";
import AboutScreen from "./Views/About/AboutScreen";
import GalleryScreen from "./Views/Gallery/GalleryScreen";
import ConnectScreen from "./Views/Connect/ConnectScreen";
import Footer from "./Views/Footer/Footer";

const App = (): JSX.Element => {
    return (
        <>
            <div className="container">
                <HomeScreen/>
                <AboutScreen />
                <NoticesScreen/>
                <GalleryScreen />
                <ConnectScreen />
                <Footer />
            </div>
        </>
    );
}

export default App;
