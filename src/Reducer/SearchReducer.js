import { SEARCH } from "../Actions/Types";

const Srch = (state,action)=>{
    if(state === undefined)
    {
        return {
            p_data : ""
        }
    }
    switch(action.type)
    {
        case SEARCH:
            return{
                ...state,
                p_data : action.data
        }
        default : return state
    }
}
export default Srch;