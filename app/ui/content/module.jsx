import React from 'react'

export const Module = ({heading, content}) => {
  return (
    <div className='mt-8'>
        <h3 className='font-bold text-black text-[26px] md:text-[36px]'>{heading}</h3>
        <p className='text-[17px] md:text-[18px] lg:text-[20px] text-[#74757A] leading-[28px] lg:leading-[32px] mb-6 mt-2'>{content}</p>
    </div>
  )
}
