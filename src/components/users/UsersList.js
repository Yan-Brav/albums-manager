import React from 'react';
import {connect} from "react-redux";
import {NavLink, useRouteMatch} from "react-router-dom";
import {SELECTED_LINK} from "../../constants/class-css";
import UserItem from "./UserItem";

function UsersList({list}) {

    const {url} = useRouteMatch();
    console.log(url);

    return (
        <ol>
            {list.map((item) => (
                    <li key={item.id}>
                        <NavLink to={`${url}/${item.id}`}
                                 activeClassName={SELECTED_LINK}>
                            <UserItem item={item}/>
                        </NavLink>
                    </li>
                )
            )}
        </ol>
    );
}

const mapStateToProps = ({users: {list}}) => ({list});

export default connect(mapStateToProps)(UsersList);
