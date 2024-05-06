
export type userType = {
    id: string
    name: string
    follow: boolean
}
type userUser = {
    users: userType[]
}
const initialState: userUser   = {
    users:[
        {id: "1", name: "Tim", follow: true},
        {id: "2", name: "Kim", follow: false},
        {id: "3", name: "Anna", follow: true},
        {id: "4", name: "Tom", follow: false},
        {id: "5", name: "Till", follow: true},
        {id: "6", name: "Fill", follow: true},
        {id: "7", name: "Alex", follow: false},
        {id: "8", name: "Dima", follow: true},
    ]
}
export const userReducer= (state = initialState, action:  Main) => {
    switch (action.type){
        case "CHANGE_FOLLOW":
            return {...state,
                users: state.users.map(u => u.id === action.userID ? {...u, follow: action.follow} : u)}
        default:
            return state
    }
}

type ChangeFollowStatus = ReturnType<typeof changeFollowStatusAC >

type Main = ChangeFollowStatus
export const changeFollowStatusAC = (userID: string, follow: boolean) => {
    return {type: "CHANGE_FOLLOW", follow, userID} as const
}