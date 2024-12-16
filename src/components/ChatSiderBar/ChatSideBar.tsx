import { Avatar } from "../Avatar/Avatar";

const users = [
  { name: "Jane Cooper", message: "Hello, how are you?", active: true },
  { name: "Jubed Ahmed", message: "Need a photo", active: false },
];

export const ChatSideBar = () => {
  return (
    <aside className="w-full h-[calc(100vh-4rem)] md:w-1/3 lg:w-1/4 bg-gray-100 dark:bg-gray-800 p-4 border-r">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Chats
      </h2>
      <ul className="space-y-4 min-w-40">
        {users.map((user, index) => (
          <li
            key={index}
            className="flex items-center gap-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
          >
            <Avatar src="https://i.pravatar.cc/150" size="sm" />
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {user.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.message}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};
