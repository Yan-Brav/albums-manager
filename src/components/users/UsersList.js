import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {NavLink, useRouteMatch} from 'react-router-dom';
import {SELECTED_LINK} from '../../constants/class-css';
import UserItem from './UserItem';
import {deleteUser,
        fetchUsers} from '../../store/actions/users';
import './css/UsersList.css'

function UsersList({list, fetchUsers, deleteUser}) {

    const {url} = useRouteMatch();

    useEffect(fetchUsers, [fetchUsers]);

    return (
        <ul>
            {list.map((item) => (
                    <li key={item.id} className='grid-3-items'>
                        <NavLink to={`${url}/${item.id}`}
                                 activeClassName={SELECTED_LINK}>
                            <UserItem item={item}/>
                        </NavLink>
                        <NavLink to={`${url}/add/${item.id}`}>
                            <span><i className='fa fa-pencil'/></span>
                        </NavLink>
                        <span onClick={() => deleteUser(item.id)}>
                            <i className='fa fa-trash-o'/></span>
                    </li>
                )
            )}
        </ul>
    );
}

const mapStateToProps = ({users: {list}}) => ({list});

const mapDispatchToProps = {
    fetchUsers,
    deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
