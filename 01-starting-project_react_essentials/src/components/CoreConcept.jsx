export default function CoreConcept({
  image,
  title = "Default",
  description = "None",
}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
