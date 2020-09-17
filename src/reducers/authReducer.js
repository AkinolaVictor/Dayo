import { TEST_DISPATCH } from '../actions/types';
import { CATEGORY_TOGGLE } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case TEST_DISPATCH:
            return {
               ...state,
               user: action.payload 
            }
        case CATEGORY_TOGGLE:
            return {
                hide: ""
            }
        default:
            return state;
    }
}