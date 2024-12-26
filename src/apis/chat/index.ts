
import { ErrorHandler } from "@/helper/ErrorHandler";
import axios from "../../config/axiosConfig";

export const createChat = async (token:string, senderId: string | null) => {
    try {
        const response = await axios.post(`/chat`,{participantId:senderId},{
            headers:{
                "token":token
            }
        });
        return response;
    } catch (error) {
        console.log(error);
        ErrorHandler(error)
    }
};

export const getChat = async (token:string) => {
    try {
        const response = await axios.get(`/chat`,{
            headers:{
                "token":token
            }
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
        ErrorHandler(error)
    }
};
