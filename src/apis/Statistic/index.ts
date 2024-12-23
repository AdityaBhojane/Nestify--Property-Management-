import axios from '../../config/axiosConfig'

export const statisticData = async({token}:{token:string})=>{
    try {
        const response = await axios.get('/stats/json',{
            headers:{
                'token':token 
            }
        });
        return response.data?.data
    } catch (error) {
        console.log("statistic ERROR ::-" , error);
        throw error
    }
}