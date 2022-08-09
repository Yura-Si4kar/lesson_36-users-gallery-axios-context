import React from 'react'

export default function PhotosListItem({item}) {
  return (
    <div>
        <img className='photo-item' src={item.thumbnailUrl} alt={item.title} />
    </div>
  )
}
