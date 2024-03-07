import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box className="w-full h-screen flex justify-center items-center">
      <Box>
        <Typography className="text-[#000] font-semibold text-[36px] text-center">
          Page Not Found
        </Typography>
        <Typography className="text-[#000] font-semibold text-[20px] text-center">
          Error 404
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
