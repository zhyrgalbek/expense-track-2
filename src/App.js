import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js/Header';
import ExpenseDetail from './components/Expense-Detal.js/Expense-detail';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getData } from './store/reducerSlice';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const responseOk = useSelector(state=>state.expense.responsePost);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData());
  }, [responseOk]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/expense-track-2" exact>
          <Redirect to="/new-expense" />
        </Route>
        <Route path="/new-expense" >
          <NewExpense />
        </Route>
        <Route path="/expenses" exact>
          <Expenses />
        </Route>
        <Route path="/expenses/:expenseId" >
          <ExpenseDetail />
        </Route>
        <Route path="*">
          <p>Not Found</p>
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;

//ReactDom
