import { useState, useRef } from "react";
import { Plus, Image as ImageIcon, Paperclip, Send } from "lucide-react";

export default function MessageInput({
  onSend,
}: {
  onSend: (text: string) => void;
}) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement | null>(null);

  const handleSend = () => {
    const text = value.trim();
    if (!text) return;
    onSend(text);
    setValue("");
    ref.current?.focus();
  };

  return (
    <div className="p-3 border-t border-white/10 bg-black/90 text-white flex items-center gap-2">
      <button className="p-2 hover:bg-white/10 rounded-full">
        <Plus size={18} />
      </button>

      <button className="p-2 hover:bg-white/10 rounded-full">
        <ImageIcon size={18} />
      </button>

      <button className="p-2 hover:bg-white/10 rounded-full">
        <Paperclip size={18} />
      </button>

      <input
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        placeholder="메시지 입력..."
        className="flex-1 bg-transparent outline-none placeholder:text-white/50 px-3 py-2"
      />

      <button
        onClick={handleSend}
        className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 flex items-center gap-1"
      >
        <Send size={16} />
        <span className="text-sm">보내기</span>
      </button>
    </div>
  );
}
