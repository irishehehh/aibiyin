import ScrollView from '@/base-ui/scorll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabWrapper } from './style'

const SectionTab = memo((props) => {
  const {tabName,tabClick} = props
  const [currentIndex,setCurrentIndex] = useState(0)


  function itemClickHandle(index,item) {
    setCurrentIndex(index)
    tabClick(index,item)
  }


  return (
    <TabWrapper>
      <ScrollView>
       {
         tabName.map((item,index)=>{
           return (
             <div 
             key={index}
             className={classNames("item",{active:index===currentIndex})}
             onClick={e=>itemClickHandle(index,item)}
             >


               {item}

             </div>
           )
         })
       }
       </ScrollView>



    </TabWrapper>
  )
})

SectionTab.propTypes = {

tabName:PropTypes.array


}

export default SectionTab