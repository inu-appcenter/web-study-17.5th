import type { Message } from "../mock";
import { MoreHorizontal, Heart } from "lucide-react";

export default function ChatBubble({
  msg,
  isMine,
}: {
  msg: Message;
  isMine: boolean;
}) {
  return (
    <div
      className={`w-full flex mb-2 px-3 group ${isMine ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex items-center gap-2 ${isMine ? "flex-row-reverse" : "flex-row"}`}
      >
        {/* 호버 시 나타나는 영역 */}
        <div
          className={`text-white/70 flex transition-opacity duration-200 opacity-0 group-hover:opacity-100 ${isMine ? "" : ""}`}
        >
          <button className="p-1 hover:text-white/90">
            <Heart size={16} />
          </button>
          <button className="p-1 hover:text-white/90">
            <MoreHorizontal size={16} />
          </button>
        </div>

        <div
          className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm relative ${isMine ? "bg-[#3797F0] text-white rounded-br-sm" : "bg-white/10 text-white rounded-bl-sm"}`}
        >
          <div
            className={`mt-1 text-[10px] ${isMine ? "text-white/70" : "text-white/50"}`}
          >
            {new Date(msg.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
