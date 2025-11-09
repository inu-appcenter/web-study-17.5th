import type { Message } from "../mock";

export default function ChatBubble({
  msg,
  isMine,
}: {
  msg: Message;
  isMine: boolean;
}) {
  return (
    <div
      className={`w-full flex mb-2 px-3 ${isMine ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-3 py-2 text-sm ${isMine ? "bg-[#3797F0] text-white rounded-br-sm" : "bg-white/10 text-white rounded-bl-sm"}`}
      >
        {msg.text && <p className="">{msg.text}</p>}
        {msg.imageUrl && <img src={msg.imageUrl} className="rounded-xl mt-1" />}
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
  );
}
