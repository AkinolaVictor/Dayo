import { CATEGORY_TOGGLE } from '../types';

export const categoryToggle = (userData) => {
    return {
        type: CATEGORY_TOGGLE,
        payload: userData
    }
}