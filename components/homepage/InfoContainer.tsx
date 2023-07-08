import { Button } from "@mui/material";
import { FiGithub } from "react-icons/fi";

const InfoContainer = () => {
  return (
    <div className="w-full md:w-[45%] bg-blac h-full py-10">
      <p className="text-sky-300 text-[20px] lg:text-[30px] font-semibold text-center">
        JobNet is a brand new platform focused on helping you keep track of your
        job search process.
      </p>
      <p className="w-[70%] text-neutral-300 lg:text-[20px] hidden md:block my-10 ml-6 ">
        {`While we're currently in the early stages of development, we are
        constantly working to improve our platform based on user needs and
        feedback.`}
      </p>
      <a
        className="ml-6 text-orange-200 hidden md:block"
        href="https://github.com/xistoeugenio"
        target="_blank"
      >
        <Button variant="outlined" startIcon={<FiGithub />} color="inherit">
          {`Creator's Github`}
        </Button>
      </a>
    </div>
  );
};

export default InfoContainer;
