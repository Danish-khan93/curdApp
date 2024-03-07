import { Box, Typography } from "@mui/material";
import { POSTTYPE } from "../types/postType";
type PROPS = {
  value: POSTTYPE;
};
const Card = ({ value }: PROPS) => {
  return (
    <Box className="flex flex-col items-center gap-3 px-2 py-2 w-[300px] h-[300px] shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <Typography className="text-[20px] font-medium text-center my-[10px]">{value?.title}</Typography>
      <Typography>{value?.body}</Typography>
    </Box>
  );
};

export default Card;
