import AlbumsListItem from './AlbumsListItem';
import React from 'react';

export default function AlbumsList({ list }) {
    return (
        <ul>
            {list.map((album) => (
                <AlbumsListItem key={album.id} album={album} />
            ))}
        </ul>
    );
}