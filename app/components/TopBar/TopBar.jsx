import "./TopBar.css";

function Topbar({toggleSideBar}) {
  return (
    <header className="topbar">
      <button onClick={toggleSideBar} className="hamBurgButton">☰</button>
   
      <div className="topbar-right">
        <select>
          <option>GPT-4</option>
          <option>GPT-4o</option>
          <option>Claude</option>
        </select>
        <div className="profile">AK</div>
      </div>
    </header>
  );
}

export default Topbar;