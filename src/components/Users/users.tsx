import React from "react";
import {userType} from "../../data/reducers/userReducer";
import defaultPhoto from "../../assets/images/Download.jpeg"
import './user.css'

export type UsersType ={
    users: userType[]
    changeFollowStatusAC:(userID: number, follow: boolean)=> void
    setUsersFromServiceAC: (userData: userType[], totalCount: number, error: null)=> void
}

class Users extends React.Component<UsersType>{
    render(){
        const{users, changeFollowStatusAC}= this.props
        return <div>
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