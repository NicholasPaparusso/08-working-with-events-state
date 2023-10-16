import React, { useState } from "react";
import Expense from "./Expense";
import NewExpense from "./NewExpense";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) =>{
    const[oldExpenses,setExpenses] = useState(props.data)

    const addExpenseHandler = (expense) => {
      console.log(expense);
      // setExpenses([expense, ...oldExpenses]);
      console.log(oldExpenses);
    }

    const [enteredYear, setEnteredYear] = useState("");  
  
    const onChangeYearHandler = (selectedYear) =>{
      setEnteredYear(selectedYear);
    
      console.log(selectedYear)
    }
    return (
        <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <div className="App container expenses">
  
        <div>
          <ExpensesFilter selected={enteredYear} onChangeYear={onChangeYearHandler} />
        </div>
              {oldExpenses.map((item) => {
                return (
  
                  <div>  
                      <Expense
                      title={item.title}
                      amount={item.amount}
                      date={item.date}
                      />
                  </div>
  
                );
              } )}
  
  
        </div>
      </div>  
    )
}

export default Expenses;