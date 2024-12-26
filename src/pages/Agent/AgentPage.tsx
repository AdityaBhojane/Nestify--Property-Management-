import { AgentCard } from "@/components/AgentCard/AgentCard";
import { useAgentData } from "@/hooks/apis/agent/useAgentData";
import { LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";


interface Agent {
  _id: string | null;
  email: string;
  properties: string[] | number[];
  username: string;
  location?: string;
  imageUrl?: string;
}

export default function AgentPage() {
const { agents, isFetching, isError } = useAgentData();
const navigate = useNavigate();

console.log(agents)
  
const defaultLocation = "India";

  return (
    <>
      <h1 className="text-2xl font-semibold px-10 pt-5 pb-5">Agent List</h1>
      {isFetching && <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoaderCircle className="animate-spin size-10" />
      </div>}
      {isError && <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-center">
          <h3 className="text-5xl font-bold text-red-600">500</h3>
          <h4 className="text-2xl mt-4">Internal Server Error</h4>
          <p className="text-gray-600 mt-2 dark:text-[#ccc]">Oops! Something went wrong on our end.</p>
          <p><span className="text-md cursor-pointer text-blue-400" onClick={()=> navigate("./login")}>login</span> again</p>
        </div>
      </div>} 
      {agents?.map((agent: Agent) => (
        <AgentCard
          key={agent._id || `fallback-key-${agent.email}`}
          id={agent._id}
          name={agent.username}
          role="Real-Estate Agent"
          email={agent.email}
          location={agent.location || defaultLocation}
          propertiesCount={agent.properties.length}
          imageUrl={agent.imageUrl || `https://api.dicebear.com/9.x/initials/svg?seed=${agent.username}`}
        />
      ))}
    </>
  )
}





