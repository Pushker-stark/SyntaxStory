import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { useState } from "react";

export default function Appbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    // Redirect to the signin page
    navigate("/signin");
  };

  return (
    <div className="border-b flex justify-between items-center px-10 py-4">
      <Link to={'/blogs'} className="font-bold text-lg cursor-pointer">
        SyntaxStory
      </Link>
      <div className="flex items-center space-x-4">
        {/* New Button */}
        <Link to={`/publish`}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5"
          >
            New
          </button>
        </Link>
        {/* Avatar with Dropdown */}
        <div className="relative">
          <div onClick={() => setDropdownOpen(!dropdownOpen)} className="cursor-pointer">
            <Avatar name="Pushker" size="big" />
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg py-2 w-40">
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
