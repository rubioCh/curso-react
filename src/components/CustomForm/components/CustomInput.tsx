import { Control, Controller, FieldError } from "react-hook-form";
import "./CustomInput.css"
import { FormValues } from "../models"

interface Props {
  name: keyof FormValues,
  label: string,
  type?: string,
  control: Control<FormValues>,
  error?: FieldError
}

const InputForm = ({name, label, type, control, error}: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller 
        name={name}
        control={control}
        render={({ field }) =>  
          <input id={name} type={type} {...field} className={`form-control ${error ? 'is-nvalid' : ''}`} />
        }
      />
      {error && <p className="error">{error.message}</p>}
    </div>
  )
}

export default InputForm