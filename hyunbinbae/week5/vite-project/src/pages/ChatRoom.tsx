import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ChatHeader from "../components/ChatHeader";
import ChatBubble from "../components/ChatBubble";
import MessageInput from "../components/MessageInput";
import { CHATS, INITIAL_MESSAGES, ME, USERS } from "../mock";
import type { Message } from "../mock";

export default function ChatRoom() {
  const { chatId } = useParams(); // URL에서 /dm/:chatId 값 추출
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!chatId) return;
    setMessages(INITIAL_MESSAGES[chatId] ?? []);
  }, [chatId]);

  const friendId = useMemo(() => {
    return CHATS.find((c) => c.id === chatId)?.participantIds.find(
      (id) => id !== ME.id
    );
  }, [chatId]);

  if (!friendId) return null;
  const friend = USERS[friendId];

  const onSend = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        chatId: chatId!,
        senderId: ME.id,
        text,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader friend={friend} />

      <div className="flex-1 p-3 overflow-y-auto bg-[#121212]">
        {messages.length === 0 && (
          <div className="h-full grid place-items-center text-white/60">
            대화를 시작해 보세요
          </div>
        )}

        {messages.map((m) => (
          <ChatBubble key={m.id} msg={m} isMine={m.senderId === ME.id} />
        ))}
      </div>

      <MessageInput onSend={onSend} />
    </div>
  );
}
