import api from "../../api";


export const USERS_SET_LIST = 'USERS_SET_LIST';
export const fetchUsers = () => async (dispatch) => {
    const {data} = await api.get('users');
    dispatch({
        type: USERS_SET_LIST,
        payload: data
    })
};

export const ALBUMS_SET_BY_USERID ='ALBUMS_SET_BY_USERID';
export const fetchAlbumsByUserId = (userId) => async (dispatch) => {
    const {data} = await api.get(`albums?userId=${userId}`);
    dispatch({
        type: ALBUMS_SET_BY_USERID,
        payload: data
    })
};
