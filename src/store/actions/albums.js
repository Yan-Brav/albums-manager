import api from '../../api';

export const ALBUMS_SET_LIST = 'ALBUMS_SET_LIST';
export const fetchAlbums = () => async (dispatch) => {
     const {data} = await api.get('albums');
     dispatch({
         type: ALBUMS_SET_LIST,
         payload: data
     })
};
