import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({ item, onImageClick }) {
  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => onImageClick(item.urls.regular)}
      />
      <div className={css.imgInfo}>
        <div className={css.info}>
          <p className={css.title}>Author</p>
          <p className={css.text}>{item.user.name}</p>
        </div>
        <div className={css.info}>
          <p className={css.title}>Likes</p>
          <p className={css.text}>{item.likes}</p>
        </div>
      </div>
    </div>
  );
}
