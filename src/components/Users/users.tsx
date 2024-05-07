import React from "react";
import defaultPhoto from "../../assets/images/Download.jpeg"
import './user.css'
import {UsersType} from "./UsersContainer";


type UsersProps = {
    onChangePageHandler: (activePage: number)=> void
}
type PageProps = {
    maxDisplayPage : number
    minDisplayPage: number
}
class Users extends React.Component< UsersType & UsersProps, PageProps>{
    constructor(props: UsersType & UsersProps) {
        super(props);
        this.state = {
            maxDisplayPage: 10,
            minDisplayPage: 1,
        }
    }
    render(){
        const{users, changeFollowStatusAC, onChangePageHandler } = this.props

        const pages: number[]= []
        //const pageCounter = Math.ceil(totalCount / pageSize)
        for (let i = this.state.minDisplayPage; i <= this.state.maxDisplayPage; i++ ){
            pages.push(i)
        }

        const nextPagesUsers = () => {
            this.setState((state) => ({
                maxDisplayPage: state.maxDisplayPage + 5,
                minDisplayPage: state.minDisplayPage + 5
            }))
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