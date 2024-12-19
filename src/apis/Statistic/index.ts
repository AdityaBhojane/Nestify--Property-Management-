import axios from '../../config/axiosConfig'

export const statisticData = async()=>{
    try {
        const response = axios.get('/stats/json');
        return response
    } catch (error) {
        console.log("statistic ERROR ::-" , error);
        throw error
    }
}