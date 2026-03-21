"use client";

import React, { useEffect, useRef, useState } from "react";
import Sidebar from "@/app/components/SideBar/SideBar";
import MainInput from "@/app/components/MainInput/MainInput";
import TopBar from "@/app/components/TopBar/TopBar";
import { logout } from "../../Config/firebase";
import { useRouter } from "next/navigation";

function DashBoard() {
  const [messages, setMessages] = useState([]);
  const [recentChats, setRecentChats] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);

  const router = useRouter();

  const dropDownRef = useRef(null);
  const settingRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setDropDown(false);
      }

      if (settingRef.current && !settingRef.current.contains(e.target)) {
        setSettingOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const settingsOpen = () => {
    setSettingOpen((prev) => !prev);
  };

  const signOut = async () => {
    await logout();
    console.log("User logged out");
    router.push("/Login");
  };

  useEffect(() => {
    const savedChats = localStorage.getItem("recentChats");
    if (savedChats) {
      setRecentChats(JSON.parse(savedChats));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recentChats", JSON.stringify(recentChats));
  }, [recentChats]);

  function toggleSideBar() {
    setSidebarOpen((prev) => !prev);
  }

  const handleNewChat = () => {
    if (messages.length > 0) {
      const newChat = {
        id: Date.now(),
        title: messages[0]?.text || "New Chat",
        messages: messages,
      };

      setRecentChats((prev) => [newChat, ...prev]);
    }

    setMessages([]);
    setSidebarOpen(false);
  };

  const handleOpenChat = (chat) => {
    setMessages(chat.messages);
    setSidebarOpen(false);
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const profileClick = () => {
    setDropDown((prev) => !prev);
  };

  return (
    <>
      <TopBar
        toggleSideBar={toggleSideBar}
        profileClick={profileClick}
        dropDownRef={dropDownRef}
      />

      <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        <Sidebar
          signOut={signOut}
          settingOpen={settingOpen}
          sidebarOpen={sidebarOpen}
          recentChats={recentChats}
          handleClic={handleNewChat}
          handleOpenChat={handleOpenChat}
          handleClearChat={handleClearChat}
          settingsOpen={settingsOpen}
          settingRef={settingRef}
        />

        <MainInput
          messages={messages}
          setMessages={setMessages}
          dropDown={dropDown}
          signOut={signOut}
        />
      </div>
    </>
  );
}

export default DashBoard;