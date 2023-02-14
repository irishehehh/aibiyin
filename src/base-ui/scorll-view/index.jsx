
import IconArrowLeft from '@/assest/svg/icon-arrow-left'
import IconArrowRight from '@/assest/svg/icon-arrow-right'
import React, { memo, useEffect, useState } from 'react'
import { useRef } from 'react'
import { ScrollWrapper } from './style'

const ScrollView = memo((props) => {
  /** 定义内部的状态 */
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)  //偏移索引
  const totalDistanceRef = useRef() //保存总共距离为下面使用

  /** 组件渲染完毕, 判断是否显示右侧的按钮 */
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance 
    setShowRight(totalDistance > 0)
  }, [props.children])   // 传入第二个参数，每次 render 后比较数组的值没变化，不会在执行 []比较的是每次数值是否变化
  // 传入一个值，这个值变化就执行，render()

  /** 事件处理的逻辑 */
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1: posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]   //拿到元素 <div class="item">成都</div>
    const newOffsetLeft = newEl.offsetLeft
    // console.log(newOffsetLeft)
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex) //记录最新的索引
    // 是否继续显示右侧的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ScrollWrapper>
      { showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
         <IconArrowLeft/>
        </div>
      ) }
      { showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
         <IconArrowRight/>
        </div>
      ) }

      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView