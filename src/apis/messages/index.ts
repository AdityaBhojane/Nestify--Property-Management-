
import axios from "../../config/axiosConfig";

export const getMessages = async (token:string,  participantId: string) => {
    try {
        const response = await axios.get(`/message/${participantId}`,{
            headers:{
                "token":token
            }
        });
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
};
