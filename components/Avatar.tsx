import Image from "next/image";

interface AvatarProps {
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ isLarge, hasBorder }) => {
  return (
    <div
      className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-10"}
        ${isLarge ? "w-32" : "w-10"}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
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
        src={"/images/placeholder.png"}
      />
    </div>
  );
};

export default Avatar;
