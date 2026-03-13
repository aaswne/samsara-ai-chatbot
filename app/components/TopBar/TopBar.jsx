import "./TopBar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../Context/ThemeContext"

function Topbar({ toggleSideBar ,profileClick ,  }) {

const { darkMode } = useTheme();
console.log(darkMode)


  return (
    <header className="topbar" style={{ backgroundColor: darkMode ? "black" : "white" ,color:darkMode?"white":"black"}} >
      <button onClick={toggleSideBar} className="hamBurgButton">☰</button>

              <ThemeToggle />

      <div className="topbar-right">
        <div style={{backgroundColor:darkMode?"white":"black",color:darkMode?"black":"white"}} onClick={profileClick} className="profile">AK</div>
      </div>
    </header>
  );
}

export default Topbar;