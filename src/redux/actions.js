import { axiosInstance } from "../utils/axios";


export const getSearchResult = (searchitem) => {
    return async (dispatch) => {
        axiosInstance(searchitem)
            .then(response => {
                dispatch({ type: 'SET_UNIVERSITIES', payload: response.data});
            })
    }
}