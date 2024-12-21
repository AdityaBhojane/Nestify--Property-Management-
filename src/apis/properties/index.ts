import axios from '../../config/axiosConfig'

interface IPropertyData {
    id?:string
    name: string
    description: string
    images: string
    price: number
    location: string
    purpose: string
    PropertyType: string
}

export const createProperty = async ({
    name,
    description,
    images,
    price,
    location,
    purpose,
    PropertyType
}: IPropertyData) => {
    try {
        const response = axios.post('/property/create', {
            name,
            description,
            images,
            price,
            location,
            purpose,
            PropertyType
        });
        return response
    } catch (error) {
        console.log("create property ERROR ::-", error);
        throw error
    }
}

export const updateProperty = async ({
    id,
    name,
    description,
    images,
    price,
    location,
    purpose,
    PropertyType

}: IPropertyData) => {
    try {
        const response = axios.post(`/property/${id}`, {
            name,
            description,
            images,
            price,
            location,
            purpose,
            PropertyType
        });
        return response
    } catch (error) {
        console.log("update property ERROR ::-", error);
        throw error
    }
}


export const deleteProperty = async ({userId, propertyId}:{userId:string, propertyId:string}) => {
    try {
        const response = axios.post(`/property/${userId}`, {
            propertyId
        });
        return response;
    } catch (error) {
        console.log("delete property ERROR ::-", error);
        throw error
    }
}


export const getProperty = async (token:string) => {
    try {
        const response = axios.get('/property',{
            headers:{
                'token':token
            }
        });
        return (await response).data?.data
    } catch (error) {
        console.log("get property ERROR ::-", error);
        throw error
    }
}