import { CATEGORY,LOGIN, LOGOUT,USERS,ROUTE,NOTIFICATION,POSTID } from '../Types';
const intialState = {
    user:{},
    users: {},
    categoryId :{},
    isLogin: false,
    initialRoute:"Splash",
    notificationRoute:"Home",
    notificationPostId : ""
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                users: action.payload,
                isLogin: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                user: {},
                isLogin: false
            }
        }
        case USERS: {
            return {
                ...state,
                users:action.payload
        }
        }
        case CATEGORY: {
            return {
                ...state,
                categoryId:action.payload
        }
        }
        case ROUTE:{
            return{
                ...state,
                initialRoute:action.payload
            }
        }
        case NOTIFICATION:{
            return{
                ...state,
                notificationRoute:action.payload
            }
        }
        case POSTID:{
            return{
                ...state,
                notificationPostId:action.payload
            }
        }
        default:
            return state

    }
}
export default reducer;