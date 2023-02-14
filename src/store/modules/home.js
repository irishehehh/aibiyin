import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGoodPriceData,getHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from "@/services/index";


  export const fetchHomeDataActions = createAsyncThunk('fetchData',(payload,{dispatch})=>{
        getGoodPriceData().then((res)=>{
          dispatch(changeGoodPriceInfoAction(res))
        });
        getHighScoreData().then((res)=>{
          dispatch(changeHighScoreInfoAction(res))
        })
        getHomeDiscountData().then((res)=>{
          dispatch(changeDiscountInfoAction(res))
        })
        getHomeHotRecommendData().then((res)=>{
          dispatch(changeHotRecommendInfoAction(res))
        })
        getHomeLongforData().then((res)=>{
          dispatch(changeLongForInfoAction(res))
        })
        getHomePlusData().then((res)=>{
          dispatch(changeHoemPlusInfoAction(res))
        })



  })





const homeSlice  = createSlice({
  name:"home",
  initialState:{
    goodPriceInfo:{},
    highScoreInfo:{},
    disCountInfo:{},
    hotRecommendInfo:{},
    longForInfo:{},
    plusInfo:{}

  },
  reducers:{
    changeGoodPriceInfoAction(state,{payload}) {
     state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state,{payload}) {
      state.highScoreInfo=payload
    },
    changeDiscountInfoAction(state,{payload}) {
      state.disCountInfo = payload
    },
    changeHotRecommendInfoAction(state,{payload}) {
      state.hotRecommendInfo = payload
    },
    changeLongForInfoAction(state,{payload}) {
      state.longForInfo = payload
    },
    changeHoemPlusInfoAction(state,{payload}) {
      state.plusInfo = payload
    }
  }
})
export const {changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongForInfoAction,
  changeHoemPlusInfoAction
  


} =homeSlice.actions 
export default homeSlice.reducer
