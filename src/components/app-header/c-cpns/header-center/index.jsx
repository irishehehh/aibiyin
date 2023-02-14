import IconSearchBar from '@/assest/svg/icon-search-bar'
import React, { memo } from 'react'
import { WrapperCenter } from './style'

const HeaderCenter = memo(() => {
  return (
    <WrapperCenter>
      <div className='search-bar'>
        <div className='test'>
          搜索房源和体验

        </div>
        <div className='icon'>
          <IconSearchBar/>

        </div>

      </div>
    </WrapperCenter>
  )
})

export default HeaderCenter