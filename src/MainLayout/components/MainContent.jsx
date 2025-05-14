const MainContent = () => {
    return (
      <>
        <section className="content-area" id="content-area">
          <h1>Welcome to Task Management System</h1>
          <p>Use the sidebar to navigate through different sections.</p>
        </section>

        <section className="content-area" id="tasks-section" style={{ display: "none" }}>
          <h1>Tasks</h1>
        </section>

        <section className="content-area" id="chat-section" style={{ display: "none" }}>
          <h1>Chat</h1>
        </section>
      </>
    );
  };

  export default MainContent;
