import React from 'react';
import { Outlet } from 'react-router-dom';
import PhotoList from '../../photo/PhotoList';
import useAlbum from '../hooks/useAlbum';

export default function AlbumDetailPage() {
  const album = useAlbum();

  return (
    <div>
      <h4>Photos:</h4>
      <br/>
      <PhotoList album={album} />
      <Outlet/>
    </div>
  )
}
