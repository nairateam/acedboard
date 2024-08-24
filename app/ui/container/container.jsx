import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='px-[20px] md:px-[40px] xl:px-[80px] max-w-[1840px] m-auto'>
        {children}
    </div>
  )
}

export default Wrapper