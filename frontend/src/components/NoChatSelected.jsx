import { MessageSquare } from "lucide-react";
import AppLogo from "./AppLogo";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50 relative">
      <div className="absolute">
      </div>

      <div className="max-w-md text-center space-y-6 relative z-10">
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <AppLogo />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Welcome to ByteChat!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;