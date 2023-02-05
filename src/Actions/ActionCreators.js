import { REG_API_LOADING, REG_API_SUCCESS, REG_API_FAILURE,LOG_API_FAILURE,LOG_API_SUCCESS,LOG_API_LOADING, CLEAN_AUTH, SEARCH } from "./Types";

export const regApiLoading = ()=>({
    type : REG_API_LOADING
})
export const regApiSuccess = (data)=>({
    type : REG_API_SUCCESS,
    data
})
export const regApiFailure = (err)=>({
    type : REG_API_FAILURE,
    err
})
export const logApiLoading = ()=>({
    type : LOG_API_LOADING
})
export const logApiSuccess = (data)=>({
    type : LOG_API_SUCCESS,
    data
})
export const logApiFailure = (err)=>({
    type : LOG_API_FAILURE,
    err
})
export const cleanAuth = ()=>({
    type : CLEAN_AUTH
})
export const srchProduct = (data)=>({
    type : SEARCH,
    data
})