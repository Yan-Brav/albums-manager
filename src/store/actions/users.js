import api from '../../api';


export const USERS_SET_LIST = 'USERS_SET_LIST';
export const fetchUsers = () => async (dispatch) => {
    const {data} = await api.get('users');
    dispatch({
        type: USERS_SET_LIST,
        payload: data
    })
};

export const ALBUMS_SET_BY_USERID ='ALBUMS_SET_BY_USERID';
export const fetchAlbumsByUserId = (id) => async (dispatch) => {
    const {data} = await api.get(`albums?userId=${id}`);
    dispatch({
        type: ALBUMS_SET_BY_USERID,
        payload: data
    })
};

export const DELETE_USER = 'DELETE_USER';
export const deleteUser = (id) => async (dispatch) => {
    await api.delete('users/' + id);
    dispatch({
        type: DELETE_USER,
        payload: id
    })
};

export const INPUT_CHANGE_USER = 'INPUT_CHANGE_USER';
export const inputChangeUser = (payload) => {
    return {
        type: INPUT_CHANGE_USER,
        payload
    }
};

export const CREATE_USER ='CREATE_USER';
export const createUser = (user) => async (dispatch) => {
    const {data} = await api.post('users', user);
    console.log('New user: ', data);
    dispatch({
        type:CREATE_USER,
        payload: data
    })
};

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (user) => async (dispatch) => {
    await api.put('users/' + user.id, user);
    dispatch({
        type: UPDATE_USER,
        payload: user
    })
};
