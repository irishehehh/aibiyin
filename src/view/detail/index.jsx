import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import DetailPicture from './c-cpns/detail-picture'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const {detailInfo} = useSelector((state)=>({
    detailInfo:state.detail.detailInfo
  }))

  return (
    <DetailWrapper>
        <DetailPicture pictureUrls={detailInfo.picture_urls}/>

    </DetailWrapper>
  )
})

export default Detail