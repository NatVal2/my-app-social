import {connect} from "react-redux";
import Users from "./users";
import {AppDispatch, RootState} from "../../data/redux/store";
import {changeFollowStatusAC} from "../../data/reducers/userReducer";

const mapStateToProps = (state: RootState)=> {
 return{
  users: state.userReducer.users
 }
}
const mapDispatchToProps = (dispatch: AppDispatch)=> {
 return {
  changeFollowStatusAC: (userID: string, follow: boolean) => {
   dispatch(changeFollowStatusAC(userID, follow))
  }
 }
}

 export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
