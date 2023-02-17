import classes from "./Input.module.css";

export default function Input(props) {
  return <input {...props} className={classes.input} />;
}
