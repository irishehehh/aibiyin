import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '@/components/item-room'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props

  return (
    <RoomsWrapper>
      {
        roomList.slice(0, 8)?.map(item => {         //10条数据切割8条 ,?. 可选链，第一次可能为空
          return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id}/>
        })
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms