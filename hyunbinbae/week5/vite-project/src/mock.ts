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

export const CHATS: Chat[] = [
  {
    id: "c1",
    participantIds: ["me", "u1"],
    lastMessageAt: new Date().toISOString(),
  },
  {
    id: "c2",
    participantIds: ["me", "u2"],
    lastMessageAt: new Date(Date.now() - 3600_000).toISOString(),
  },
  {
    id: "c3",
    participantIds: ["me", "u3"],
    lastMessageAt: new Date(Date.now() - 2 * 3600_000).toISOString(),
  },
  {
    id: "c4",
    participantIds: ["me", "u4"],
    lastMessageAt: new Date(Date.now() - 3 * 3600_000).toISOString(),
  },
];

export const INITIAL_MESSAGES: Record<string, Message[]> = {
  c1: [
    {
      id: "m1",
      chatId: "c1",
      senderId: "u1",
      text: "Test Text 메세지입니당",
      createdAt: new Date(Date.now() - 50 * 60_000).toISOString(),
    },
    {
      id: "m2",
      chatId: "c1",
      senderId: "me",
      text: "Hi:)",
      createdAt: new Date(Date.now() - 40 * 60_000).toISOString(),
    },
  ],
  c2: [
    {
      id: "m3",
      chatId: "c2",
      senderId: "u2",
      text: "user2 가 보낸 메세지",
      createdAt: new Date(Date.now() - 90 * 60_000).toISOString(),
    },
  ],
  c3: [],
  c4: [],
};

export function formatTimeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.round(diff / 60000);
  if (m < 1) return "지금";
  if (m < 60) return `${m}분`;
}
