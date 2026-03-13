"use client";

import { useState, useRef, useEffect } from "react";
import Topbar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import MainInput from "../../components/MainInput/MainInput"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

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

  return (
    <>
      <Topbar toggleSideBar={toggleSideBar} />
      <SideBar sidebarOpen={sidebarOpen} sidebarRef={sidebarRef} />
      <MainInput/>
    
    </>
  );
}

export default App;
