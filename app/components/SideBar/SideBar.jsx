"use client";

import "./SideBar.css";

function Sidebar({ sidebarOpen, sidebarRef }) {
  const chats = [
    "Marketing ideas",
    "Portfolio content",
    "React dashboard UI",
    "AI chatbot design",
  ];

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar ${sidebarOpen ? "active" : ""}`}
    >
      <div className="sidebar-logo">Samsara.Ai</div>

      <button className="new-chat-btn">+ New Chat</button>

      <div className="sidebar-section">
        <p className="sidebar-title">Recent Chats</p>
        <ul className="chat-list">
          {chats.map((chat, index) => (
            <li key={index} className="chat-item">
              {chat}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <button>Dashboard</button>
        <button>Settings</button>
      </div>
    </aside>
  );
}

export default Sidebar;
