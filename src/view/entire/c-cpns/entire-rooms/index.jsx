import RoomItem from '@/components/item-room'

import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const { roomList, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    isLoading: state.entire.isLoading
  }), shallowEqual)
  const navigate = useNavigate()
  function handleItemClick(item) {
    navigate('/detail')
  }

  return (
    <RoomsWrapper>
    <div className='list'>
    {
      roomList.map((item,index)=>{
        return (<RoomItem
        itemWidth="20%"
        itemData={item}
        key={item._id}
        itemClick={e=>handleItemClick(item)}
        />)
      })
    }
      </div>

      {isLoading && <div className='cover'></div>}



    </RoomsWrapper>
  )
})



export default EntireRooms