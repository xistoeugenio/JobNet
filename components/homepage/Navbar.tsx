import { SignInButton } from "@clerk/nextjs";
import { Button } from "@mui/material";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="w-full h-[10%] flex justify-center border-neutral-400 border-b-2 shadow-lg shadow-[#1c1c2f]">
      <div className="w-full max-w-[1300px] mx-[40px] sm:mx-[60px] h-full flex items-center justify-between ">
        <span className="text-[25px]">JobNet</span>
        <SignInButton mode="modal">
          <Button variant="text" startIcon={<BiLogIn />} color="info">
            Login
          </Button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Navbar;
