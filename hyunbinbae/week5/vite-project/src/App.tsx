import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DMListSidebar from "./components/DMListSidebar";
import DMHome from "./pages/DMHome";
import ChatRoom from "./pages/ChatRoom";
import SidebarNav from "./components/SidebarNav";
import { ChatProvider } from "./context/ChatContext";

export default function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <div className="h-screen w-full bg-black text-white flex">
          <SidebarNav />
          <DMListSidebar />

          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/dm" element={<DMHome />} />
              <Route path="/dm/:chatId" element={<ChatRoom />} />
              <Route path="*" element={<Navigate to="/dm" replace />} />
            </Routes>
          </main>
        </div>
      </ChatProvider>
    </BrowserRouter>
  );
}
