import styled from "styled-components";


export const ItemWrapper = styled.div`
 flex-shrink: 0; 

box-sizing: border-box;

width:${props=>props.itemWidth};
 padding: 8px; 

 .inner{
  width: 100%;

} 
.cover{
  position: relative;
  box-sizing: border-box;
  border-radius: 3px;

  padding: 66.66% 8px 0;
  overflow: hidden;
  img{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

  }




}  
.decr{
    margin: 10px 0 5px;
    font-weight: 700;
    font-size: 15px;
    color: ${props=>props.verifyColor};
    

  }
  .name{
    font-weight: 700;
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

  }
  .price{
    margin: 8px 0;
  }

  .bottom{
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color:${props=>props.theme.text.Primary};

    .count{
      margin: 0 2px 0 4px;
    }
    .MuiRating-decimal{
      margin-right: -2px;
    }

  }


`