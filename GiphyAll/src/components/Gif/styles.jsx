import styled from "styled-components";
export const Title = styled.h4`
  color:#cfcfcf;
`
export const ContainerGif = styled.img`
  border: 2px solid rgba(0, 0, 0, 0.089);
  border-radius: 20px;
  width:100%;
  object-fit:cover;
  margin:auto;
  min-width:200px;
  max-height:200px;
`;
export const GeneralContainer = styled.figure`
  display:flex;
  flex-direction:column;
  flex-wrap:nowrap;
  justify-content: space-around;
  box-sizing:border-box;
  padding: 20px;
  border: 1px solid #ffffff45;
  border-radius: 20px;
  text-decoration: 2px underline #cfcfcf;;
  min-width:300px;
  :nth-child(1){
    grid-area: 1 / 1 / 2 / 6;
    width:60%;
    margin:auto;

  }
  :nth-child(2){
    grid-area: 2 / 2 / 3 / 3;
  }
  :nth-child(3){
    grid-area: 2 / 3 / 3 / 4;
    
  }
  :nth-child(4){
    grid-area: 2 / 4 / 3 / 5;
    
  }
  :nth-child(5){
    grid-area: 3 / 2 / 4 / 3;
    
  }
  :nth-child(6){
    grid-area: 3 / 3 / 4 / 4;
    
  }
  :nth-child(7){
    grid-area: 3 / 4 / 4 / 5;
    
  }
  

`;

