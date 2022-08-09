import React from 'react'
import PhotosListItem from './PhotosListItem'

export default function PhotoList({album}) {
  return (
      <div  className='photo'>
        {album.map((photo) => (
            <PhotosListItem
            key={photo.id}
            item={photo} />
        ))}
      </div>
  )
}
