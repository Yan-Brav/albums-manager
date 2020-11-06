import React  from 'react';
import {connect} from 'react-redux';
import {Link, useRouteMatch} from 'react-router-dom';

function AlbumsList({list}) {

    const {url} = useRouteMatch();
    return (
        <ul>
            {list.map(({id, title}) => (
                <li key={id}>
                    <Link to={`${url}/${id}`}>{title}</Link>
                </li>
            ))}
        </ul>
    );
}

const mapStateToProps = ({albums: {list}}) => ({list});

export default connect(mapStateToProps)(AlbumsList);
