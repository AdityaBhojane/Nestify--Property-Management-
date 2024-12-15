import { AgentCard } from "@/components/AgentCard/AgentCard";

export default function AgentPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold px-10 pt-5 pb-5">Agent List</h1>
      <AgentCard
        name="Karen Ella Boyette"
        role="Real-Estate Agent"
        email="kareneboyette@armyspy.com"
        phone="+502-324-4194"
        location="Manchester"
        propertiesCount={15}
        imageUrl="https://via.placeholder.com/150" // Replace with actual image URL
      />
    </>
  )
}
