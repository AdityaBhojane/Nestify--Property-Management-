import { Avatar } from "../Avatar/Avatar";

interface Participant {
  participantsId?: {
    image?: string;
    username?: string;
  };
}



export const ChatSideBar = ({ participants, setSenderId, setParticipantsData }:
  {
    participants: Participant[], setSenderId: React.Dispatch<React.SetStateAction<string>>, setParticipantsData: React.Dispatch<React.SetStateAction<{
      username: string;
      images: string;
    }>>
  }) => {

  return (
    <aside className="w-full h-[calc(100vh-4rem)] md:w-1/3 lg:w-1/4 bg-gray-100 dark:bg-gray-800 p-4 border-r">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Chats
      </h2>
      <ul className="space-y-4 min-w-40">
        {participants?.map((user: Participant, index: number) => {
          return (
            <li
              key={index}
              className="flex items-center gap-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => {
                setSenderId(user.participantsId?._id);
                setParticipantsData({ username: user.participantsId?.username || "", images: user.participantsId?.image || `https://api.dicebear.com/9.x/initials/svg?seed=${user.participantsId?.username}` })
              }}
            >
              <Avatar src={user.participantsId?.image || `https://api.dicebear.com/9.x/initials/svg?seed=${user.participantsId?.username}`} size="sm" />
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {user.participantsId?.username}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  view conversation
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </aside>
  );
};
