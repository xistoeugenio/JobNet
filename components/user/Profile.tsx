import useCurrentUser from "@/hooks/useCurrentUser";
import FormUser from "./FormUser";
import InfoUser from "./InfoUser";

const Profile = ({}) => {
  const { data: currentUser } = useCurrentUser();
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-sm h-full flex flex-col gap-6 text-neutral-300 ">
        <InfoUser />
        <FormUser />
      </div>
    </div>
  );
};

export default Profile;
