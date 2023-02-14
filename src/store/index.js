import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import DetailReudcer from './modules/detail'

const store = configureStore({
  reducer:{
    home:homeReducer,
    entire:entireReducer,
    detail:DetailReudcer


  }
})

export default store