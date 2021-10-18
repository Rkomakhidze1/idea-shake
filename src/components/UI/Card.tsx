import classes from './Card.module.css';

interface Props {
  children: JSX.Element;
}

const Card = (props: Props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
