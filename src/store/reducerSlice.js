import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    arr: [],
    responsePost: false
}

const ExpenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense(state, action) {
            state.arr = [...action.payload.arr];
        },
        successfully(state){
            state.responsePost = !state.responsePost;
        }
    }
})

export const ExpenseSliceActions = ExpenseSlice.actions;

export default ExpenseSlice;


export const postData = (obj)=>{
    return (dispatch)=>{
        fetch('https://expens-b1f25-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        }).then((response) => {
            if (response.status === 200) {
                dispatch(ExpenseSliceActions.successfully());
            }
        }).catch((error) => {

        })
    }
}


export const getData = () => {
    return (dispatch) => {
        fetch('https://expens-b1f25-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json')
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
                let newArr = [];
                for (let elem in data) {
                    newArr.push({
                        ...data[elem],
                    });
                }
                dispatch(ExpenseSliceActions.addExpense({
                    arr: newArr
                }))
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
}