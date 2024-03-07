import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar className="bg-[#fff] flex justify-between">
        <Box>
          <Typography className="text-[#000] text-[20px] font-semibold">BLOG APP</Typography>
        </Box>
        <Box className ="flex justify-between gap-5">
          <Typography className="text-[#000] ">
            <Link to="/">Home</Link>
          </Typography>
          <Typography className="text-[#000] ">
            <Link to="/create">Create New Post</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
