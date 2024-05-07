import {connect} from "react-redux";
import Users from "./users";
import {AppDispatch, RootState} from "../../data/redux/store";
import {
 changeFollowStatusAC,
 setNewActivepageAC,
 setUsersFromServiceAC,
 userType,
 userUser
} from "../../data/reducers/userReducer";
import React from "react";
import axios from "axios";

export type UsersType ={
 users: userType[]
 changeFollowStatusAC:(userID: number, follow: boolean)=> void
 setUsersFromServiceAC: (userData: userType[], totalCount: number, error: null)=> void
 setNewActivepageAC: (activePage: number) => void
 activePage: number
 pageSize: number
 totalCount: number
}
class SuperUsersContainer extends React.Component<UsersType>{
componentDidMount() {
 axios.get<userUser>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}`).then(res => {
  this.props.setUsersFromServiceAC(res.data.items, res.data.totalCount, res.data.error)
 })
}

 onChangePageHandler(activePage: number) {
  this.props.setNewActivepageAC(activePage);
  axios
      .get<userUser>(`https://social-network.samuraijs.com/api/1.0/users?page=${activePage}`)
      .then((res) => {
       this.props.setUsersFromServiceAC(res.data.items, res.data.totalCount, res.data.error);
      });
}
 render(){
  return <Users {...this.props} onChangePageHandler={this.onChangePageHandler}/>
 }
}


const mapStateToProps = (state: RootState)=> {
 return{
  users: state.userReducer.items,
  activePage: state.userReducer.activePage,
  pageSize: state.userReducer.pageSize,
  totalCount:  state.userReducer.totalCount
 }
}
const mapDispatchToProps = (dispatch: AppDispatch)=> {
 return {
  changeFollowStatusAC: (userID: number, follow: boolean) => {
   dispatch(changeFollowStatusAC(userID, follow))
  },

   setUsersFromServiceAC: (userData: userType[], totalCount: number, error: null) => {
    dispatch(setUsersFromServiceAC(userData, totalCount, error))
   },
  setNewActivepageAC: (activePage: number)=> {
   dispatch(setNewActivepageAC(activePage))
  }

  }
}

 export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(SuperUsersContainer)

