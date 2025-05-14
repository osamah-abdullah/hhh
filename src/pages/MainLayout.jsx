import { useEffect } from "react";
import TopNav from "../MainLayout/components/TopNav";
import Sidebar from "../MainLayout/components/SideBar";
import MainContent from "../MainLayout/components/MainContent";
import "../MainLayout/styles.css";

const MainLayout = ({ children }) => {
  useEffect(() => {
    if (window.checkUserSession) {
      window.checkUserSession();
    }
  }, []);

  return (
    <div>
      <TopNav />
      <div className="container flex">
        <Sidebar />
        <main className="main-content flex-1">
          {children || <MainContent />}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
