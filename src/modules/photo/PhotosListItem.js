import React from 'react'

export default function PhotosListItem({item}) {
  return (
    <div>
        <img src={item.thumbnailUrl} alt={item.title} />
    </div>
  )
}
