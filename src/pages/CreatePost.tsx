import { useId } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { InputField } from "../component";
import { POSTDATATYPE } from "../types/postType";
import { titleRules } from "../rules/postFieldRules";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../feature/store";
import { addPost } from "../feature/slice/postSllice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreatePost = () => {
  const id = useId();
  const navigate = useNavigate()
  const dispatch =useDispatch<AppDispatch>()
  const { control, handleSubmit } = useForm<POSTDATATYPE>({
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const onSubmit = async (data: POSTDATATYPE) => {
    try {
      dispatch(addPost(data))
      await axios.post(`https://jsonplaceholder.typicode.com/posts`, data, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      console.log({ ...data, userId: id });
    navigate("/")
    } catch (error) {
      // Handle the error here
      console.error("Error during POST request:", error);
    }
  };

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-10 my-[50px]"
      >
        <InputField
          name="title"
          placeHolder="enter title"
          control={control}
          type="text"
          rules={titleRules}
        />
        <InputField
          name="body"
          placeHolder="write ypur blog"
          control={control}
          type="text"
          textArea={true}
          rules={titleRules}
        />
        <Button
          type="submit"
          className="bg-[#000] text-[#fff] py-[15px] px-[40px] hover:bg-[#000]"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default CreatePost;
