import ProfileCard from "@/components/ProfileCard.tsx/ProfileCard";
import { useGetUserById } from "@/hooks/apis/user/useGetUserById";



export default function ProfilePage() {

  const {userResponse} = useGetUserById();
  console.log(userResponse)

  return (
    <>
      <ProfileCard
        name={userResponse?.username}
        role="Admin"
        address={userResponse?.city || 'not available'}
        phone={userResponse?.phone || 'not available'}
        email={userResponse?.email || 'not available'}
        imageUrl={userResponse?.images || `https://api.dicebear.com/9.x/initials/svg?seed=${userResponse?.username}` }
      />
    </>
  )
}
