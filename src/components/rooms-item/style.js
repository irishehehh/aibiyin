import styled from 'styled-components'

export const RoomWrapper = styled.div`

flex-shrink: 0;
width: 20%;

.inner{

  padding: 8px;

  .item-info{
    position: relative;
    overflow: hidden;
    border-radius: 3px;

  }

}

.cover{
  width: 100%;

}
.bg-cover{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 60%;
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
}

.info{
  position: absolute;
  bottom: 0;
  left: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 24px 32px;
  color: #fff;

  .price{
    font-weight: 600;
    font-size: 14px;
  }
  .city{
    font-weight: 600;
    font-size: 18px;

  }
}


`