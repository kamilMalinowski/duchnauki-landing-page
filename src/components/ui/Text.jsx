function Text({ children, variant }) {
  return <p className={variant ? `txt ${variant}` : "txt"}>{children}</p>;
}

export default Text;
