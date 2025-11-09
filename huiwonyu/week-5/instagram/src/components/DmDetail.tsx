import { dummyData } from "./DmList";
import call from "../assets/call.svg";
import video from "../assets/video.svg";
import information from "../assets/information.svg";
import smile from "../assets/smile.svg";
import record from "../assets/record.svg";
import gallery from "../assets/gallery.svg";
import post from "../assets/post.svg";
import more from "../assets/more.svg";
import return_icon from "../assets/return.svg";
import smile_hover from "../assets/smile.svg";

import { useState, useEffect, useRef, useMemo } from "react";

const defaultMessagesByUser: Record<
  string,
  { id: number; sender: "me" | "other"; text: string; time: string }[]
> = {};

type Message = {
  id: number;
  sender: "me" | "other";
  text: string;
  time: string;
};

function formatTimestamp(timeStr: string) {
  const date = new Date(timeStr);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const day = days[date.getDay()];
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours < 12 ? "오전" : "오후";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `(${day}) ${period} ${hour12}:${minutes}`;
}

type DmDetailProps = {
  dmId: string;
};

export default function DmDetail({ dmId }: DmDetailProps) {
  const user = dummyData.find((dm) => dm.id === dmId);
  const STORAGE_KEY = useMemo(() => `dm:thread:${dmId}`, [dmId]);

  const loadInitial = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch { }
    return defaultMessagesByUser[dmId] ?? [];
  };

  const [chatMessages, setChatMessages] = useState(loadInitial);
  const [inputText, setInputText] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => setChatMessages(loadInitial()), [dmId]);

  useEffect(() => chatRef.current?.scrollTo(0, chatRef.current.scrollHeight), [chatMessages]);

  // 리스트 업데이트
  const persist = (arr: typeof chatMessages) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
      window.dispatchEvent(new CustomEvent("dm-updated", { detail: { dmId } }));
    } catch { }
  };

  // 메시지 전송
  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;
    const newMessage = { id: Date.now(), sender: "me" as const, text: inputText, time: new Date().toISOString() };
    const next = [...chatMessages, newMessage];
    setChatMessages(next);
    persist(next);
    setInputText("");
    await new Promise((resolve) => setTimeout(resolve, 200));
  };

  // Enter키로도 전송되도록
  const onKeyDownInput: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 시간 표시 간격 (10분 이상 차이 나면 표시되도록 함)
  const shouldShowTimestamp = (curr: Message, prev?: Message) => {
    if (!prev) return true;
    const diff = (new Date(curr.time).getTime() - new Date(prev.time).getTime()) / 60000;
    return diff >= 10;
  };

  const profileHref = user?.link && user.link.trim() !== "" ? user.link : undefined;

  useEffect(() => {
    const interval = setInterval(() => {
      setChatMessages((msgs: Message[]) => [...msgs]);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      {/* 헤더 */}
      <div
        className="flex-none flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white"
        style={{ height: "76.89px" }}
      >
        <div className="flex items-center gap-3">
          {profileHref ? (
            <a
              href={profileHref}
              target="_blank"
              rel="noreferrer"
              title={user?.username}
              className="block w-11 h-11 rounded-full overflow-hidden"
            >
              <img
                src={user?.profile}
                alt={user?.name}
                className="w-full h-full object-cover"
              />
            </a>
          ) : (
            <div className="w-11 h-11 rounded-full overflow-hidden">
              <img
                src={user?.profile}
                alt={user?.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex flex-col justify-center leading-tight">
            <h2
              className="font-bold text-sm"
              style={{ fontFamily: "Malgun Gothic", fontWeight: 600, fontSize: 16 }}
            >
              {user?.name}
            </h2>
            <p
              className="text-xs text-gray-500"
              style={{ fontFamily: "Malgun Gothic", fontWeight: 400, fontSize: 12 }}
            >
              {user?.username}
            </p>
          </div>
        </div>

        <div className="flex gap-4 text-gray-600">
          <img src={call} alt="음성 통화" className="w-6 h-6 mt-1" />
          <img src={video} alt="영상 통화" className="w-6 h-6 mt-1" />
          <img src={information} alt="대화 정보" className="w-8 h-8" />
        </div>
      </div>

      {/* 메시지 영역 */}
      <div ref={chatRef} className="flex-1 overflow-y-auto px-6 py-3 space-y-1 bg-white">
        {chatMessages.map((msg: Message, index: number) => {
          const prev = chatMessages[index - 1];
          const showTime = shouldShowTimestamp(msg, prev);

          return (
            <div key={msg.id} className="flex flex-col items-center">
              {showTime && (
                <p
                  className="text-gray-500 mb-2"
                  style={{ fontFamily: "Malgun Gothic", fontSize: 12, fontWeight: 500 }}
                >
                  {formatTimestamp(msg.time)}
                </p>
              )}

              {msg.sender === "me" ? (
                <div className="flex w-full justify-end items-center mb-1 group">
                  <div className="flex gap-2 items-center mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <img src={more} alt="more" className="w-4 h-4 cursor-pointer" />
                    <img src={return_icon} alt="return" className="w-4 h-4 cursor-pointer" />
                    <img src={smile_hover} alt="smile" className="w-4 h-4 cursor-pointer" />
                  </div>

                  {/* 내 말풍선 */}
                  <div
                    className="rounded-3xl"
                    style={{
                      backgroundColor: "rgb(55,151,240)",
                      color: "white",
                      padding: "6px 10px",
                      fontFamily: "Malgun Gothic",
                      fontSize: 15,
                      maxWidth: "calc(100% - 101px)",
                      wordBreak: "break-word",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div className="flex w-full justify-start items-end gap-2 mb-1">
                  {profileHref ? (
                    <a
                      href={profileHref}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-7 h-7 rounded-full bg-gray-300"
                      title={user?.username}
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gray-300" />
                  )}

                  <div
                    className="rounded-3xl"
                    style={{
                      backgroundColor: "rgb(239,239,239)",
                      color: "black",
                      padding: "6px 10px",
                      fontFamily: "Malgun Gothic",
                      fontSize: 15,
                      maxWidth: "calc(100% - 101px)",
                      wordBreak: "break-word",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 입력창 */}
      <div className="flex-none px-4 py-3 bg-white">
        <div className="relative w-full">
          <img
            src={smile}
            alt="이모티콘 선택"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer ml-2"
          />
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={onKeyDownInput}
            placeholder="메시지 입력..."
            className="w-full rounded-full border border-gray-300 px-10 pr-28 py-2 text-sm focus:outline-none text-black placeholder:text-gray-400"
            style={{ fontFamily: "Malgun Gothic", fontSize: 15, height: "44px", textIndent: "12px" }}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-4 mr-3">
            {inputText.trim() === "" ? (
              <>
                <img src={record} alt="음성 클립" className="w-6 h-6 cursor-pointer" />
                <img src={gallery} alt="사진 또는 동영상 추가" className="w-5.5 h-5.5 cursor-pointer" />
                <img src={post} alt="GIF 또는 스티커 선택" className="w-5.5 h-5.5 cursor-pointer" />
              </>
            ) : (
              <button
                onClick={handleSendMessage}
                style={{ fontFamily: "Segoe UI Semibold", fontSize: 14, color: "rgb(49,67,227)" }}
              >
                Send
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}