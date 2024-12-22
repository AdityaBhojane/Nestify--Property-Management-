import axios from '../../config/axiosConfig'

export const statisticData = async()=>{
    try {
        const response = axios.get('/stats/json');
        return (await response).data?.data
    } catch (error) {
        console.log("statistic ERROR ::-" , error);
        throw error
    }
}