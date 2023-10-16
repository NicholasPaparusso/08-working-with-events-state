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

    const [enteredYear, setEnteredYear] = useState("2019");  
  
    let infoDate = "2020, 2021 & 2022";

    if(enteredYear === "2020"){
      infoDate = "2019, 2021 & 2022"
    }else if(enteredYear === "2021"){
      infoDate = "2019, 2020 & 2022"
    }else if(enteredYear === "2022"){
      infoDate = "2019, 2020 & 2021"
    }

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
          <p className="text-white conform-padding">
            Data for years {infoDate} is hidden.
          </p>
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