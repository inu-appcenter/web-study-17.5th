import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import SidebarCompact from "./SidebarCompact";

export default function SidebarComponents() {
  const location = useLocation();
  const isDm = location.pathname.startsWith("/dm");

  return isDm ? <SidebarCompact /> : <Sidebar />;
}
