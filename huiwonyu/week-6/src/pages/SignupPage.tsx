import { useState } from "react";
import axios from "axios";
import { buildUrl } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !studentNumber || !password) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    try {
      setLoading(true);

      const url = buildUrl("api/v1/auth/signup");

      const body = {
        name,
        studentNumber: Number(studentNumber),
        password,
        role: "USER",
      };

      const res = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data.status === 0) {
        alert("회원가입 성공! 로그인 페이지로 이동합니다.");
        navigate("/login");
      } else {
        alert("회원가입 실패: " + res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("회원가입 요청 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4" style={{ background: "linear-gradient(to bottom, #FFF7F9 0%, #FFE6EE 100%)" }}>
      <div className="w-full max-w-md border border-white rounded-xl p-6 shadow bg-white">
        <h2 className="text-xl font-bold text-center mb-4" style={{ color: "#595959ff" }}>Sign Up</h2>

        <input
          className="w-full border border-gray-300 px-4 py-3 mb-3 bg-white shadow-sm placeholder-gray-400 focus:outline-none"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 px-4 py-3 mb-3 bg-white shadow-sm placeholder-gray-400 focus:outline-none"
          placeholder="학번"
          value={studentNumber}
          onChange={(e) => setStudentNumber(e.target.value)}
        />

        <div className="relative mb-5">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border border-gray-300 px-4 py-3 bg-white shadow-sm placeholder-gray-400 focus:outline-none"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* 눈 아이콘 */}
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <EyeIcon className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>

        <button
          disabled={loading}
          onClick={handleSignup}
          className="w-full py-3 text-white rounded-lg font-semibold" style={{ backgroundColor: "#FFE6EE", color: "#595959ff" }}
        >
          {loading ? "가입 중…" : "회원가입"}
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full mt-4 text-sm text-gray-600"
        >
          로그인하러 가기
        </button>
      </div>
    </div>
  );
}
