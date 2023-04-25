//import Card from './Card';
//import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
//import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props){
  //console.log(props)
    return (

        <div className='expense-item'>
                  <ExpenseDate  date={props.date}/>
                  <div className='expense-item__description'>
                  <h2>{props.title}</h2>
                    <div className='expense-item__price'>{props.amount}</div>
                     <div>{props.location}</div>
                    
               </div>
           </div>
    );
}

export default ExpenseItem;

//<h2>{props.title}</h2>
//<div className='expense-item__price'>{props.amount}</div>
//<div>{props.location}</div>
//<ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />