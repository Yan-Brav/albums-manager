import {ALBUMS_SET_BY_USERID,
        ALBUMS_SET_LIST} from '../actions/albums';

const initialState = {
    list: []
};

export default function albums(state = initialState, {type, payload}) {
    switch (type) {
        case ALBUMS_SET_LIST: return {...state, list: payload};
        case ALBUMS_SET_BY_USERID: return {...state, list: payload};
        default: return state;
    }
}
