import React, { createContext, useState } from 'react'



export const Expenseprovider=createContext();

const Expensecontext = ({children}) => {

const [expenses, setExpenses] = useState([])

const addExpense=(newExpense)=>{
  
  setExpenses((prev)=>[...prev,newExpense])
}





const deleteExpense = (index) => {
  setExpenses((prev) => prev.filter((_, i) => i !== index));
};

const clearallExpense=()=>{
  setExpenses([])
}
const updateExpense = (id, updatedExpense) => {
  const updatedExpenses = expenses.map((expense) =>
    expense.id === id
      ? updatedExpense
      : expense
  );

  setExpenses(updatedExpenses);

  localStorage.setItem(
    "expenses",
    JSON.stringify(updatedExpenses)
  );
};




  return (
   
    <Expenseprovider.Provider 
     value={{expenses,setExpenses,addExpense,deleteExpense,clearallExpense,updateExpense}}>
{children}

    </Expenseprovider.Provider>
  )
}

export default Expensecontext
