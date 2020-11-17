import {
    ALBUMS_SET_BY_USERID,
    DELETE_USER,
    CREATE_USER,
    USERS_SET_LIST,
    UPDATE_USER
} from '../actions/users';

const initialState = {
    list: []
};

export default function users(state = initialState, {type, payload}) {
    switch (type) {
        case USERS_SET_LIST: return {...state, list: payload};
        case ALBUMS_SET_BY_USERID: return {...state, list: payload};
        case DELETE_USER: return {...state, list: state.list.filter(({id}) => id !== payload)};
        case CREATE_USER: return {...state, list: [...state.list, payload]};
        case UPDATE_USER: return {...state, list: state.list.map((item) => item.id !== payload.id ? item : payload)};
        default: return state;
    }
}
