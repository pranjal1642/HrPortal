import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
