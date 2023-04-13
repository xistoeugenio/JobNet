
import Avatar from "./Avatar";
interface AvatarNameProps {
  username?: string;
}

const AvatarName: React.FC<AvatarNameProps> = ({ username }) => {
  return (
    <div
      className=" flex items-center  gap-3 box-border hover:bg-neutral-900  p-1 pr-5 rounded-full cursor-pointer"
    >
      <Avatar />
      <span className=" text-yellow-100">{username}</span>
    </div>
  );
};

export default AvatarName;
