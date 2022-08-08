import React from 'react';
import { Link } from 'react-router-dom';

export default function AlbumsListItem({ album }) {
    return <li>
        <Link to={String(album.id)}>
            {album.title}
        </Link>
    </li>;
}
