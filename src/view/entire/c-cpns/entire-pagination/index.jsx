import { fetchEntireDataAction } from '@/store/modules/entire/actionCreators'
import { Pagination } from '@mui/material'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PaginationWrapper } from './style'

const EntirePagination = memo((props) => {
  const {currentPage,totalCount} =useSelector((state)=>({
    currentPage:state.entire.currentPage,
    totalCount:state.entire.totalCount
  }))
  const count = Math.ceil(totalCount/20)
  const start = currentPage * 20 +1;
  const end =(currentPage+1) * 20
    const dispatch = useDispatch()
  function pageChangeHandle(event,newPage) {
    window.scrollTo(0,0)
    dispatch(fetchEntireDataAction(newPage-1))

  }

  return (
    <PaginationWrapper>
        <div className='page-info'>
          <Pagination count={count} onChange={pageChangeHandle}/>
          <div className='info'>
            第{start}-{end}个房源,共超过{totalCount}个
          </div>
        </div>


    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination