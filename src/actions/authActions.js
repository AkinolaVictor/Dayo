import { TEST_DISPATCH } from './types';

//log
export const registerUser = (userData) => {
    return {
        type: TEST_DISPATCH,
        payload: userData
    }
}