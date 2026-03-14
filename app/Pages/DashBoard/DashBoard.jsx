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
  const [dropDown,setDropDown] = useState(false)
  const sidebarRef = useRef(null);
  const [settingOpen,setSettingOpen] = useState(false)


  const settingsOpen = () =>{
    setSettingOpen(settingOpen==true?false:true)
  }

  const route = useRouter()

  const signOut = async () => {
  await logout();
  console.log("User logged out");
  route.push("./Login")
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

  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false); 
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const profileClick = ()=> {
    setDropDown(dropDown==true?false:true)
  }


  return (
    <>
      <TopBar toggleSideBar={toggleSideBar} profileClick={profileClick} />

      <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        <Sidebar
        signOut={signOut}
        settingOpen={settingOpen}
          sidebarOpen={sidebarOpen}
          sidebarRef={sidebarRef}
          recentChats={recentChats}
          handleClic={handleNewChat}
          handleOpenChat={handleOpenChat}
          handleClearChat={handleClearChat}
          settingsOpen={settingsOpen}
          
        />

        <MainInput messages={messages} setMessages={setMessages}    dropDown={dropDown} signOut={signOut}  />
      </div>
    </>
  );
}

export default DashBoard;