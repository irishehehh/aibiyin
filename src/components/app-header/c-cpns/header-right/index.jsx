import IconAvatar from '@/assest/svg/icon_avatar'
import IconGlobal from '@/assest/svg/icon_global'
import IconMenu from '@/assest/svg/icon_menu'
import React, { memo, useState } from 'react'
import { useEffect } from 'react'
import { WrapperRight } from './style'

const HeaderRight = memo(() => {
  const [showProfile,setProfile] = useState(false)

  useEffect(()=>{
      function windowHandleClick() {
        setProfile(false)
      }
      window.addEventListener('click',windowHandleClick,true) // true 事件捕获
      return ()=>{
        window.removeEventListener('click',windowHandleClick,true)
      }
  },[])



  function profileClickHandle() {
    setProfile(true)
  }
  return (
    <WrapperRight>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
          {
            showProfile && (<div className='panel'><div className="top">
            <div className="item register">注册</div>
            <div className="item login">登录</div>
          </div>
          <div className="bottom">
            <div className="item">出租房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
          </div>
          )}
      </div>
    </WrapperRight>
  )
})

export default HeaderRight
