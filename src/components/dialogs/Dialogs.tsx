import React from 'react';
import './Dialog.css'
import {NavLink} from "react-router-dom";

type dialogItemProps = {
    id: number
    name: string
}
const DialogItem = (props: dialogItemProps) => {

    return <div className={"dialogs-items" + " " + "active"}>
        <NavLink to={"/dialogs/" + props.id} className={"item"}>
            {props.name}
        </NavLink>
        </div>
}
const Message = (props: any) => {
    return    <div className={"dialogs-message"}>
        <div className={"dialogs-item"}>lorem ksmdlgkajlrkgjlöahbn</div>
    </div>
}
export const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: "Nata"},
        { id: 2, name: "Kostja ", },
        { id: 3, name: "Nick ", },
        { id: 4, name: "Phil ", },
        { id: 5, name: "Nella ", },
        { id: 6, name: "Nora ", },
    ]
    let dialogsMessageData = [
        { id: 1, name: "yo"},
        { id: 2, name: "yo", },
        { id: 3, name: "yo", },
        { id: 4, name: "yo", },
        { id: 5, name: "yo", },
        { id: 6, name: "yo", },
    ]
    return (
        <div className={"dialogs"}>
            <div className={"dialogs-items" + " " + "active"}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

            </div>

            <div className={"dialogs-message"}>
                <Message message ={dialogsMessageData[0].name}/>
                <Message message ={dialogsMessageData[1].name}/>
                <Message message ={dialogsMessageData[2].name}/>
                <Message message ={dialogsMessageData[3].name}/>
                <Message message ={dialogsMessageData[4].name}/>
                <Message message ={dialogsMessageData[5].name}/>
            </div>

        </div>
    );
};

