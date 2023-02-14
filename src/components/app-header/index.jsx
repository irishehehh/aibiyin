import React, { memo } from 'react'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { WrapperHeader } from './style'

const AppHeader = memo(() => {
  return (
    <WrapperHeader>
     <HeaderLeft/>
     <HeaderCenter/>
     <HeaderRight/>
    </WrapperHeader>
  )
})

export default AppHeader