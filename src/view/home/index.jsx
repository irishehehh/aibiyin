import { fetchHomeDataActions } from '@/store/modules/home'
import React, { memo, useEffect } from 'react' 
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/homeSectionV1'
import { WrapperHome } from './style'
import { isEmptyO } from '@/utils'
import HomeSectionV2 from './c-cpns/home-sectionv2'
import HomeLongFor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-sectionv3'



const Home = memo(() => {

  const {goodPriceInfo,highScoreInfo,disCountInfo,hotRecommendInfo,longForInfo,plusInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    disCountInfo:state.home.disCountInfo,
    hotRecommendInfo:state.home.hotRecommendInfo,
    longForInfo:state.home.longForInfo,
    plusInfo:state.home.plusInfo
    
  }),shallowEqual)
  const disPatch = useDispatch()
  useEffect(()=>{
    disPatch(fetchHomeDataActions())
  
  },[disPatch])

  return (
    <WrapperHome>
      <HomeBanner/>
      <div className='content'>
        {isEmptyO(disCountInfo) && <HomeSectionV2 infoData={disCountInfo}/> }

     {isEmptyO(goodPriceInfo) &&    <HomeSectionV1 infoData={goodPriceInfo}/>}
     {isEmptyO(longForInfo) && <HomeLongFor infoData={longForInfo}/>}
     {isEmptyO(highScoreInfo) &&    <HomeSectionV1  infoData={highScoreInfo}/>}
  
     {isEmptyO(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo}/>}
     {isEmptyO(plusInfo)&& <HomeSectionV3 infoData={plusInfo}/> }




      </div>


    </WrapperHome>
  )
})

export default Home