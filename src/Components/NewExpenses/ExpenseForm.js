import React, {useState}from "react"
import './ExpenseForm.css';
const ExpenseForm = (props)=>{
    const[DateTitle,setDateTitle]=useState('')
     const[AmountTitle,setAmountTitle]= useState('')
    const[EnteredTitle,setEnteredTitle]= useState('')
   
    const titleChangeEvent = (event) =>{
       
      setEnteredTitle(event.target.value);
    }

    const amountChangeEvent=(event) =>{
        setAmountTitle(event.target.value);
    }

    const dateChangeEvent =(event)=>{
        setDateTitle(event.target.value);
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData={
          title:EnteredTitle,
          amount:AmountTitle,
          date: new Date(DateTitle)
        };
       
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        //console.log(props)
        setAmountTitle('');
        setDateTitle('');
        setEnteredTitle('');
    }
return (
   <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__controls">
            <label>Title</label>
           <input type="text" value={EnteredTitle} onChange={titleChangeEvent}/>
        </div>
        <div className="new-expense__controls">
            <label>Amount</label>
           <input type="number"  min='0.01'  step='0.01'  value={AmountTitle} onChange={amountChangeEvent}/>
        </div>
        <div className="new-expense__controls">
            <label>Date</label>
           <input type="date"  max="2022-12-31"  min='2019-01-01' value={DateTitle} onChange={dateChangeEvent}/>
        </div>
        <div className="new-expense__actions">
         <button>Add Expense</button>
        </div>
    </div>
   </form>
)
}

export default ExpenseForm;