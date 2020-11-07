import React, {useEffect} from 'react';
import {NavLink, Route, Switch, /*Redirect,*/ useRouteMatch} from "react-router-dom";
import UsersForm from "./UsersForm";
import UsersList from "./UsersList";
import './Users.css'
import {connect} from "react-redux";
import {fetchUsers} from "../../store/actions/users";
import {SELECTED_LINK} from "../../constants/class-css";
import UserAlbums from "./UserAlbums";

function Users({fetchUsers}) {
    /*const {id} = useParams();
    console.log('Id is', id);*/
    useEffect(fetchUsers, [fetchUsers]);

    const {path, url} = useRouteMatch();

    return (
        <>
            <div id='heading'>
                <nav className='grid-4-items'>
                    <NavLink to={`${url}/add`} activeClassName={SELECTED_LINK}>Add</NavLink>
                    <NavLink to={`${url}/list`} activeClassName={SELECTED_LINK}>Show albums</NavLink>
                    <NavLink to={`${url}/edit`} activeClassName={SELECTED_LINK}>Edit</NavLink>
                    <button id='delete-btn'>Delete</button>

                    {/*<NavLink to={`${url}/list`} activeClassName={classSelectedLink}>Delete</NavLink>*/}
                </nav>
            </div>
            <hr />
            <Switch>
                <Route path={`${path}/:id`}>
                    <div>
                        <UserAlbums/>
                    </div>
                </Route>
                <Route path={`${path}/add`}>
                    <div>
                        <UsersForm/>
                    </div>
                </Route>
                <Route path={`${path}`}>
                    <div>
                        <UsersList/>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

const mapDispatchToProps = {fetchUsers};

export default connect(null, mapDispatchToProps)(Users);
