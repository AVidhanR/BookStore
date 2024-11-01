export const Book = (props) => {
  const { author, title, image, id } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <span className="number">{`#${id}`}</span>
      {/* {children} */}
    </article>
  );
};
