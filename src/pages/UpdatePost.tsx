import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { InputField } from "../component";
import { titleRules } from "../rules/postFieldRules";
import { useForm } from "react-hook-form";
import { POSTDATATYPE } from "../types/postType";
import { updatePost } from "../feature/slice/postSllice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../feature/store";
import { useNavigate } from "react-router-dom";
const UpdatePost = () => {
  const navigtae = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });
  const { id } = useParams();

  const onSubmit = async (data: POSTDATATYPE) => {
    // @ts-ignore
    dispatch(updatePost({ ...data, id: +id }));
    try {
      // @ts-ignore
      await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        data,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
    navigtae("/")
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Box>
      <form
        noValidate
        // @ts-ignore
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-10 my-[50px]"
      >
        <InputField
          name="title"
          type="text"
          placeHolder="Update your title"
          rules={titleRules}
          control={control}
        />
        <InputField
          name="body"
          type="text"
          placeHolder="Update your post"
          textArea={true}
          control={control}
          rules={titleRules}
        />
        <Button
          type="submit"
          className="bg-[#000] text-[#fff] py-[15px] px-[40px] hover:bg-[#000]"
        >
          Submit updated post
        </Button>
      </form>
    </Box>
  );
};

export default UpdatePost;
