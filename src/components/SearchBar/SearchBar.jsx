import css from "../SearchBar/SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value.trim();
    if (search === "") {
      toast.error("Please enter a search query.");
      return;
    }
    onSearch(search);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
        />
        <button className={css.btn} type="submit">
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
