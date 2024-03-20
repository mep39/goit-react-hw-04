import css from "../ErrorMessage/ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.text}>Oops, something went wrong! Please, reload page!</p>
  );
}
