import React from 'react'

const Breadcrumb = () => {
  return (
    <div className='flex items-center p-[2px] md:p-[10px] py-[20px] md:py-[48px] gap-[12px] text-[14px] md:text-[20px]'>
        <p className='text-[#918E90] font-medium'>Home</p>
        <p className='text-[#540039] font-medium'>/</p>
        <p className='text-[#540039] font-medium'>Help Centre</p>
    </div>
  )
}

export default Breadcrumb