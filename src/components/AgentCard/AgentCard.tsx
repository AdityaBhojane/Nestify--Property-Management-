import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Building2, MoreHorizontal } from "lucide-react";

interface AgentCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  propertiesCount: number;
  imageUrl: string;
}

export function AgentCard({
  name,
  role,
  email,
  phone,
  location,
  propertiesCount,
  imageUrl,
}: AgentCardProps) {
  return (
    <Card className="flex flex-col md:flex-row items-center p-4 gap-6 shadow-sm">
      {/* Avatar Section */}
      <Avatar className="w-32 h-32 rounded-md">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>

      {/* Content Section */}
      <CardContent className="flex-1 p-0">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-xl text-center md:text-left">{name}</CardTitle>
          <p className="text-sm text-gray-500 text-center md:text-left">{role}</p>
        </CardHeader>

        {/* Details */}
        <div className="flex flex-col md:flex-row md:gap-4 text-gray-500 mt-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </div>
        </div>
          <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
            <Phone className="w-4 h-4" />
            <span>{phone}</span>
          </div>

        <div className="flex flex-col md:flex-row md:gap-4 mt-2 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            <span>{propertiesCount} Properties</span>
          </div>
        </div>
      </CardContent>

      {/* Menu Icon */}
      <MoreHorizontal className="text-gray-400 cursor-pointer hidden md:block" />
    </Card>
  );
}
