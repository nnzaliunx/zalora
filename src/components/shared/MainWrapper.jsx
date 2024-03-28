import React from 'react'

const MainWrapper = ({children}) => {
  return (
    <div className='max-w-2xl px-4 mx-auto'>
        {children}
    </div>
  )
}

export default MainWrapper