import Avatar from "./Avatar";
interface AvatarNameProps {
  username?: string;
  userImage: string
  justPreview?: boolean;
  onClick?: () => void;
}

const AvatarName: React.FC<AvatarNameProps> = ({
  username,
  userImage,
  justPreview,
  onClick,
}) => {
  if (justPreview) {
    return (
      <div className=" flex items-center  gap-3 box-border  p-1 pr-5 rounded-full cursor-default">
        <Avatar />
        <span className=" text-yellow-100">{username}</span>
      </div>
    );
  } else {
    return (
      <div
        className=" flex items-center  gap-3 box-border hover:bg-neutral-900  p-1 pr-5 rounded-full cursor-pointer"
        onClick={onClick}
      >
        <Avatar userImage={userImage}/>
        <span className=" text-yellow-100">{username}</span>
      </div>
    );
  }
};

export default AvatarName;
