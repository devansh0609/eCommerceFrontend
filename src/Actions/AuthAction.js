import axios from 'axios';
import { base_url } from './config';
import { regApiLoading,regApiSuccess,regApiFailure,logApiLoading,logApiSuccess,logApiFailure,cleanAuth, srchProduct } from './ActionCreators';

export const RegisterAction = (data)=>{

    return(dispatch)=>{
        dispatch(regApiLoading());
        axios.post(base_url + "/user_register",data).then((res)=>{
            alert(res.data.msg);
            dispatch(regApiSuccess(res.data));
        }).catch((res)=>{
            dispatch(regApiFailure(res.response.data));
            alert(res.response.data.err);
        })
    }
}
export const LoginAction = (data)=>{

    return(dispatch)=>{
        dispatch(logApiLoading());
        axios.post(base_url + "/user_login",data).then((res)=>{
            dispatch(logApiSuccess(res.data));
            alert(res.data.msg);
        }).catch((res)=>{
            dispatch(logApiFailure(res.response.data));
            alert(res.response.data.msg);
        })
    }
}
export const logoutAction = ()=>{

    return(dispatch)=>{
    dispatch(cleanAuth());
    }
}
export const searchProduct = (data)=>{
    return(dispatch)=>{
        dispatch(srchProduct(data));
    }
}