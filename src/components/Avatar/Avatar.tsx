type AvatarProps = {
    src: string;
    size?: "sm" | "md";
  };
  
  export const Avatar = ({ src, size = "md" }: AvatarProps) => {
    const dimensions = size === "sm" ? "w-8 h-8" : "w-12 h-12";
  
    return (
      <img
        src={src}
        alt="avatar"
        className={`rounded-full ${dimensions} object-cover`}
      />
    );
  };
  