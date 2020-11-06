import React, {useEffect} from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import AlbumsList from './AlbumsList';
import AlbumPhotos from './AlbumPhotos';
import {fetchAlbums} from '../../store/actions/albums';
import {connect} from 'react-redux';

function Albums({fetchAlbums}) {

    let {path} = useRouteMatch();

    useEffect(fetchAlbums, []);

    return (
        <Switch>
            <Route path={`${path}/:id`}>
                <AlbumPhotos />
            </Route>
            <Route path={path}>
                <AlbumsList />
            </Route>
        </Switch>
    );
}

const mapDispatchToProps = {fetchAlbums};


export default connect(null, mapDispatchToProps)(Albums);
