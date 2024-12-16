import ProfileCard from "@/components/ProfileCard.tsx/ProfileCard";


export default function ProfilePage() {
  return (
    <>
      <ProfileCard
        name="John Doe"
        role="Admin"
        address="123 Main Street, New York"
        phone="+1-234-567-890"
        email="john.doe@example.com"
        imageUrl="https://via.placeholder.com/150"
      />

    </>
  )
}
