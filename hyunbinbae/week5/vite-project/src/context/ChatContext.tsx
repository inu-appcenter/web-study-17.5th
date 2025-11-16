import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import type { Message } from "../mock";
import { INITIAL_MESSAGES, ME } from "../mock";

type MessageHistory = Record<string, Message[]>;

interface ChatContextType {
  messages: MessageHistory;
  sendMessage: (chatId: string, text: string) => void;
  getChatMessages: (chatId: string) => Message[];
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  // INITIAL_MESSAGES를 초기 상태로 사용
  const [messages, setMessages] = useState<MessageHistory>(INITIAL_MESSAGES);

  // 특정 채팅방의 메시지를 가져오는 함수
  const getChatMessages = useCallback(
    (chatId: string): Message[] => {
      return messages[chatId] || [];
    },
    [messages]
  );

  // 메시지를 전송하고 전역 상태를 업데이트
  const sendMessage = useCallback((chatId: string, text: string) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      chatId: chatId,
      senderId: ME.id,
      text,
      createdAt: new Date().toISOString(),
    };

    setMessages((prevMessages) => {
      const currentMessages = prevMessages[chatId] || [];
      return {
        ...prevMessages,
        [chatId]: [...currentMessages, newMessage],
      };
    });
  }, []);

  const value = {
    messages,
    sendMessage,
    getChatMessages,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
