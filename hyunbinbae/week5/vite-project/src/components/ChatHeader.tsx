import Avatar from "./Avatar";
import { Info, Phone, Video } from "lucide-react";
import type { User } from "../mock";

export default function ChatHeader({ friend }: { friend: User }) {
  return (
    <div className="h-14 flex items-center justify-between px-4 border-b border-white/10 bg-black/90 text-white sticky top-0">
      <div className="flex items-center gap-3">
        <Avatar src={friend.avatar} />
        <div>
          <div className="font-semibold leading-tight">{friend.name}</div>
          <div className="text-xs text-white/60">{friend.handle}</div>
        </div>
      </div>
      <div className="flex items-center gap-4 text-white/80">
        <Phone size={18} className="cursor-pointer" />
        <Video size={20} className="cursor-pointer" />
        <Info size={18} className="cursor-pointer" />
      </div>
    </div>
  );
}
