import React from 'react';
import {NavLink, Route, Switch, useRouteMatch} from "react-router-dom";
import UsersForm from "./UsersForm";
import UsersList from "./UsersList";
import './Users.css'

function Users() {

    const classSelectedLink = 'pressed';

    const {path, url} = useRouteMatch();

    return (
        <>
            <div id='heading'>
                <nav>
                    <ul>
                        <li><NavLink to={`${url}/form`} activeClassName={classSelectedLink}>Add user</NavLink></li>
                        <li><NavLink to={`${url}/list`} activeClassName={classSelectedLink}>Show albums</NavLink></li>
                    </ul>
                </nav>
            </div>
            <hr />
            <Switch>
                <Route path={`${path}/form`}>
                    <UsersForm/>
                </Route>
                <Route path={`${path}/list`}>
                    <UsersList/>
                </Route>
            </Switch>
        </>
    );
}

export default Users;
