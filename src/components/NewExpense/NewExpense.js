import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card.js';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {postData} from '../../store/reducerSlice';
import { useEffect, useState } from 'react';

function NewExpense() {
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useSelector(state=>state.expense.responsePost);
    const [boolEffect, setBoolEffect] = useState(true);

    useEffect(()=>{
        if(boolEffect){
            setBoolEffect(false);
            return;
        }
        history.push('/expenses');
    }, [store]);

    function addObj(obj) {
        dispatch(postData(obj));
    }

    return <Card className='new-expense'>
        <ExpenseForm takeObj={addObj} />
    </Card>
}

export default NewExpense;
