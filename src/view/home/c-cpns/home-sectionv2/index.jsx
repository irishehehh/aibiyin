import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTab from '@/components/section-tab'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'

const HomeSectionV2 = memo((props) => {
      const {infoData} = props

    
    const initalName = Object.keys(infoData.dest_list)[0]
    const [name,setName] = useState(initalName)

    const tabName = infoData.dest_address?.map((item)=>item.name)

    const tabClickHandle = useCallback(function(index,item) {
        setName(item)
    }, [])



  return (
    <SectionV2Wrapper>
      <SectionHeader  title = {infoData.title} subtitle = {infoData.subtitle} />
      <SectionTab tabName = {tabName} tabClick = {tabClickHandle}/>

      <SectionRooms  roomList ={infoData.dest_list?.[name]}  itemWidth = "33.3%"  />  {/**宽高决定图片排列 */}
      <SectionFooter name ={name}/>




    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData:PropTypes.object


}

export default HomeSectionV2