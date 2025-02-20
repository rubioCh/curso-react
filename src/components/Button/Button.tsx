import "./Button.css"

/*const style = {
    button: {
      color: "blue",
      backgroundColor: "grey"
    }
  }*/

interface Props {
  label: string,
  parentMethod: () => void
}

export const Button = ({label, parentMethod}:Props) => {
  return (
    <button className="custom-button" /*style={style.button}*/ onClick={parentMethod}>
      {label}
    </button>
  )
}