import "./TopBar.css";


function Topbar({ toggleSideBar }) {

  const handleThemeChange = (e) => {
    const value = e.target.value;
    setDarkMode(value === "dark");
  };

  return (
    <header className="topbar">
      <button onClick={toggleSideBar} className="hamBurgButton">☰</button>

      <div className="topbar-right">
        <div className="profile">AK</div>
      </div>
    </header>
  );
}

export default Topbar;