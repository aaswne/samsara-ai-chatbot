import "./TopBar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../Context/ThemeContext"

function Topbar({ toggleSideBar ,profileClick , dropDownRef }) {

const { darkMode } = useTheme();
console.log(darkMode)


  return (
    <header className="topbar" style={{ backgroundColor: darkMode ? "black" : "white" ,color:darkMode?"white":"black"}} >
      <button onClick={toggleSideBar} style={{color:darkMode?"white":"black"}}  className="hamBurgButton">☰</button>

              <ThemeToggle />

      <div className="topbar-right">
<div
  style={{
    backgroundColor: darkMode ? "white" : "black",
    color: darkMode ? "black" : "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "50%",
    width: "40px",
    height: "40px"
  }}
  onClick={profileClick} ref={dropDownRef}
  className="profile"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8 8a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M14 14s-1-4-6-4-6 4-6 4h12z" />
  </svg>
</div>      </div>
    </header>
  );
}

export default Topbar;