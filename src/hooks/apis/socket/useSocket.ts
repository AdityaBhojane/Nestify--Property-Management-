/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import socket from "@/utils/socket";

export const useSocket = (userId: string, participantId: string) => {
  const [isConnected, setIsConnected] = useState(false);
  const [currentRoomId, setCurrentRoomId] = useState<string | null>(null);

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    socket.on("connect", () => {
      console.log("Connected to server");
      setIsConnected(true);

      if (userId) {
        socket.emit("RegisterUser", userId);
      }
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
      setIsConnected(false);
    });

    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, [userId]);

  useEffect(() => {
    if (userId && participantId) {
      // Leave the previous room if it exists
      if (currentRoomId) {
        socket.emit("LEAVE_PRIVATE_CHAT", currentRoomId, (response: any) => {
          if (response.success) {
            console.log(`Left room: ${currentRoomId}`);
          } else {
            console.error(response.message);
          }
        });
      }

      // Join a new room
      const newRoomId = [userId, participantId].sort().join("_");
      setCurrentRoomId(newRoomId);

      socket.emit(
        "JOIN_PRIVATE_CHAT",
        { userAId: userId, userBId: participantId },
        (response: any) => {
          if (response.success) {
            console.log(`Joined room: ${response.roomId}`);
          } else {
            console.error(response.message);
          }
        }
      );
    }

    return () => {
      if (currentRoomId) {
        socket.emit("LEAVE_PRIVATE_CHAT", currentRoomId, (response: any) => {
          if (response.success) {
            console.log(`Cleaned up room: ${currentRoomId}`);
          }
        });
      }
    };
  }, [userId, participantId, currentRoomId]);

  return { socket, isConnected, participantId };
};
