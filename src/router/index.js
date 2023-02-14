import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(()=>import('@/view/home'))
const Entire = React.lazy(()=>import('@/view/entire'))
const Detail = React.lazy(()=>import('@/view/detail'))

const routes = [
{
  path:'/',
  element:<Navigate to='/Home'/>
},
{
  path:'/home',
  element:<Home/>

},
{
  path:'/entire',
  element:<Entire/>

},
{
  path:'/detail',
  element:<Detail/>
}


  
]
export default routes