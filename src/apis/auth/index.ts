import axios from '../../config/axiosConfig'

interface Idata {
    username?:string,
    email:string,
    password:string
}

export const signUpRequest = async({username,email,password}:Idata)=>{
    try {
        const response = await axios.post('/auth/signup',{
            username,
            email,
            password
        });
        return response.data?.data
    } catch (error) {
        console.log("sign up ERROR ::-" , error);
        throw error
    }
}

export const signInRequest = async({email,password}:Idata)=>{
    try {
        const response = await axios.post('/auth/signin',{
            email,
            password
        });
        return response.data?.data
    } catch (error) {
        console.log("sign in ERROR ::-" , error);
        throw error
    }
}

export const signUpAdminRequest = async({email,password}:Idata)=>{
    try {
        const response = await axios.post('/auth/admin',{
            email,
            password
        });
        return response.data?.data
    } catch (error) {
        console.log("sign up admin ERROR ::-" , error);
        throw error
    }
}

export const OTPRequest = async({id,otp}:{id:string, otp:string})=>{
    try {
        const response = await axios.post(`/auth/otp/${id}`,{
            otp:otp
        });
        return response.data?.data
    } catch (error) {
        console.log("otp ERROR ::-" , error);
        throw error
    }
}

