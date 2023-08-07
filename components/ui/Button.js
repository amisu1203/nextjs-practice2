import Link from "next/link";
import classes from "./Button.module.css";

function Button(props) {
  // 이 버튼이 링크로서 사용되어야 한다면
  if (props.link) {
    return <Link href={props.link}>{props.children}</Link>;
  }
  // 이 버튼이 링크로서 사용되지 않는다면
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Button;
