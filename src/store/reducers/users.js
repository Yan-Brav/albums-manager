import {
    ALBUMS_SET_BY_USERID,
    DELETE_USER,
    INPUT_CHANGE_USER,
    SAVE_USER,
    // SELECT_USER,
    USERS_SET_LIST
} from "../actions/users";

const initialState = {
    list: []
    /*selectedUser: getEmptyUser()*/
};

export default function users(state = initialState, {type, payload}) {
    switch (type) {
        case USERS_SET_LIST: return {...state, list: payload};
        case ALBUMS_SET_BY_USERID: return {...state, list: payload};
        case DELETE_USER: return {...state, list: state.list.filter(({id}) => id !== payload)};
        case INPUT_CHANGE_USER: return {...state, selectedUser: payload};
        case SAVE_USER: return {...state, list: [...state.list, payload]/*, selectedUser: getEmptyUser()*/};
        /*case SELECT_USER: return {...state, selectedUser: state.list.map((item) =>
                item.id === payload ? item : getEmptyUser())};*/
        default: return state;
    }
}

/*export function getEmptyUser() {
    return {
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    }
}*/
