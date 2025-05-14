const Sidebar = () => {
    return (
      <aside className="sidebar" id="sidebar" style={{ display: "none" }}>
        <div className="sidebar-logo"></div>
        <nav className="menu">
          <ul>
            <li className="active">
              <a href="#" onClick={() => window.showHome?.()}>Home</a>
            </li>
            <li>
              <a href="#" onClick={() => window.showProjects?.()}>Projects</a>
            </li>
            <li>
              <a href="#" onClick={() => window.showTasks?.()}>Tasks</a>
            </li>
            <li>
              <a href="#" onClick={() => window.showChat?.()}>Chat</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;
  