import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Profile from '../Profile/profile'; // Import your components
import Music from '../Music/Music'; // Import your components
import News from '../News/News'; // Import your components
import {Settings}from '../Settings/Settings';
import DialogsContainer from "../dialogs/DialogsContainer";
import {UsersContainer} from "../Users/UsersContainer";




class Roadmap extends  React.Component {
    render() {
        return <Routes>
            <Route path={"/profile"}  caseSensitive={false}  element={<Profile/>}/>
            <Route path={"/message/:id"}  caseSensitive={false}  element={<DialogsContainer/>}/>
            <Route path={"/message"}  caseSensitive={false}  element={<DialogsContainer/>}/>
            <Route path={"/news"}  caseSensitive={false}  element={<Music/>} />
            <Route path={"/music"}  caseSensitive={false}  element={<News/>} />
            <Route path={"/settings"}  caseSensitive={false}  element={<Settings/>} />
            <Route path={"/users"}  caseSensitive={false}  element={<UsersContainer />} />

        </Routes>
    }
}
export default Roadmap;

