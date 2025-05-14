const TopNav = () => {
    const logout = () => {
      if (window.logout) {
        window.logout();
      }
    };

    return (
      <header className="top-nav" id="top-nav">
        <span className="admin-name">Admin Ali</span>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </header>
    );
  };

  export default TopNav;
