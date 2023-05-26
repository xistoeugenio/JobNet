import Button from "../Button";

const Resume = () => {
  const resume = false;
  return (
    <div className="flex-1 flex justify-center items-center">
      {resume ? <div>Resume</div> : <Button label="Add resume" />}
    </div>
  );
};
export default Resume;
