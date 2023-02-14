import ScrollView from '@/base-ui/scorll-view'
import RoomItem from '@/components/item-room'
// import RoomItems from '@/components/rooms-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'

const HomeSectionV3 = memo((props) => {

  const {infoData} = props
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map((item)=>{
              return (
               <RoomItem key={item.id} itemData={item} itemWidth="20%"/>
                )
            })
          }

        </ScrollView>


        </div>
        <SectionFooter name="plus"/>


    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData:PropTypes.object
}

export default HomeSectionV3