import { useEffect, useState } from "react";
import edit from "../assets/edit.svg";
import direction from "../assets/direction.svg";
import { Search as SearchIcon } from "lucide-react";

import jang_young_hyun from "../assets/장영현.jpg";
import ssnowes_na from "../assets/안세원.jpg";
import ye_z04 from "../assets/김예지.jpg";
import _2seo_0 from "../assets/이서영.jpg";
import xllxulm from "../assets/천세연.jpg";
import yessirhhr from "../assets/한혜리.jpg";
import basic from "../assets/기본.jpeg";

type DmListProps = {
  onSelectDm: (id: string) => void;
};

const dummyData = [
  { id: "jang_young_hyun", name: "장영현님", username: "jang_young_hyun", message: "ㅇㅇㅇ", time: "1시간", link: "https://www.instagram.com/jang_young_hyun/", profile: jang_young_hyun },
  { id: "ssnowes_na", name: "세원님", username: "ssnowes_na", message: "ㄱㄱㄱ", time: "1시간", link: "https://www.instagram.com/ssnowes_na/", profile: ssnowes_na },
  { id: "ye_z.04", name: "김예지님", username: "ye_z.04", message: "ㅎㅎㅎ", time: "2시간", link: "https://www.instagram.com/ye_z.04/", profile: ye_z04 },
  { id: "2.seo__0", name: "이서영님", username: "2.seo__0", message: "당신에게 100억을 드리겠습니다", time: "3시간", link: "https://www.instagram.com/2.seo__0/", profile: _2seo_0 },
  { id: "xllxulm", name: "천세연님", username: "xllxulm", message: "나도 화성 간다", time: "5시간", link: "https://www.instagram.com/xllxulm/", profile: xllxulm },
  { id: "sey__onl.n", name: "민세연님", username: "sey__onl.n", message: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 알았다고", time: "1일", link: "https://www.instagram.com/sey__onl.n/", profile: basic },
  { id: "jaye0n5_", name: "차자연님", username: "jaye0n5_", message: "화성에서 보자", time: "2일", link: "https://www.instagram.com/jaye0n5_/", profile: basic },
  { id: "yessirhhr", name: "한혜리님", username: "yessirhhr", message: "응응", time: "3일", link: "https://www.instagram.com/yessirhhr/", profile: yessirhhr },
  { id: "9u_ran9", name: "박규랑님", username: "9u_ran9", message: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 알았다고", time: "1주", link: "https://www.instagram.com/9u_ran9/", profile: basic },
];

// 로컬스토리지에서 최신 메시지 가져오기
function getLatestPreview(dmId: string, fallbackMsg: string, fallbackTime: string) {
  try {
    const raw = localStorage.getItem(`dm:thread:${dmId}`);
    if (!raw) return { text: fallbackMsg, time: fallbackTime };
    const arr: { text: string; time: string }[] = JSON.parse(raw);
    if (!Array.isArray(arr) || arr.length === 0) return { text: fallbackMsg, time: fallbackTime };
    const last = arr[arr.length - 1];
    return { text: last.text ?? fallbackMsg, time: last.time ?? fallbackTime };
  } catch {
    return { text: fallbackMsg, time: fallbackTime };
  }
}

// 상대 시간 (1분, 2분, 1시간, 3일, 1주 식)
function formatRelative(iso: string) {
  const t = new Date(iso).getTime();
  const now = Date.now();
  const diffMs = Math.max(0, now - t);
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 60) return `${diffMin === 0 ? 1 : diffMin}분`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return `${diffHour}시간`;
  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 7) return `${diffDay}일`;
  const diffWeek = Math.floor(diffDay / 7);
  return `${diffWeek}주`;
}

export default function DmList({ onSelectDm }: DmListProps) {
  const [refresh, setRefresh] = useState(0);

  // 새 메시지 전송 시 자동 업데이트
  useEffect(() => {
    const handleUpdate = (e: any) => {
      if (e.detail?.dmId) setRefresh((r) => r + 1);
    };
    window.addEventListener("dm-updated", handleUpdate);
    return () => window.removeEventListener("dm-updated", handleUpdate);
  }, []);

  // 1분마다 자동 갱신
  useEffect(() => {
    const interval = setInterval(() => {
      setRefresh((r) => r + 1);
    }, 60000); // 1분마다 새로 렌더링
    return () => clearInterval(interval);
  }, []);

  // 가장 최근 대화 순으로 정렬
  const sortedData = [...dummyData].sort((a, b) => {
    const aPreview = getLatestPreview(a.id, a.message, a.time);
    const bPreview = getLatestPreview(b.id, b.message, b.time);

    const aTime = Date.parse(aPreview.time) ? new Date(aPreview.time).getTime() : 0;
    const bTime = Date.parse(bPreview.time) ? new Date(bPreview.time).getTime() : 0;

    return bTime - aTime;
  });

  return (
    <aside
      aria-label="DM 사이드바"
      className="flex flex-col bg-white text-black border-r border-gray-200 h-screen"
      style={{ width: 397.111, boxSizing: "border-box" }}
    >
      {/* 상단 고정 영역 */}
      <div className="flex-none">
        <div className="flex items-center justify-between h-14 px-4 mt-7">
          <h2 className="text-xl font-bold ml-1" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            huiwon._.0716
          </h2>
          <img src={direction} alt="Direction" className="w-2.5 h-2.5 mr-40" />
          <img src={edit} alt="Edit" className="w-7 h-7 hover:scale-101 mr-3" />
        </div>

        {/* 검색창 */}
        <div className="flex items-center px-4 mt-3">
          <div className="relative w-full">
            <SearchIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 ml-5"
              size={16}
              strokeWidth={1.8}
            />
            <input
              type="text"
              placeholder="     검색"
              className="w-full bg-[rgb(245,245,245)] rounded-full text-gray-500 py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              style={{ width: 365, height: 40, fontFamily: "Malgun Gothic", fontSize: 16 }}
            />
          </div>
        </div>

        {/* 메시지 타이틀 */}
        <div className="flex items-center justify-between px-5 mt-6 mb-3">
          <h2
            className="text-sm"
            style={{ fontFamily: "Malgun Gothic", fontWeight: "700", fontSize: 16 }}
          >
            메시지
          </h2>
          <button
            className="text-sm text-gray-500 hover:underline"
            style={{ fontFamily: "Malgun Gothic", fontWeight: "400", fontSize: 15 }}
          >
            요청
          </button>
        </div>
      </div>

      {/* 스크롤 가능한 영역 */}
      <div className="flex-1 overflow-y-auto">
        {sortedData.map((dm) => {
          const latest = getLatestPreview(dm.id, dm.message, dm.time);
          return (
            <div
              key={dm.id + refresh}
              onClick={() => onSelectDm(dm.id)}
              className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
            >
              {/* 프로필 (동그라미 + 링크 이동) */}
              {dm.link ? (
                <a
                  href={dm.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-14 h-14 rounded-full overflow-hidden mr-3"
                >
                  <img
                    src={dm.profile}
                    alt={dm.name}
                    className="w-full h-full object-cover"
                  />
                </a>
              ) : (
                <div className="w-14 h-14 rounded-full overflow-hidden mr-3">
                  <img
                    src={dm.profile}
                    alt={dm.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* 텍스트 */}
              <div>
                <p className="font-medium text-sm">{dm.name}</p>
                <p className="text-gray-500 text-sm" style={{ fontSize: 12, fontWeight: 400 }}>
                  {latest.text} · {formatRelative(latest.time)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export { dummyData };
