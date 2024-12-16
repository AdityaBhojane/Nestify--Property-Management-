import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Briefcase, Pencil } from "lucide-react";

type ProfileCardProps = {
  name: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  imageUrl: string;
};

export default function ProfileCard({
  name,
  role,
  address,
  phone,
  email,
  imageUrl,
}: ProfileCardProps) {
  return (
    <Card className="max-w-full m-5 ">
      <CardContent className="p-6 flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6">
        <Avatar className="w-30 h-30">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>PR</AvatarFallback>
        </Avatar>

        <div className="flex flex-col space-y-3 select-none">
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-500 flex items-center gap-2">
              <Briefcase size={16} />
              {role}
            </p>
          </div>

          <div className="space-y-2 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{email}</span>
            </div>
          </div>
        </div>
      <Pencil className="text-slate-400 size-5 cursor-pointer"/>
      </CardContent>
    </Card>
  );
}
