import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Rating } from '@mui/material' //martial UI 评分组件
import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%",itemClick } = props
  function handleItemClick() {
    if(itemClick) itemClick()
  }

  return (
    <ItemWrapper 
    verifyColor={itemData?.verify_info?.text_color || "#39576a"}
   itemWidth={itemWidth}
   onClick={handleItemClick}
  
    >
    
      <div className='inner'>
        {/* 图片 */}
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='decr'>
          {itemData.verify_info.messages.join(" · ")}
      
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>{itemData.price_format}/晚</div>
        <div className='bottom'>
          <Rating
          value={itemData.star_rating ?? 5}
          size='small'

          readOnly
          precision={0.1}
          sx={{fontSize:"12px",color:"#00848a",marginRight:"-1px"}}

          />
          <span className='count'>{itemData.reviews_count}</span>
          {itemData.bottom_info && <span className='extra'>·{itemData?.bottom_info.content}</span> }


        </div>

       
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem