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

export const saveUser = (user) => (dispatch) => {
    user.id ? updateUser(user, dispatch) : createUser(user, dispatch)
};

export const CREATE_USER ='CREATE_USER';
const createUser = (user, dispatch) => {
    api.post('users', user).then(({data}) => dispatch({
        type:CREATE_USER,
        payload: data
    }))
};

export const UPDATE_USER = 'UPDATE_USER';
const updateUser = (user, dispatch) => {
    api.put('users/' + user.id, user).then(({data}) => dispatch({
        type: UPDATE_USER,
        payload: data
    }))
};
