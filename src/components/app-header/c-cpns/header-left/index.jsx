import IconLogo from '@/assest/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { WrapperLeft } from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function logoClickHandle() {
        navigate('/home')
  }

  return (
    <WrapperLeft>
      <div className='logo' onClick={logoClickHandle}>
   
        <IconLogo/>

      </div>
    </WrapperLeft>
  )
})

export default HeaderLeft