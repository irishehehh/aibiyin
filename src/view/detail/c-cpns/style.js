import styled from 'styled-components'

export const PictureWrapper = styled.div`


position: relative;
>.top{
  display: flex;
  height: 600px;
  background-color: #000;

  .cover{
    opacity: 1 !important;
  }
  .item:hover{
    .cover{
      opacity: 0 !important;
    }
  }

}
.left, .right{
  width: 50%;
  height: 100%;
  .item{
    position: relative;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in;
    }

    .cover{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.2);
      opacity: 0;
      transition: opacity 200ms ease;
    }
    &:hover{
      img{
        transform: scale(1.1);
      }
    }



  }



}


.right{
  display: flex;
  flex-wrap: wrap;
  .item{
    width:50%;
    height: 50%;
    box-sizing: border-box;
    border: 1px solid #000;
  }
}

.show-btn{
  position: absolute;
  z-index: 99;
  bottom: 15px;
  right: 15px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 22px;
  padding: 6px 15px;
  cursor: pointer;
}
`