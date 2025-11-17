import { useState } from "react";
import "./App.css";
import { List, SignUp, Login, Delete } from "./api/Api";

function App() {
  // 회원가입에 필요
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");

  // 로그인에 필요
  const [loginStudentNumber, setLoginStudentNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //정보 플로팅에 필요할듯...?
  //리스트 겟 파트
  interface SpotList {
    id: number;
    name: string;
    locationDetail: string;
    description: string;
    photo: string;
    sleepingAllowed: boolean;
    eatingAllowed: boolean;
    hasPowerOutlet: boolean;
    studyAllowed: boolean;
    entertainment: boolean;
    reservationRequired: boolean;
    placeType: string;
  }

  const [spotList, setSpotList] = useState<SpotList[]>([]);
  //리스트 겟 함수
  const btnList = async () => {
    try {
      const response = await List();
      setSpotList(response.data.data.content);
    } catch (e) {
      console.error(e);
    }
  };
  //회원가입 포스트 함수
  const btnSignUp = async () => {
    if (!name.trim() || !studentNumber.trim() || !password.trim()) {
      alert("빈칸 없이 입력해주세요.");
      return;
    }
    try {
      const response = await SignUp({ name, studentNumber, password });
      if (response.data.status !== 200) {
        throw new Error("회원가입에 실패했습니다.");
      }
      alert("회원가입 성공!");
    } catch (error) {
      alert((error as Error).message);
    }
  };
  //로그인 포스트 함수
  const btnLogin = async () => {
    if (!loginStudentNumber.trim() || !loginPassword.trim()) {
      alert("빈칸 없이 입력해주세요.");
      return;
    }
    try {
      const response = await Login({
        studentNumber: loginStudentNumber,
        password: loginPassword,
      });
      console.log(loginStudentNumber, loginPassword);
      if (response.data.status !== 200) {
        throw new Error("로그인에 실패했습니다.");
      }
      alert("로그인 성공!");
      localStorage.setItem("Token", response.data.data);
    } catch (error) {
      alert((error as Error).message);
    }
  };
  //계정 딜리트 함수
  const btnDelete = async () => {
    try {
      const response = await Delete();
      if (response.status !== 204) {
        throw new Error("탈퇴에 실패했습니다.");
      }
      alert("탈퇴 성공! 잘가요 ㅠ.ㅠ");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <button onClick={btnList}>리스트 호출</button>
      <br />
      <button onClick={btnSignUp}>회원가입</button>
      <input
        placeholder={"이름을 입력하세요."}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        placeholder={"학번을 입력하세요."}
        value={studentNumber}
        onChange={(e) => setStudentNumber(e.target.value)}
      ></input>
      <input
        placeholder={"비밀번호를 입력하세요."}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button onClick={btnLogin}>로그인</button>
      <input
        placeholder={"학번을 입력하세요."}
        value={loginStudentNumber}
        onChange={(e) => setLoginStudentNumber(e.target.value)}
      ></input>
      <input
        placeholder={"비밀번호를 입력하세요."}
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      ></input>
      <br />
      <button onClick={btnDelete}>삭제기능</button>
      <div className="frameBox">
        {spotList.map((spot) => (
          <p key={spot.id}>
            {spot.id}
            <br />
            {spot.name}
            <br />
            {spot.locationDetail}
            <br />
            {spot.description}
            <br />
            <img className="spotImg" src={spot.photo}></img>
            <br />
            {spot.sleepingAllowed ? "자도됨" : "자는건 안됨"}
            <br />
            {spot.eatingAllowed ? "먹어도됨" : "먹는건 안됨"}
            <br />
            {spot.hasPowerOutlet ? "충전가능" : "충전못함"}
            <br />
            {spot.studyAllowed ? "공부해도됨" : "공부는 못할듯"}
            <br />
            {spot.entertainment ? "놀아도됨" : "노는건 좀 그래"}
            <br />
            {spot.reservationRequired
              ? "예약해야됨 : 바람직한 인천대생이라면..."
              : "예약 안해도 됨"}
            <br />
            {spot.placeType === "INDOOR" ? "실내임" : "밖임"}
            <br />
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
