import "./Card.scss";

function Card({ children, variant }) {
  return (
    <li>
      <section className={variant ? `card ${variant}` : "card"}>
        <>{children}</>
      </section>
    </li>
  );
}

export default Card;
