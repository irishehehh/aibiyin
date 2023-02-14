import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import filterData from '@/assest/data/filter_data.json'
import classNames from 'classnames'
import { FilterWrapper } from './style'

const EntireFilter = memo((props) => {
  const [selectItem,setSelectItem] = useState([])

  function itemClickHandle(item) {
    const newItems  =[...selectItem]
    if(newItems.includes(item)) {
      const index = newItems.findIndex(name=>item===name)
      newItems.splice(index,1)
    }else {
      newItems.push(item)
    }
    setSelectItem(newItems)


  }
  return (
    <FilterWrapper>
        <div className='filter'>
          {
            filterData.map((item)=>{
              return (
                <div 
                key={item}
                className={classNames("item",{active:selectItem.includes(item)})}
                onClick={e=>itemClickHandle(item)}
                >
                  {item}
                  

                </div>
              )
            })
          }

        </div>



    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter