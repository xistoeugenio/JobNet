import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { RiArrowGoBackLine } from "react-icons/ri";

const GoBackButton = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <Button
      variant="outlined"
      startIcon={<RiArrowGoBackLine />}
      onClick={goBack}
    >
      back
    </Button>
  );
};

export default GoBackButton;
