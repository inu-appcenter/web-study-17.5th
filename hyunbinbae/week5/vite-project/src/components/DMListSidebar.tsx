import { useState } from "react";
import Avatar from "./Avatar";
import { CHATS, ME, USERS, formatTimeAgo } from "../mock";
import { useLocation, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function DMListSidebar() {
  const [q, setQ] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const chats = CHATS;

  const filtered = chats.filter((c) => {
    const friendId = c.participantIds.find((id) => id !== ME.id);
    if (!friendId) return null;
    const friend = USERS[friendId];
    const key = (friend.name + friend.handle).toLowerCase();
    return key.includes(q.toLowerCase());
  });

  return (
    <aside className="w-80 shrink-0 border-r border-white/10 bg-black/90 text-white hidden md:flex md:flex-col">
      <div className="px-4 py-3 flex items-center gap-2 border-b border-white/10">
        <Avatar src={ME.avatar} size={28} />
        <div className="font-semibold">{ME.handle}</div>
      </div>

      <div className="px-3 py-2">
        <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
          <Search size={18} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="검색"
            className="w-full bg-transparent outline-none placeholder:text-white/60"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filtered.map((c) => {
          const friendId = c.participantIds.find((id) => id !== ME.id)!;
          const friend = USERS[friendId];
          const isActive = location.pathname.endsWith(`/dm/${c.id}`);
          return (
            <button
              key={c.id}
              onClick={() => navigate(`/dm/${c.id}`)}
              className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 ${isActive ? "bg-white/10" : ""}`}
            >
              <Avatar src={friend.avatar} />
              <div className="text-left">
                <div className="text-sm font-semibold leading-tight">
                  {friend.name}
                </div>
                <div className="text-xs text-white/60">
                  {friend.handle} · {formatTimeAgo(c.lastMessageAt)}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
