import "./Component.css"
import classNames from "classnames";

export interface CardProps {
  text: string;
  check?: boolean; 
  onChange?: () => void;
}

const Card = ({ text, check, onChange}: CardProps) => {
  return (
        <div className={classNames("card-text", {completed:check})}>
            <input type="checkbox" checked={check} onChange={onChange}/>
            {text}
        </div>
  );
};

export default Card;