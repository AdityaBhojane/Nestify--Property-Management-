
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StartConversation = ({title,message,button}:{title:string, message:string,button:boolean}) => {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate('/agents'); // or the path to your agent's page
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex justify-center items-center  bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <MessageCircle className="mx-auto text-blue-600 dark:text-blue-400 h-16 w-16 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {message}
          </p>
        </div>
        
        <div className="flex justify-center">
          {button && <button
            onClick={handleStartChat}
            className="bg-blue-600 text-white font-medium py-3 px-8 rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition duration-300 ease-in-out"
          >
            Start a Conversation
          </button>}
        </div>
      </div>
    </div>
  );
};

export default StartConversation

