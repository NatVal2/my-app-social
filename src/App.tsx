import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Navbar} from "./components/Navbar/navbar";
import {Profile} from "./components/Profile/profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Navigate, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*<Profile/>*/}
            <div className={"app-wrapper-content"}>
                <Route path={"Dialogs"} element={<Navigate to={"Dialogs"}/>}  />
                <Route path={"Profile"} element={<Navigate to={"Profile"}/>} />
                {/*<Dialogs/>*/}
            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;
