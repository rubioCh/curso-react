import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./components/CustomInput"
import { FormValues, schema } from "./models"

const CustomForm = () => {
  const {control, handleSubmit, formState : {errors}} = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm name="name" label="Name" type="text" control={control} error={errors.name}></InputForm>
      <InputForm name="email" label="Email" type="email" control={control} error={errors.email}></InputForm>
      <InputForm name="password" label="Password" type="password" control={control} error={errors.password}></InputForm>
      <InputForm name="confirmPassword" label="Confirm Password" type="password" control={control} error={errors.confirmPassword}></InputForm>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default CustomForm