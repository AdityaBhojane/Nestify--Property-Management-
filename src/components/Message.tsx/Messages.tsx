type MessageProps = {
    text: string;
    time: string;
    isSender?: boolean;
  };
  
  export const Message = ({ text, time, isSender }: MessageProps) => {
    return (
      <div className={`flex ${isSender ? "justify-end" : "justify-start"}`}>
        <div
          className={`p-3 max-w-xs rounded-lg ${
            isSender ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          <p>{text}</p>
          <span className="block text-xs text-gray-500 mt-1">{time}</span>
        </div>
      </div>
    );
  };
  