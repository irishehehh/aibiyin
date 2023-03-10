import styled from 'styled-components'

export const WrapperRight = styled.div`
display: flex;
flex: 1;
justify-content: flex-end;
align-items: center;
font-weight: 600;
color: ${props=>props.theme.text.primaryColor};
.btns{
  display: flex;
  box-sizing: content-box;
}
.btn{
  
  height: 18px;
  line-height: 18px;
  display: flex;
  padding: 12px 16px;
  border-radius: 24px;
  cursor: pointer;
  box-sizing: content-box;

  &:hover{
    background-color: #f5f5f5;

  }

}
.profile{
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #ccc;
  width: 77px;
  height: 42px;
  margin-right: 24px;
  border-radius: 22px;
  cursor: pointer;
  background-color: #fff;
  color: ${props=>props.theme.text.primaryColor};
  ${props=>props.theme.mixin.boxShadow}
    .panel{
      position: absolute;
      top: 54px;
      right: 0;

      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);

      .top,.bottom{
        padding: 10px 0;

      }
      .item{
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        &:hover{
          background-color: #f5f5f5;
        }
      }
      .top{
        border-bottom: 1px solid #ddd;
      }

    }


}


`