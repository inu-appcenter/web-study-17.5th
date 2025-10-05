import styled from "styled-components";
import profile from "./assets/image.png"
function App() {
    return(
      <Area>
        <Main>
          <img className="img" src={profile}/>
          {/* 고양이 하얀색으로 만들껄... 그래도 귀엽죠..? */}
          <InfoPackage>
            <Name>전이준</Name>
            <Info>010-6274-9032</Info>
            <Info>yijoon@inu.ac.kr</Info>
          </InfoPackage>
          
        </Main>
        <Sub>
        <a href="https://velog.io/@nyangtteok/posts">Velog</a>|
        <a href="https://github.com/nyangtteok">Github</a>|
        <a href="https://www.instagram.com/i_ejun0?igsh=b3RlcWViaTYweTZo">인스타</a>
        </Sub>
      </Area>
    )

    
}

export default App

const Area = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80vw;
  height: 80vh;
  background-color: #1C1C1C;
  .img{
    width: 55%;
    height: auto;
  }
`
const Main = styled.div`
flex-direction: row;
  display: flex;
  align-items: top;
  gap: 150px;

`
const Name = styled.div`
  padding-top : 50px;
  font-size: 150px;
`

const Sub = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin : auto;
  font-size: 40px;
`
const Info = styled.div`
  font-size: 30px;
`
const InfoPackage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`