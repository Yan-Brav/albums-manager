import React from 'react';
import {NavLink, Route, Switch, useRouteMatch} from "react-router-dom";
import UsersForm from "./UsersForm";
import UsersList from "./UsersList";
import './Users.css'
import {SELECTED_LINK} from "../../constants/class-css";
import UserAlbums from "./UserAlbums";
import AlbumPhotos from "../albums/AlbumPhotos";

function Users() {

    const {path, url} = useRouteMatch();

    return (
        <>
            <div id='heading'>
                <nav className='grid-2-items'>
                    <NavLink to={`${url}/add`} activeClassName={SELECTED_LINK}>Add</NavLink>
                </nav>
            </div>
            <hr />
            <Switch>
                <Route path={`${path}/album/:id`}>
                    <div>
                        <AlbumPhotos/>
                    </div>
                </Route>
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

// const mapDispatchToProps = {fetchUsers};

export default /*connect(null, mapDispatchToProps)*/Users;
