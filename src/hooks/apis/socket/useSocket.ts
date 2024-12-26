import socket from "@/utils/socket";
import { useEffect } from "react";


interface NewMessage {
    body: string;
    userId: string;
    senderId: string;
}

export const useSocket = (participantId: string, onNewMessage: (message: NewMessage) => void) => {
    useEffect(() => {
        // Connect socket
        if (!socket.connected) {
            socket.connect();
        }

        // Listen for new messages
        socket.on("NewMessageReceivedEvent", (message: NewMessage) => {
            console.log("New message received:", message);
            onNewMessage(message);
        });

        // Cleanup to avoid duplicate listeners
        return () => {
            socket.off("NewMessageReceivedEvent");
        };
    }, [participantId, onNewMessage]);
};
