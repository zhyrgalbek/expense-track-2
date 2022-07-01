import SpinnerRender from '../spinners/SpinnerRender';
import styles from './Expenses.module.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import FilterExpense from './FIlterExpense';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';
import { useSelector } from 'react-redux';


function Expenses(props) {
  const [year, setYear] = useState("2022");
  const expenses = useSelector(state=>state.expense.arr);
  let newArr = expenses.map((elem)=>{
    return {
      ...elem,
      date: new Date(elem.date)
    }
  })

  // console.log(newArr);
  

  function takeYear(year) {
    setYear(year);
  }

  const filteredElems = newArr.filter((elem) => {
    if (+elem.date.getFullYear() === +year) {
      return elem;
    }
  });

  return (
    <Card className={styles.expenses}>
      <FilterExpense takeYear={takeYear} value={year} />
      <ExpensesChart expense={filteredElems} />
      {
        props.isValidSpinner && <SpinnerRender />
      }
      {
        +filteredElems.length === 0 ? <p style={{ color: '#fff', padding: '20px 0' }}>No found</p> :
          filteredElems.map(elem => {
            return <ExpenseItem date={elem.date} text={elem.title} price={elem.amount} id={elem.id} dont={false} key={elem.id} />
          })
      }
    </Card>
  )

}

export default Expenses;