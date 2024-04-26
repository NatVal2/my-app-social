import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/profile";
import {Message} from "../dialogs/Message/Messageitem";
import {Dialogs} from "../dialogs/Dialogs";
import {state} from "../../state";
import Music from "../Music/Music";
import News from "../News/News";
import {Settings} from "../Settings/Settings";

 export const Roadmap = (props: any) => {
    return (
        <Routes>
           <Route path="/*"  caseSensitive={false} element={<div>Error</div>}/>
            <Route path={"/dialogs"}  caseSensitive={false}  element={<Dialogs dialogs={state.dialogPage.dialogs} messages={state.dialogPage.messages}/>}  />
            <Route path={"/profile"}  caseSensitive={false}  element={<Profile/>} />
            <Route path={"/news"}  caseSensitive={false}  element={<Music/>} />
            <Route path={"/music"}  caseSensitive={false}  element={<News/>} />
            <Route path={"/settings"}  caseSensitive={false}  element={<Settings/>} />
        </Routes>
    );
};

