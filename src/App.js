//import logo from './logo.svg';
import NewExpense from './Components/NewExpenses/NewExpense';
import './App.css';
//import ExpenseItem from './Components/Expenses/ExpenseItem';
import ExpensesFilter from './Components/Expenses/ExpensesFilter';
import { useState } from 'react';
import ExpenseList from './Components/Expenses/ExpenseList';
//import ExpenseList from './Components/Expenses/ExpenseList';
import ExpenseChart from './Components/Expenses/ExpenseChart';
const DUMMY = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location:'Delhi'
  },
  {
     id: 'e2', title: 'New TV', 
     amount: 799.49,
     date: new Date(2021, 2, 12) ,
     location:'Bombay'
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: 'Nanital'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    location:'Dehradun'
  },
];
function App(props) {
  const[expenses, setExpenses]=useState(DUMMY)
  const[filterYear,setFilteredYear] = useState('2020');


  const addExpenseHandler = expense=>{
  //console.log(expense)
    setExpenses((prevExpense) =>{
  
      return ([expense, ...prevExpense])
     
    })
    
    }

  const filterChangeHandler = selectedYear =>{
     setFilteredYear(selectedYear);
  }

 
  const filteredExpenses = expenses.filter(expense =>{
    return expense.date.getFullYear().toString() === filterYear;
  }) 
  
  return (
    <div>

        <NewExpense  onAddExpense={addExpenseHandler}/>
        <div className='expenses'>
        <ExpensesFilter selected ={filterYear} onChange={filterChangeHandler}/>
        <ExpenseChart  expenses={filteredExpenses}/>
         <ExpenseList  items = {filteredExpenses}/>

        </div>
        </div>
  );
}

export default App;