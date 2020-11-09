import React, {useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom'
import {connect} from "react-redux";
// import {fetchUsers} from "../../store/actions/users";
import {fetchAlbumsByUserId} from "../../store/actions/users";
import {SELECTED_LINK} from "../../constants/class-css";
function UserAlbums({list, fetchAlbumsByUserId}) {


    const {id} = useParams();

    useEffect(() => fetchAlbumsByUserId(id),
        [fetchAlbumsByUserId, id]);

    return (
        <ul>
            <NavLink to={`album/${id}`}
                     activeClassName={SELECTED_LINK}>
                {list.map(({id, title}) => (
                    <li key={id}>{title}</li>
                ))}
            </NavLink>

        </ul>
    );
}

const mapStateToProps = ({users: {list}}) => ({list});

const mapDispatchToProps = {fetchAlbumsByUserId};

export default connect(mapStateToProps, mapDispatchToProps)(UserAlbums);
