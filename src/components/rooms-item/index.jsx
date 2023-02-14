import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomWrapper } from './style'


const RoomItems = memo((props) => {
  const {itemData} = props




  return (
    <RoomWrapper>
      <div className='inner'>
        <div className='item-info'>
          <img className='cover' src={itemData.picture_url} alt="" />
          <div className='bg-cover'></div>
          <div className='info'>
            <div className='city'>

          {itemData.city}

            </div>
            <div className='price'>均价 {itemData.price}</div>

          </div>

        </div>

      </div>





    </RoomWrapper>
  )
})

RoomItems.propTypes = {
  itemData:PropTypes.object



}

export default RoomItems