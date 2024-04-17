import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-dark">
          <div className="sidebarHeader">
            <h1 className="text-white">Portal</h1>
          </div>
          <ul className="tabs">
            <li className="text-decoration-none">Dashboard</li>
            <li>Employees</li>
            <li>Profile</li>
            <li>Holidays</li>
            <li>Roles</li>
          </ul>
        </div>
        <div className="col-10 bg-success">Nine</div>
      </div>
    </div>
  );
};
export default Sidebar;
