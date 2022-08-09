import React from 'react';
import { Outlet } from 'react-router-dom';
import PhotosListItem from '../../photo/PhotosListItem';
import useAlbum from '../hooks/useAlbum';

export default function AlbumDetailPage() {
  const {album} = useAlbum();

  return (
    <div>
      <h4>Photos:</h4>
      <br/>
      {album.map((photo) => (
        <PhotosListItem
        key={photo.id}
        item={photo} />
      ))}
      <Outlet/>
    </div>
  )
}
