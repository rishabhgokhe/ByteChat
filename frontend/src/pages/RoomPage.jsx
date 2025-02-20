import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const RoomPage = () => {
  const [roomName, setRoomName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [joinRoomNumber, setJoinRoomNumber] = useState("");

  const createRoom = async () => {
    if (!roomName || !roomNumber) {
      toast.error("Please enter room name and number.");
      return;
    }
    try {
      window.location.href = `http://localhost:3000/chat.html?username=${roomName}&room=${roomNumber}`;
    } catch (error) {
      alert(error.response?.data?.message || "Error creating room");
    }
  };

  const joinRoom = () => {
    if (!joinRoomNumber) {
      alert("Please enter a valid room number.");
      return;
    }
    window.location.href = `http://localhost:3000/chat.html?username=${roomName}&room=${joinRoomNumber}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-base-200">
      {/* Create Room Section */}
      <div className="card w-96 bg-neutral text-neutral-content p-6">
        <h2 className="text-2xl font-bold mb-4">Create a Room</h2>
        <input
          type="text"
          placeholder="Room Name"
          className="input input-bordered w-full mb-2"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Room Number"
          className="input input-bordered w-full mb-4"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
        />
        <button onClick={createRoom} className="btn btn-primary w-full">
          Create Room
        </button>
      </div>

      {/* Join Room Section */}
      <div className="card w-96 bg-secondary text-secondary-content p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">Join a Room</h2>
        <input
          type="text"
          placeholder="Enter Room Number"
          className="input input-bordered w-full mb-4"
          value={joinRoomNumber}
          onChange={(e) => setJoinRoomNumber(e.target.value)}
        />
        <button onClick={joinRoom} className="btn btn-accent w-full">
          Join Room
        </button>
      </div>
    </div>
  );
};

export default RoomPage;