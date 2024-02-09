import React from 'react';
import './Dialog.css'
import '../Dialog.css'

type messageItemProps = {
    message: number
    name: string
}

export const Message = (props: messageItemProps ) => {
    return <div className={"dialogs-message"}>
        <div className={"dialogs-item"}>{props.message}</div>
    </div>
}





