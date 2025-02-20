import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Moon, Sun, User } from "lucide-react";
import { useTheme } from "../provider/contextProvider";
import AppLogo from "./AppLogo";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <AppLogo />
              </div>
              <h1 className="text-lg font-bold">ByteChat</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {/* <Link
              to={"/settings"}
              className="btn btn-sm gap-2 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link> */}

            {/* Dark Mode Toggle Button */}

            {authUser && (
              <Link to={"/profile"} className="cusor-pointer tooltip tooltip-left" data-tip="Profile">
                <img
                  src={authUser.profilePic || "/avatar.png"}
                  alt={"profile pic"}
                  className="size-8 object-cover rounded-full"
                ></img>
              </Link>
            )}

            <button
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className="btn btn-sm gap-2"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">
                {isDarkMode ? "Light" : "Dark"}
              </span>
            </button>

            {authUser && (
              <>
                <button
                  className="flex gap-2 items-center btn btn-sm"
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
