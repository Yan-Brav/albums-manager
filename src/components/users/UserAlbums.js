import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";
// import {fetchUsers} from "../../store/actions/users";
import {fetchAlbumsByUserId} from "../../store/actions/users";
function UserAlbums({list, fetchAlbumsByUserId}) {


    const {id} = useParams();

    useEffect(() => fetchAlbumsByUserId(id),
        [fetchAlbumsByUserId, id]);

    return (
        <ol>
            {list.map(({id, title}) => (
                <li key={id}>{title}</li>
            ))}
        </ol>
    );
}

const mapStateToProps = ({users: {list}}) => ({list});

const mapDispatchToProps = {fetchAlbumsByUserId};

export default connect(mapStateToProps, mapDispatchToProps)(UserAlbums);
