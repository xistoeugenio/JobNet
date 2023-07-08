import { SignUpButton } from "@clerk/nextjs"
import Button from "../Button"

const BottomContainer = ()=>{
  return(
    <div className="w-full sm:w-4/6 flex flex-col items-center gap-4 mb-10">
        <p className="text-neutral-500 text-center text-sm sm:text-base">
          Start using JobNet today and experience a new level of organization
          and efficiency in your job search.
        </p>
        <SignUpButton mode="modal">
          <Button label="Get Start" large outline />
        </SignUpButton>
      </div>
  )
}

export default BottomContainer