import PictureBrowser from '@/base-ui/picture-browser'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { PictureWrapper } from './style'

const DetailPicture = memo((props) => {
  const {pictureUrls} =props
  const [showBrowser,setShowBrowser] = useState(false)


  function showBrowserHandle() {
    setShowBrowser(true)
  }

  function closeBrowserHandle() {
    setShowBrowser(false)
  }

  return (
    <PictureWrapper>
      <div className='top'>
        <div className='left'>
          <div className='item' onClick={showBrowserHandle}>
            <img src={pictureUrls?.[0]} alt="" />
              <div className='cover'></div>
          </div>

        </div>
        <div className='right'>
          {
            pictureUrls?.slice(1,5).map((item,index)=>{
              return (
                <div className='item' key={index}>
                  <img src={item} alt="" />
                    <div className='cover'></div>
                </div>
              )
            })
          }

        </div>


      </div>
      <div className='show-btn' onClick={showBrowserHandle}>查看照片</div>
      {showBrowser && <PictureBrowser pictureUrls={pictureUrls} closeClick={closeBrowserHandle}/> }
     

    </PictureWrapper>
  )
})

DetailPicture.propTypes = {


  pictureUrls:PropTypes.array
}

export default DetailPicture