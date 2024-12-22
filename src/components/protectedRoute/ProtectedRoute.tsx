import { RootState } from '@/redux/store'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {

  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
  }, [token,navigate])

  return (
    <>
      {children}
    </>
  )
}
