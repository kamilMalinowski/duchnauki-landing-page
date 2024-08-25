import "./Button.scss"

function Button({ children, type, href, onClick, ariaLabel, variant, target }) {
    return (
      <>
        {type === "button" && (
          <button
            aria-label={ariaLabel}
            className={variant ? `button ${variant}` : "button"}
            onClick={onClick}
          >
            {children}
          </button>
        )}
        {type === "link" && (
          <a
            href={href}
            target={target}
            aria-label={ariaLabel}
            rel="nofollow noreferrer noopener"
            className={variant ? `button ${variant}` : "button"}
          >
            {children}
          </a>
        )}
        {type === "card" && <div className="button card">{children}</div>}
      </>
    );
  }

  export default Button;

  
