export type User = {
  id: string;
  handle: string;
  name: string;
  avatar: string;
};

export type Message = {
  id: string;
  chatId: string;
  senderId: string;
  text?: string;
  imageUrl?: string;
  createdAt: string;
};

export type Chat = {
  id: string;
  participantIds: string[]; // me + friend
  lastMessageAt: string;
};

export const ME: User = {
  id: "me",
  handle: "hyun_1227",
  name: "현빈",
  avatar:
    "https://i.pinimg.com/736x/60/ff/b7/60ffb7650d4ab8e7fa1e790831dda882.jpg",
};

export const USERS: Record<string, User> = {
  me: ME,
  u1: {
    id: "u1",
    handle: "user1",
    name: "유저1",
    avatar:
      "https://i.pinimg.com/736x/fe/62/56/fe62563a5aa5fd0cf76840c153f149e6.jpg",
  },
  u2: {
    id: "u2",
    handle: "user2",
    name: "유저2",
    avatar:
      "https://i.pinimg.com/736x/81/4e/9d/814e9d4502f9a2487f602cfc5ebf1696.jpg",
  },
  u3: {
    id: "u3",
    handle: "user3",
    name: "유저3",
    avatar:
      "https://i.pinimg.com/736x/9d/ba/3c/9dba3c6426caae6b46e7bf7d5b63a337.jpg",
  },
  u4: {
    id: "u4",
    handle: "user4",
    name: "유저4",
    avatar:
      "https://i.pinimg.com/736x/d6/ad/5b/d6ad5bc40f227bb0b2059f8a19ac9922.jpg",
  },
};

const minutesAgo = (m: number) =>
  new Date(Date.now() - m * 60_000).toISOString();

export const CHATS: Chat[] = [
  {
    id: "c1",
    participantIds: ["me", "u1"],
    lastMessageAt: minutesAgo(50), // minutesAgo 헬퍼 함수 사용
  },
  {
    id: "c2",
    participantIds: ["me", "u2"],
    lastMessageAt: minutesAgo(60), // minutesAgo 헬퍼 함수 사용
  },
  {
    id: "c3",
    participantIds: ["me", "u3"],
    lastMessageAt: minutesAgo(120), // minutesAgo 헬퍼 함수 사용
  },
  {
    id: "c4",
    participantIds: ["me", "u4"],
    lastMessageAt: minutesAgo(180), // minutesAgo 헬퍼 함수 사용
  },
];

export const INITIAL_MESSAGES: Record<string, Message[]> = {
  c1: [
    {
      id: "m1",
      chatId: "c1",
      senderId: "u1",
      text: "Test Text 메세지입니당",
      createdAt: minutesAgo(50), // minutesAgo 헬퍼 함수 사용
    },
    {
      id: "m2",
      chatId: "c1",
      senderId: "me",
      text: "Hi:)",
      createdAt: minutesAgo(40), // minutesAgo 헬퍼 함수 사용
    },
  ],
  c2: [
    {
      id: "m3",
      chatId: "c2",
      senderId: "u2",
      text: "user2 가 보낸 메세지",
      createdAt: minutesAgo(90), // minutesAgo 헬퍼 함수 사용
    },
  ],
  c3: [],
  c4: [],
};

export function formatTimeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const minutes = Math.round(diff / 60000);
  if (minutes < 1) return "지금";
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  return `${days}일 전`;
}
