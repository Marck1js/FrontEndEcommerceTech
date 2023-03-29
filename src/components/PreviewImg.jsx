import React from 'react'
const PreviewImg = ({image}) => {
  return (
    <div className='h-[80px] w-[80px] hover:border-[1px] border-[#000] cursor-pointer '
    >
      <img src={image} alt='preview' className='w-full h-full block object-fill select-none'/>
    </div>
  )
}

export default PreviewImg
