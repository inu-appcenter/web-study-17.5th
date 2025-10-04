// src/App.tsx
import styled from "styled-components";
import profile from "./assets/profile.jpg";

export default function App() {
  return (
    <Container>
      <Card>
        <FirstArea>
          <ProfileImg src={profile} alt="profile" />
          <Name>배현빈</Name>
          <SubName>Bae Hyunbin</SubName>
        </FirstArea>
        <SecondArea>
          <Info>🎓 INU, information and communication engineering</Info>
          <Info>💻 Appcenter 17.5th Web part</Info>
          <Info>📧 bhb684@gmail.com</Info>
          <Info>
            👨‍💻
            <a
              href="https://github.com/boragu"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/boragu
            </a>
          </Info>
        </SecondArea>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: #2b2320;
`;

const Card = styled.div`
  display: flex;
  /* flex-direction: row; flex 디폴트는 row*/
  background: #111;
  border-radius: 20px;
  padding: 40px;
  gap: 32px;
  width: 850px;
  min-height: 260px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
    transition: all 0.3s ease; // 부드러운 애니메이션 효과
  }
  // 이건 그냥 찾아보면서.. 그림자는 gpt가 검정색으로
`;

const FirstArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  text-align: center;
  padding-right: 24px;
  margin-left: 60px;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 32px; //보통 4나 8배수
  margin-bottom: 10px;
  border: 3px solid #42322c;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 2px 0;
  line-height: 1.2; // 줄 간격
`;

const SubName = styled.div`
  font-size: 15px;
  color: #aaa;
  margin-top: 2px; // 한글과 영어 이름 간격
  line-height: 1.3;
`;

const SecondArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 48px;
`;

const Info = styled.div`
  margin: 8px 0;
  padding-left: 8px; // 텍스트 시작 부분
  font-size: 16px;
  color: #ffffff;
  line-height: 1.6;
`;
