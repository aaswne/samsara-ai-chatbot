"use client";

import "./SideBar.css";

function Sidebar({
  sidebarOpen,
  sidebarRef,
  recentChats,
  handleClic,
  handleOpenChat,
  handleClearChat,
}) {
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

      <div className="sidebar-footer">
        <button onClick={handleClearChat}>Clear Chat</button>
        <button>Settings</button>
      </div>
    </aside>
  );
}

export default Sidebar;