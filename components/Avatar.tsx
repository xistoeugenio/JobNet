import Image from "next/image";

interface AvatarProps {
  userImage?: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userImage, isLarge, hasBorder }) => {
  return (
    <div
      className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-10"}
        ${isLarge ? "w-32" : "w-10"}
        rounded-full s
        transition 
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        src={userImage || "/images/placeholder.png"}
      />
    </div>
  );
};

export default Avatar;
