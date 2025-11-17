import { useState } from "react";
import axios from "axios";
import { buildUrl } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function LoginPage() {
  const navigate = useNavigate();

  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!studentNumber || !password) {
      alert("학번과 비밀번호를 입력하세요.");
      return;
    }

    try {
      setLoading(true);

      const url = buildUrl("/api/v1/auth/login");

      const body = {
        studentNumber: Number(studentNumber),
        password,
      };

      const res = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("LOGIN RESPONSE:", res.data);

      const statusCode = Number(res.data.status);

      if (statusCode === 200) {
        // JWT 저장
        localStorage.setItem("accessToken", res.data.data);
        localStorage.setItem("loggedIn", "true");

        alert("로그인 성공!");

        // 장소 페이지로 이동
        navigate("/places");
      } else {
        alert("로그인 실패: " + res.data.message);
      }

    } catch (error) {
      console.error(error);
      alert("로그인 요청 실패.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4" style={{ background: "linear-gradient(to bottom, #FFF7F9 0%, #FFE6EE 100%)" }}>
      <div className="w-full max-w-md border border-white rounded-xl p-6 shadow bg-white">
        <h2 className="text-xl font-bold text-center mb-4" style={{ color: "#595959ff" }}>Sign In</h2>

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
          onClick={handleLogin}
          className="w-full py-3 text-white rounded-lg font-semibold" style={{ backgroundColor: "#FFE6EE", color: "#595959ff" }}
        >
          {loading ? "로그인 중…" : "로그인"}
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="w-full mt-4 text-sm text-gray-600"
        >
          회원가입하러 가기
        </button>
      </div>
    </div>
  );
}
