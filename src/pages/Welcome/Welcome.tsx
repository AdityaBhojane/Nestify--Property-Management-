import { RootState } from '@/redux/store';
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

export default function Welcome() {

    const navigate = useNavigate();
    const token = useSelector((state:RootState)=> state.auth.token)

    useEffect(() => {
        if(token){
            navigate('/dashboard')
        }else{
            navigate('signin')
        }
    }, [token,navigate])


    return (
        <>
            <Loader2 />
        </>
    )
}
