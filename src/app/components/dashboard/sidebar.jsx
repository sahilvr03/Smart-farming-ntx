// components/Sidebar.js
const Sidebar = () => {
    return (
      <div className="w-64 h-screen bg-blue-900 text-white fixed z-50">
        <div className="text-2xl font-bold p-4 ">
        <span className="text-green-500 ">SMART FARMING</span>
        </div>
        <ul>
          {["Dashboard", "Cluster", "Device / Controller", "User Management"].map(
            (item, index) => (
              <li
                key={index}
                className="py-3 px-6 hover:bg-blue-700 cursor-pointer"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  