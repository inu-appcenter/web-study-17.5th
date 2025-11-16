import Button from "../components/Button";
import StyledInput from "../components/StyledInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [studentnumber, setstudentnumber] = useState("");
  const [password, setpassword] = useState("");
  const baseURL = import.meta.env.VITE_BASE_URL;

  const handlesignup = async () => {
    try {
      if (!name.trim() || !studentnumber.trim() || !password.trim()) {
        alert("학번과 비밀번호를 입력하세요.");
        return;
      }

      console.log(studentnumber, password);

      const response = await fetch(`${baseURL}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          studentNumber: studentnumber,
          password,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("서버 응답:", errorText);
        throw new Error("회원가입에 실패했습니다!");
      }

      alert("회원가입 성공!");
      navigate("/login");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] flex flex-col items-center justify-center py-24 px-8">
      <div className="w-full max-w-md space-y-6">
        <div>
          <h3 className="w-full text-[16px] leading-[19px] font-bold text-[#00499B] mb-2">
            이름
          </h3>
          <StyledInput
            placeholder="이름을 입력하세요."
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>

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
          <Button ButtonName="회원가입" onClick={handlesignup} />
        </div>

        <div className="text-sm leading-5 font-medium text-black">
          이미 계정이 있으신가요?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-[#00499B] cursor-pointer underline-offset-2 hover:underline"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
