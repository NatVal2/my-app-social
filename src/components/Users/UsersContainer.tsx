import {connect} from "react-redux";
import Users, {UsersType} from "./users";
import {AppDispatch, RootState} from "../../data/redux/store";
import {changeFollowStatusAC, setUsersFromServiceAC, userType, userUser} from "../../data/reducers/userReducer";
import React from "react";
import axios from "axios";

class SuperUsersContainer extends React.Component<UsersType>{
componentDidMount() {
 axios.get<userUser>("https://social-network.samuraijs.com/api/1.0/users").then(res => {
   this.props.setUsersFromServiceAC(res.data.items, res.data.totalCount, res.data.error)
 })}
 render(){
  return <Users {...this.props}/>
 }
}

const mapStateToProps = (state: RootState)=> {
 return{
  users: state.userReducer.items
 }
}
const mapDispatchToProps = (dispatch: AppDispatch)=> {
 return {
  changeFollowStatusAC: (userID: number, follow: boolean) => {
   dispatch(changeFollowStatusAC(userID, follow))
  },

   setUsersFromServiceAC: (userData: userType[], totalCount: number, error: null) => {
    dispatch(setUsersFromServiceAC(userData, totalCount, error))
   }
  }
}

 export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(SuperUsersContainer)

