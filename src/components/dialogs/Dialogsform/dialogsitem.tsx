import React from 'react';
import './Dialogsitem.css'
import {NavLink} from "react-router-dom";

type dialogItemProps = {
    id?: number
    name: string
}
export const DialogItem = (props: dialogItemProps) => {
    let path = "/dialogs/" + props.id

    return <div className={"dialogs-items" + " " + "active"}>
        <NavLink to={path} className={"item"}>
            {props.name}
        </NavLink>
    </div>
}
