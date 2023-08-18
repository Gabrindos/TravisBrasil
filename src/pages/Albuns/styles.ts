import styled from 'styled-components'

import { colors } from "../../styles/GlobalStyle"
export const Section = styled.section`
  display: flex;
  width: 50%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  img {
    height:50%;
    width: 43%; 
  }

  p{
    padding-left: 1rem;
    font-size: xx-large;
    color: ${colors.white};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  @media (max-width: 810px){
    flex-direction: column;
    p{
      font-size: x-large;
    } 
    img{
      width: 80%;
    }
  }
  @media (max-width: 650px){
    flex-direction: column;
    p{
      font-size: x-large;
    } 
    img{
      height: 40%;
      width: 70%;
    }
  }
`
