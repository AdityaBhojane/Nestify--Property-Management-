import axios from '../../config/axiosConfig'

export const getAgentData = async (token:string)=>{
    try {
        const response = await axios.get('/agents',{
            headers:{'token':token}
        });
        return response.data?.data
    } catch (error) {
        console.log(error)
    }
}