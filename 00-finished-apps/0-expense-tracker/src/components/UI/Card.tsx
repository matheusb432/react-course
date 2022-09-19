interface CardProps {
  children: JSX.Element | JSX.Element[];
  styleClass?: string;
}

const Card = (props: CardProps) => {
  const classes = `card ${props.styleClass ?? ''}`;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
