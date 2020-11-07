import {ALBUMS_SET_BY_USERID,
    USERS_SET_LIST} from "../actions/users";

const initialState = {
    list: []
    // selectedUsers: getEmptyUser()
};

export default function users(state = initialState, {type, payload}) {
    switch (type) {
        case USERS_SET_LIST: return {...state, list: payload};
        case ALBUMS_SET_BY_USERID: return {...state, list: payload};
        default: return state;
    }
}

/*function getEmptyUser() {
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
