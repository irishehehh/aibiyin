import styled from 'styled-components'

export const FooterWrapper  =styled.div`

display: flex;
margin-top: 10px;

.info{
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
  color: ${props=>props.color};

  &:hover{
    text-decoration: underline;

  }
  .text{
    
    margin-right: 6px;
   


  

  }

}



`