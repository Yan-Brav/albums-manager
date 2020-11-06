import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPhotos} from '../../store/actions/photos';

function AlbumPhotos({list, fetchPhotos}) {

    const {id} = useParams();

    useEffect(() => fetchPhotos(id), [fetchPhotos, id]);

    const history = useHistory();

    console.log('History', history);

    return (
        <ul>
            {list.map(({thumbnailUrl, id}) => (
                <li key={id}><img src={thumbnailUrl} alt=''/></li>
            ))}
        </ul>
    );
}

const mapStateToProps = ({photos: {list}}) => ({list});

const mapDispatchToProps = {
    fetchPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPhotos);
