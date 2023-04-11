import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const HomePage = () => {
  return (
    <div
      className="
    flex-1
    flex
    justify-center
    items-center
    "
    >
      <div
        className=" 
        bg-neutral-950
        w-96
        max-w-full
        h-auto
        border-2
        border-neutral-700
        text-neutral-300
        p-4
        mx-3
        rounded-md
      "
      >
        <p>
          {` Welcome to jobNet, the ultimate job tracker designed by Xisto Eugênio to
        keep your job applications organized in one place. As the creator of
        jobNet, I'm constantly looking for ways to improve the platform and make
        it more user-friendly.`}
        </p>
        <p>{` If you have any feedback or suggestions, please
        don't hesitate to reach out to me through my social media channels`}</p>
        <p className="flex my-4 gap-3 items-center">
          <a href="https://github.com/xistoeugenio">
            <FiGithub size={25} className="text-red-500 hover:text-red-700" />
          </a>
          <a href="https://www.linkedin.com/in/xisto-eug%C3%AAnio/">
            <AiOutlineLinkedin
              size={30}
              className="text-sky-500 hover:text-sky-700"
            />
          </a>
          <a href="mailto:xistoeugeniosilva1@gmail.com">
            <HiOutlineMail
              size={30}
              className="text-yellow-300 hover:text-yellow-500"
            />
          </a>
        </p>
        Thank you for choosing jobNet!
      </div>
    </div>
  );
};

export default HomePage;
