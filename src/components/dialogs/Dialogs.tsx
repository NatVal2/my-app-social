import React from 'react';
import './Dialog.css'
import {NavLink} from "react-router-dom";

type dialogItemProps = {
    id?: number
    name: string
}
const DialogItem = (props: dialogItemProps) => {
    let path = "/dialogs/" + props.id

    return <div className={"dialogs-items" + " " + "active"}>
        <NavLink to={path} className={"item"}>
            {props.name}
        </NavLink>
    </div>
}
const Message = (props: any) => {
    return <div className={"dialogs-message"}>
        <div className={"dialogs-item"}>{props.message}</div>
    </div>
}
export const Dialogs = (props: dialogItemProps) => {

    let dialogsData = [
        {id: 1, name: "Nata"},
        {id: 2, name: "Kostja ",},
        {id: 3, name: "Nick ",},
        {id: 4, name: "Phil ",},
        {id: 5, name: "Nella ",},
        {id: 6, name: "Nora ",},
    ]
    let dialogsMessageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "yo",},
        {id: 3, message: "yo",},
        {id: 4, message: "yo",},
        {id: 5, message: "yo",},
        {id: 6, message: "yo",},
    ]

    let dialogDaten =    dialogsData.map(d => {
            return <DialogItem key={d.id}  name={d.name}/>
        });



     let messageDaten =   dialogsMessageData.map(m => {
            return <Message key={m.id} message={m.message}/>
        });


    return (
        <div className={"dialogs"}>
            <div className={"blabla"}>
                {dialogDaten}
            </div>

            <div className={"dialogs-message"}>
                {messageDaten}
            </div>

        </div>
    )
}