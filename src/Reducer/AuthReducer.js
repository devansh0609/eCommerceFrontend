import { REG_API_FAILURE,REG_API_SUCCESS,REG_API_LOADING,LOG_API_LOADING,LOG_API_FAILURE,LOG_API_SUCCESS, CLEAN_AUTH } from "../Actions/Types";

const Auth = (state,action)=>{

    if(state === undefined)
    {
        return{
            loading : false,
            r_data : [],
            r_err : {},
            l_data : [],
            l_err : {}
        }
    }
    switch(action.type)
    {
        case REG_API_LOADING:
            return{
                ...state,
                loading : true,
                r_data : [],
                r_err : {},
                l_data : [],
                l_err : {}
            }
        case REG_API_SUCCESS:
            return{
                ...state,
                loading : false,
                r_data : action.data,
                r_err : {},
                l_data : [],
                l_err : {}
            }
        case REG_API_FAILURE:
            return{
                ...state,
                loading : false,
                r_data : [],
                r_err : action.err,
                l_data : [],
                l_err : {}
            }
        case CLEAN_AUTH:
            return{
                ...state,
                loading : false,
                r_data : [],
                r_err : {},
                l_data : [],
                l_err : {}
            }
        case LOG_API_LOADING:
            return{
                ...state,
                loading : true,
                l_data : [],
                l_err : {},
                r_data : [],
                r_err : {}
            }
        case LOG_API_SUCCESS:
            return{
                ...state,
                loading : false,
                l_data : action.data,
                l_err : {},
                r_data : [],
                r_err : {}
            }
        case LOG_API_FAILURE:
            return{
                ...state,
                loading : false,
                l_data : [],
                l_err : action.err,
                r_data : [],
                r_err : {}
            }
        default : return state
    }
}
export default Auth;