import React from 'react';
import './App.css';
import "./fonts/Surfing Capital.ttf";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./Views/Home/HomeScreen";
import AboutScreen from "./Views/About/AboutScreen";
import ContactScreen from "./Views/Contact/ContactScreen";
import NoticesScreen from "./Views/Notices/NoticesScreen";
import SeriesScreen from "./Views/Series/SeriesScreen";
import Navbar from "./Views/Navbar/Navbar";

const App = (): JSX.Element => {
    return (
        <div>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/"        element={<HomeScreen />}/>*/}
            {/*        <Route path="/about"   element={<AboutScreen />}/>*/}
            {/*        <Route path="/contact" element={<ContactScreen />}/>*/}
            {/*        <Route path="/notices" element={<NoticesScreen />}/>*/}
            {/*        <Route path="/series"  element={<SeriesScreen />}/>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
            <Navbar />
            <HomeScreen />
        </div>
    );
}

export default App;
