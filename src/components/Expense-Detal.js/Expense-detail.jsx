// import ExpenseDate from '../Expenses/ExpenseDate';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ExpenseItem from '../Expenses/ExpenseItem';
import classes from './Expense-detail.module.css';
import { useSelector } from 'react-redux';


function ExpenseDetail() {
    const expenses = useSelector(state=>state.expense.arr);
    const params = useParams();
    const FindElem = expenses.find((elem)=>elem.id === params.expenseId);
    return (
        <Card className={classes.product}>
            <ExpenseItem date={FindElem.date} text={FindElem.title} price={FindElem.amount} />
        </Card>
    )
}

export default ExpenseDetail;