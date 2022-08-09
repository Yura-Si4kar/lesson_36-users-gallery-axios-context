import React from 'react';
import AlbumsProvider  from '../provider/AlbumsProvider';
import AlbumDetailPage from './AlbumDetailPage';

export default function AlbumDetailsWrapper() {
    return (
      <>
        <AlbumsProvider>
          <AlbumDetailPage/>
        </AlbumsProvider>
      </> 
  )
}
