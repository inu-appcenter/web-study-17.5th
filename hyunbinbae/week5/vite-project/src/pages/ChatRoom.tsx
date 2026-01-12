import { useParams } from "react-router-dom";
import ChatHeader from "../components/ChatHeader";
import ChatBubble from "../components/ChatBubble";
import MessageInput from "../components/MessageInput";
import { CHATS, ME, USERS } from "../mock";
import { useChatContext } from "../context/ChatContext";

export default function ChatRoom() {
  const { chatId } = useParams();

  const { sendMessage, getChatMessages } = useChatContext();

  if (!chatId) return null;

  const messages = getChatMessages(chatId);

  // currentChat 찾기
  const currentChat = CHATS.find((chat) => chat.id === chatId);
  if (!currentChat) return null;

  // friendId 찾기
  const friendId = currentChat.participantIds.find(
    (participantId) => participantId !== ME.id
  );
  if (!friendId) return null;

  const friend = USERS[friendId];

  // onSend 함수는 useChatContext의 sendMessage를 사용
  const onSend = (text: string) => {
    sendMessage(chatId, text);
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
