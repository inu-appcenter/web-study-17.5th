import './Component.css';
import classNames from 'classnames';
import { useContext } from 'react';
import { Context } from '../Context';

export interface CardProps {
  text: string;
  check?: boolean;
  onChange?: () => void;
}
const Card = ({ text, check, onChange }: CardProps) => {
  const { mode } = useContext(Context);
  return (
    <div
      className={classNames('card-text', {
        completed: check,
        'light-mode': mode == 'light',
        'dark-mode': mode == 'dark',
      })}
    >
      <input type="checkbox" checked={check} onChange={onChange} />
      {text}
    </div>
  );
};

export default Card;
