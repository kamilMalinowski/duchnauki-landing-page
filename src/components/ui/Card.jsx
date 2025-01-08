import "./Card.scss";

function Card({ children, variant, type, href, target, ariaLabel }) {
  return (
    <>
      {type === "button" && (
        <li>
          <section className={variant ? `card ${variant}` : "card"}>
            <>{children}</>
          </section>
        </li>
      )}
      {type === "link" && (
        <li>
          <a
            href={href}
            target={target}
            aria-label={ariaLabel}
            rel="nofollow noreferrer noopener"
            className={variant ? `card card--link ${variant}` : "card card--link"}
          >
            {children}
          </a>
        </li>
      )}
    </>
  );
}

export default Card;
