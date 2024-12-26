

import axios from '../../config/axiosConfig'

interface UserData  {
    username?: string;
    city?: string;
    phone?: string;
    images?: File | null
}

interface UserProps {
    token?:string,
    userData?:UserData
}



export const getUserById = async ({token}:UserProps)=>{
    try {
        const response = await axios.get(`/user`,{
            headers:{
                "token":token
            }
        });
        return response.data?.data
    } catch (error) {
        console.log("error in get user", error);
        throw error
    }
};


export const deleteUserById = async ({token}:UserProps)=>{
    try {
        const response = await axios.delete(`/user`,{
            headers:{
                "token":token
            }
        });
        return response.data?.data
    } catch (error) {
        console.log("error in get user", error);
        throw error
    }
};


export const updateUserById = async ({userData,token}:UserProps)=>{
    console.log(userData)
    try {
        if(userData?.images){
            const response = await axios.put(`/user`,userData,{headers:{
                "token":token,
                'Content-Type': 'multipart/form-data',
                
            }});
            return response.data?.data
        }else{
            const response = await axios.put(`/user`,userData,{headers:{
                "token":token,      
            }});
            return response.data?.data
        }
    } catch (error) {
        console.log("error in get user", error);
        throw error;
    }
};

