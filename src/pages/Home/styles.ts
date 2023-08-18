import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"
export const Section = styled.section`
  display: flex;
  width: 50%;
  margin: 0 auto;
  img {
    height: 90%;
    width: 60%;
    padding-left: 4.5rem;
    padding-top: 4.5rem;
  }
 p{
  align-items: center;
  font-size: x-large;
  padding-top: 8rem;
  padding-right: 5rem;
  font-style:italic;
  color: ${colors.white};
  
 }

 @media(max-width: 1160px){
  img{
    width: 80%;
    height: 70%;
  };
}

  @media(max-width: 910px){
  img{
    width: 85%;
    height: 80%;
  }
  p{
    font-size: medium;
  }  
  }

  @media(max-width: 660px){
  img{
    width: 85%;
    height: 50%;
  }
  flex-direction: column;
  p{
    font-size: smaller;
  }  
  }
`


