import { CATEGORY,LOGIN, LOGOUT, USERS, ROUTE,NOTIFICATION,POSTID } from '../Types';
export const login = payload => {
    return {
        type: LOGIN,
        payload: payload
    }
};
export const logout = () => {
    return {
        type: LOGOUT,
        payload: { uid: '' }
    }
};
export const setUsers = (payload) => {
    return {
        type: USERS,
        payload: payload
    }
};
export const setCategoryId = (payload) => {
    return {
        type: CATEGORY,
        payload: payload
    }    
};
export const setRoute = (payload)=>{
    return{
        type:ROUTE,
        payload:payload
    }   
};
export const setHomeRoute = (payload)=>{
    return{
        type:NOTIFICATION,
        payload:payload
    }   
};
export const setPostId = (payload)=>{
    return{
        type:POSTID,
        payload:payload
    }   
};