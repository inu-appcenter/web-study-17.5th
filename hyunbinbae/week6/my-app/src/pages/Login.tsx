import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StyledInput from "../components/StyledInput";
import Button from "../components/Button";

interface LoginResponseData {
  userName: string;
  accessToken: string;
  refreshToken: string;
  role: string;
}

interface LoginResponse {
  status: number;
  message: string;
  data: LoginResponseData;
}

const Loginpages = () => {
  const navigate = useNavigate();

  const [studentnumber, setstudentnumber] = useState("");
  const [password, setpassword] = useState("");

  const baseURL = import.meta.env.VITE_BASE_URL;

  const handlelogin = async () => {
    try {
      if (!studentnumber.trim() || !password.trim()) {
        alert("학번과 비밀번호를 입력하세요.");
        return;
      }

      const response = await fetch(`${baseURL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentNumber: studentnumber,
          password,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("서버 응답:", errorText);
        throw new Error("로그인에 실패했습니다.");
      }

      const result: LoginResponse = await response.json();

      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("refreshToken", result.data.refreshToken);
      localStorage.setItem("name", result.data.userName);

      alert("로그인 성공!");
      navigate("/");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const handleDelete = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      alert("로그인 정보가 없습니다.");
      return;
    }

    if (!window.confirm("회원 탈퇴를 하시겠습니까?")) {
      return;
    }

    try {
      // API 문서 기반 DELETE 요청
      const response = await fetch(`${baseURL}/api/v1/auth/delete`, {
        method: "DELETE",
        headers: {
          // 인증 토큰 필요
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("서버 응답:", errorText);
        throw new Error("회원 탈퇴에 실패");
      }

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("name");

      alert("회원 탈퇴가 완료");
      navigate("/login"); // 로그인 페이지로 리디렉션
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] flex flex-col items-center justify-center py-24 px-8 gap-24">
      <div className="w-full max-w-md space-y-6">
        <div>
          <h3 className="w-full text-[16px] leading-[19px] font-bold text-[#00499B] mb-2">
            학번
          </h3>
          <StyledInput
            placeholder="학번을 입력하세요."
            value={studentnumber}
            onChange={(e: any) => setstudentnumber(e.target.value)}
          />
        </div>

        <div>
          <h3 className="w-full text-[16px] leading-[19px] font-bold text-[#00499B] mb-2">
            비밀번호
          </h3>
          <StyledInput
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e: any) => setpassword(e.target.value)}
          />
        </div>

        <div className="w-full">
          <Button ButtonName="로그인" onClick={handlelogin} />
        </div>

        <div className="text-sm leading-5 font-medium text-black">
          계정이 없으신가요?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-[#00499B] cursor-pointer underline-offset-2 hover:underline"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginpages;
