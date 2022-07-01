import { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import styles from './ExpenseItem.module.css';

function ExpenseItem(props) {
  const history = useHistory();
  const match = useRouteMatch();
  const [title, setTitle] = useState(props.text)


  function clickHandler() {
    history.push(`${match.path}/${props.id}`);
  }


  return (
    <Card className={styles['expense-item']}>
      <ExpenseDate date={props.date} />
      <div className={styles['expense-item__description']}>
        <h2>{title}</h2>
        <div className={styles['expense-item__price']}>{props.price}</div>
      </div>
      {
        props.dont === false ? <button onClick={clickHandler}>посмотреть</button> : ''
      }
    </Card>
  );
}

export default ExpenseItem;
