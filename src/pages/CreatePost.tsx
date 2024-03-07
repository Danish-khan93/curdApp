import { useId } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@mui/material"
import { InputField } from "../component"
import { POSTDATATYPE } from "../types/postType"
import { titleRules } from "../rules/postFieldRules"
const CreatePost = () => {
 const {control, handleSubmit} = useForm<POSTDATATYPE>({
    defaultValues:{
title:"",
body:""
    }
 })

const onSubmit =(data:POSTDATATYPE)=>{
    console.log(data);
    
}

    return (
    <>
    <form noValidate onSubmit={handleSubmit(onSubmit)} >
<InputField name="title" placeHolder="enter title" control={control} type="text" rules={titleRules}/>
<Button type="submit">
    Submit
</Button>
    </form>
    </>
  )
}

export default CreatePost