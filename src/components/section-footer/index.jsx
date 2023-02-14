import IconMoreArrow from '@/assest/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const {name} = props
  const navigate = useNavigate()
    let showMessage = '显示全部'
    if(name){
      showMessage=`显示更多${name}房源`
    }
    
  function infoClickHandle() {
    navigate('/entire')
  }
  
  
  return (
    <FooterWrapper color={name? "#00848a":"#000"}>
   <div className='info' onClick={infoClickHandle}>
     <span className='text'>{showMessage}
     <IconMoreArrow className="icon"/>
     </span>

   </div>

    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name:PropTypes.string
}

export default SectionFooter