import React from 'react'
const PreviewImg = ({image}) => {
  return (
    <div className='h-[80px] w-[80px] hover:outline cursor-pointer '
    >
      <img src={image} alt='preview' className='w-full h-full block object-fill select-none'/>
    </div>
  )
}

export default PreviewImg
