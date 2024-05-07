import React from "react";
import defaultPhoto from "../../assets/images/Download.jpeg"
import './user.css'
import {UsersType} from "./UsersContainer";


type UsersProps = {
    onChangePageHandler: (activePage: number)=> void
}
class Users extends React.Component<UsersType & UsersProps>{

    constructor(maxDisplayPage: number, minDisplayPage: number) {
        super();
    }
    render(){
        const{users, changeFollowStatusAC, onChangePageHandler } = this.props

        const pages: number[]= []
        let maxDisplayPage = 10
        let minDisplayPage = 1
        //const pageCounter = Math.ceil(totalCount / pageSize)
        for (let i = minDisplayPage; i <= maxDisplayPage; i++ ){
            pages.push(i)
        }

        const nextPagesUsers = () => {
            maxDisplayPage += 5
            minDisplayPage += 5
        }
        return <div>
            <div>
                <button onClick={nextPagesUsers}>{`<`}</button>
                {pages.map(p => {
                    return <button key={p} onClick={() => onChangePageHandler(p)}>{p}</button>
                })}
                <button onClick={nextPagesUsers}>{`>`}</button>

            </div>
            {users.map(u => <div key={u.id} className={"user"}>
            <img alt={"userAva not found"} src={u.photos.small || defaultPhoto}/>
            <h3>{u.name}</h3>
            {u.followed ?
                <button onClick={()=> changeFollowStatusAC(u.id, !u.followed)}>Follow</button> :
                <button onClick={()=> changeFollowStatusAC(u.id, !u.followed)}>Unfollow</button>}
        </div>)}
        </div>
    }
}

export default Users;