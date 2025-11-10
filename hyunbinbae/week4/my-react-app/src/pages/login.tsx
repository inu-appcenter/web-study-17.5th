import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`이메일: ${email}\n비밀번호: ${pw}\n(입력만 되게 만들었어요!)`);
  };

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-2xl font-bold mb-6">로그인</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm text(--text-secondary)">
            이메일
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="w-full h-10 rounded-full bg-(--bg-elev-2) px-4 text-sm placeholder:text(--text-secondary)
                       outline-none focus:ring-2 focus:ring-[rgba(29,185,84,.35)] transition-shadow"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-(--text-secondary)">
            비밀번호
          </span>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="••••••••"
            className="w-full h-10 rounded-full bg-(--bg-elev-2) px-4 text-sm placeholder:text-(--text-secondary)
                       outline-none focus:ring-2 focus:ring-[rgba(29,185,84,.35)] transition-shadow"
          />
        </label>

        <button
          type="submit"
          className="w-full h-10 rounded-full bg-(--color-brand) text-black font-semibold hover:brightness-110 transition"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
