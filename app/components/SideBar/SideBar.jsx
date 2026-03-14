"use client";
import { useRouter } from "next/navigation";

import "./SideBar.css";

function Sidebar(
  {
  sidebarOpen,
  sidebarRef,
  recentChats,
  handleClic,
  handleOpenChat,
  handleClearChat,
  settingsOpen,
  settingOpen
}) {
    const route = useRouter()
    const goMaintenance = () => {
  route.push("/maintenance");
};

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar ${sidebarOpen ? "active" : ""}`}
    >
      <div className="sidebar-logo">Samsara.Ai</div>

      <button onClick={handleClic} className="new-chat-btn">
        + New Chat
      </button>

      <div className="sidebar-section">
        <p className="sidebar-title">Recent Chats</p>
        <ul className="chat-list">
          {recentChats.map((chat) => (
            <li
              key={chat.id}
              className="chat-item"
              onClick={() => handleOpenChat(chat)}
            >
              {chat.title}
            </li>
          ))}
        </ul>
      </div>

      <div className={settingOpen ? "settingList" : "settingListNone"}>

  <button onClick={goMaintenance} className="settingBtn">Profile</button>
<button onClick={goMaintenance} className="settingBtn">Theme</button>
<button onClick={goMaintenance} className="settingBtn">Help Center</button>

<button onClick={handleClearChat} className="settingBtn">Clear Chats</button>

<button onClick={goMaintenance} className="settingBtn">Keyboard Shortcuts</button>
<button onClick={goMaintenance} className="settingBtn">About Samsara AI</button>
<button onClick={goMaintenance} className="settingBtn">Privacy Policy</button>
<button onClick={goMaintenance} className="settingBtn">Logout</button>

</div>

      <div className="sidebar-footer">
        <button onClick={settingsOpen} >Settings</button>
      </div>
    </aside>
  );
}

export default Sidebar;