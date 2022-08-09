import React, { useContext } from 'react'
import { AlbumContext } from '../provider/AlbumsProvider'

export default function useAlbum() {
    return useContext(AlbumContext);
}
