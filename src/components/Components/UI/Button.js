import { click } from "@testing-library/user-event/dist/click";
import classes from "./Button.module.css";

export default function (props) {
  return (
    <button
      className={props.className}
      type={props.type ? props.type : "button"}
    >
      {props.children}
    </button>
  );
}
