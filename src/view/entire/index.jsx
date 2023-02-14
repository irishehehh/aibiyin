import { fetchEntireDataAction } from '@/store/modules/entire/actionCreators'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { WrapperEntire } from './style'

const Entire = memo(() => {
  const disPatch = useDispatch()
  useEffect(()=>{
      disPatch(fetchEntireDataAction())
  },[disPatch])
  return (
    // 第一个是样式
    <WrapperEntire> 
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>



    </WrapperEntire>
  )
})

export default Entire