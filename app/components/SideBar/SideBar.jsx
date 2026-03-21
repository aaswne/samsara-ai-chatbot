"use client";
import { useRouter } from "next/navigation";
import "./SideBar.css";

function Sidebar({
  settingRef,
  signOut,
  sidebarOpen,
  sidebarRef,
  recentChats,
  handleClic,
  handleOpenChat,
  handleClearChat,
  settingsOpen,
  settingOpen,
}) {
  const router = useRouter();

  const goMaintenance = () => {
    console.log("clicked maintenance");
    router.push("/maintenance");
  };

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar ${sidebarOpen ? "active" : ""}`}
    >
      <div className="sidebar-top">
        <div className="sidebar-logo">Samsara.Ai</div>

        <button type="button" onClick={handleClic} className="new-chat-btn">
          + New Chat
        </button>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-title">Recent Chats</p>

        <ul className="chat-list">
          {recentChats.map((chat) => (
            <li
              key={chat.id}
              className="chat-item"
              onClick={() => handleOpenChat(chat)}
              title={chat.title}
            >
              {chat.title}
            </li>
          ))}
        </ul>
      </div>

      <div ref={settingRef} className="sidebar-settings-wrap">
        <div className={settingOpen ? "settingList" : "settingListNone"}>
          <button type="button" onClick={goMaintenance} className="settingBtn">
            Profile
          </button>
          <button type="button" onClick={goMaintenance} className="settingBtn">
            Theme
          </button>
          <button type="button" onClick={goMaintenance} className="settingBtn">
            Help Center
          </button>
          <button
            type="button"
            onClick={handleClearChat}
            className="settingBtn"
          >
            Clear Chats
          </button>
          <button type="button" onClick={goMaintenance} className="settingBtn">
            Keyboard Shortcuts
          </button>
          <button type="button" onClick={goMaintenance} className="settingBtn">
            About Samsara AI
          </button>
          <button
            type="button"
            onClick={() => router.push("/privacypage")}
            className="settingBtn"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={signOut}
            className="settingBtn logoutBtn"
          >
            Logout
          </button>
        </div>

        <div className="sidebar-footer">
          <button type="button" onClick={settingsOpen}>
            Settings
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;