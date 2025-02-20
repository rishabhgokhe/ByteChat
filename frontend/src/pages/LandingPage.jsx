const LandingPage = () => {
    return (
      <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center p-6">
        {/* Hero Section */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-primary">
            Welcome to ByteChat 🚀
          </h1>
          <p className="mt-4 text-lg text-base-content/80">
            Real-time messaging made simple. Connect, chat, and collaborate with ease!
          </p>
        </div>
  
        {/* Chat Bubble Animation */}
        <div className="mt-10 relative">
          <div className="chat chat-start">
            <div className="chat-bubble bg-[#007AFF] text-white text-lg">
              Hey there! 👋
            </div>
          </div>
          <div className="chat chat-end mt-2">
            <div className="chat-bubble bg-[#E5E5EA] text-black text-lg">
              Ready to start chatting? 🚀
            </div>
          </div>
        </div>
  
        {/* Buttons */}
        <div className="mt-10 flex gap-4 flex-wrap">
          <button className="btn btn-outline px-6"><a href="/login">Login</a></button>
          <button className="btn btn-outline px-6"><a href="/signup">Sign Up</a></button>
          <button className="btn btn-outline px-6"><a href="https://room-chat-app20.vercel.app/">Create Room</a></button>
        </div>
  
        {/* Footer */}
        <div className="mt-16 text-sm text-base-content/60">
          Built with ❤️ by the ByteChat Team.
        </div>
      </div>
    );
  };
  
  export default LandingPage;