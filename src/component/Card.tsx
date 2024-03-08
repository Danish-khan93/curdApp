import { Box, Typography, Button } from "@mui/material";
import { POSTTYPE } from "../types/postType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../feature/store";
import { deletePost } from "../feature/slice/postSllice";
import { useNavigate } from "react-router-dom";

import axios from "axios";

type PROPS = {
  value: POSTTYPE;
};
const Card = ({ value }: PROPS) => {
 
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();

  const deleteHandle = async (id: number | any) => {
    console.log(id);
    



    dispatch(deletePost(id));
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    } catch (error) {
      console.log("error", error);
    }
  };
 

  return (
    <Box className="flex flex-col items-center gap-3 px-2 py-2 w-[400px] h-[400px] shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <Box className="h-[250px]">
        <Typography className="text-[20px] font-medium text-center my-[10px]">
          {value?.title}
        </Typography>
        <Typography className="text-[16px] font-normal text-center my-[10px]">
          {value?.body}
        </Typography>
      </Box>
      <Box className="flex gap-5">
        <Button
          className="bg-[#000] text-[#fff] py-[15px] px-[40px] hover:bg-[#000]"
          onClick={() => {
            deleteHandle(value.id);
          }}
        >
          Delete
        </Button>
        <Button
          className="bg-[#000] text-[#fff] py-[15px] px-[40px] hover:bg-[#000]"
          onClick={()=>{navigate(`/update/${value.id}`)}}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
