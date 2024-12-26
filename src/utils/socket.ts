import { io } from "socket.io-client";

const SOCKET_URL = "ws://localhost:5000"; // Update with your backend URL if needed
export const socket = io(SOCKET_URL, {
    autoConnect: false, // Prevent auto connection
});

export const sendMessage = (message: { body: string; userId: string; participantId: string }) => {
    return new Promise((resolve, reject) => {
        socket.emit("NewMessageEvent", message, (response: { success: boolean; data: any }) => {
            if (response.success) {
                resolve(response.data);
            } else {
                reject(new Error("Message sending failed"));
            }
        });
    });
};


export default socket;
