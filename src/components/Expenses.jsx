import React, { useContext, useState } from 'react'
import { Themeprovider } from '../Context/Themecontext'
import { Expenseprovider } from '../Context/Expensecontext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";
import {faPencil}  from "@fortawesome/free-solid-svg-icons";
import {faTrashCan}   from "@fortawesome/free-solid-svg-icons";


const Expenses = () => {
  const [search, setsearch] = useState(" ")
const [category, setcategory] = useState("All")

const [selectedmonth, setselectedmonth] = useState("All")

  const{darkmode,setdarkmode}=useContext(Themeprovider)
  const [editExpense, setEditExpense] = useState(null);

  const{expenses,deleteExpense,clearallExpense,updateExpense}=useContext(Expenseprovider)



  const [deleteall, setDeleteall] = useState(false)


  const filteredexpenses = expenses.filter((expense) => {
  const matchsearch = expense.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    category === "All" || expense.category === category;

  const expensemonth = new Date(expense.date).getMonth();

  const matchmonth =
    selectedmonth === "All" ||
    expensemonth === Number(selectedmonth);

  return matchsearch && matchCategory && matchmonth;
});
const handleEditExpense = () => {
  updateExpense(
    editExpense.id,
    editExpense
  );

  setEditExpense(null);
};



  return (
   
   <div className={`min-h-screen w-full p-3 sm:p-4 lg:p-6 ${
  darkmode ? 'bg-neutral-800' : 'bg-white'
}`}>

<input
  type="text"
  placeholder="search for transaction"
  className={`w-full sm:w-100 h-10 p-3 rounded-xl border ${
    darkmode
      ? 'border-gray-400 text-white placeholder:text-gray-400 bg-slate-800'
      : 'border-gray-300 text-black placeholder:text-gray-500 bg-white'
  }`}
  value={search}
  onChange={(e) => {
    setsearch(e.target.value)
  }}
/>

  <div className='flex flex-col sm:flex-row mt-6 sm:mt-9 gap-4 sm:gap-6'>

<select
 value={category}
 onChange={(e)=>{setcategory(e.target.value)}}
 className={`  rounded-xl ${darkmode ?'text-gray-400 border border-gray-400':'text-black border border-gray-300'}`}>


<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>Sort by category</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>All</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`} >Food</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`} >shopping</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>travel</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>rent</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>Entertainment</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>Health</option>

</select>



<select  value={selectedmonth} onChange={(e)=>{setselectedmonth(e.target.value)}}
className={`w-full sm:w-auto rounded-xl ${
  darkmode
    ? 'text-gray-400 border border-gray-400'
    : 'text-black border border-gray-300'
}`}


>
<option value="">Sort by month</option>
<option  value="0" className={`${darkmode ?'text-white bg-black':'text-black'}`}>January</option>
<option value="1" className={`${darkmode ?'text-white bg-black':'text-black'}`}>February</option>
<option  value="2" className={`${darkmode ?'text-white bg-black':'text-black'}`}>March</option>
<option value="3" className={`${darkmode ?'text-white bg-black':'text-black'}`}>April</option>
<option value="4" className={`${darkmode ?'text-white bg-black':'text-black'}`}>May</option>
<option value="5" className={`${darkmode ?'text-white bg-black':'text-black'}`}>June</option>
<option value="6" className={`${darkmode ?'text-white bg-black':'text-black'}`}>July</option>
<option value="7" className={`${darkmode ?'text-white bg-black':'text-black'}`}>August</option>
<option value="8" className={`${darkmode ?'text-white bg-black':'text-black'}`}>September</option>
<option value="9" className={`${darkmode ?'text-white bg-black':'text-black'}`}>October</option>
<option value="10" className={`${darkmode ?'text-white bg-black':'text-black'}`}>November</option>
<option value="11" className={`${darkmode ?'text-white bg-black':'text-black'}`}>December</option>


</select>


{/* 
<select className={`w-full sm:w-auto rounded-xl ${
  darkmode
    ? 'text-gray-400 border border-gray-400'
    : 'text-black border border-gray-300'
}`}>
  <option className={`${darkmode ?'text-white bg-black':'text-black'}`}>Sort by</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>Highest(amount)</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>Lowest(amount)</option>




</select> */}


    </div>

<div className={`rounded-xl mt-8 w-full max-w-full overflow-hidden ${
  darkmode
    ? 'bg-black'
    : 'bg-slate-50 border border-slate-300'
}`}>

  <h1 className={`font-semibold text-lg p-4 ${
    darkmode ? 'text-gray-400' : 'text-zinc-800'
  }`}>
    Recent Expenses
  </h1>

  <div className="w-full overflow-x-auto">

    <div className="min-w-[650px]">

      {/* Table Header */}
      <div className={`grid grid-cols-5 px-5 py-3 font-medium ${
        darkmode
          ? 'text-gray-400 border-b border-slate-500'
          : 'border-b border-slate-300 text-slate-500'
      }`}>
        <div>Title</div>
        <div>Amount</div>
        <div>Category</div>
        <div>Date</div>
        <div className="text-center">Action</div>
      </div>

      {/* Table Body */}
      {expenses.length === 0 ? (
        <div className="p-8 text-center text-slate-400">
          No expenses added yet.
        </div>
      ) : (
        filteredexpenses.map((expense, index) => (
          <div
            key={index}
            className="grid grid-cols-5 px-5 py-4 border-b border-slate-200 items-center hover:bg-slate-100 transition"
          >

            <div className={`font-medium ${
              darkmode ? 'text-gray-400' : 'text-zinc-800'
            }`}>
              {expense.title}
            </div>

            <div className="font-semibold text-red-500">
              ₹ {expense.amount}
            </div>

            <div className={`font-medium ${
              darkmode ? 'text-gray-400' : 'text-zinc-800'
            }`}>
              {expense.category}
            </div>

            <div className={`font-medium ${
              darkmode ? 'text-gray-400' : 'text-zinc-800'
            }`}>
              {new Date(expense.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>

            <div className="flex justify-center gap-4">
              <button
                className="text-blue-600 hover:text-blue-800"
                // onClick={() => {
                //   seteditindex(index)
                //   setisopen(true)
                // }}
                 onClick={() => setEditExpense(expense)}
              >
                <FontAwesomeIcon icon={faPencil} />
              </button>

              <button
                className="text-red-600 hover:text-red-800"
                onClick={() => {
                  deleteExpense(index)
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>

          </div>
        ))
      )}

    </div>

  </div>
</div>

<div className="text-center mt-7">
  <button
    onClick={() => {
      setDeleteall(true)
    }}
    className={`w-full sm:w-35 h-10 rounded-xl text-red-600 active:scale-105 ${
      darkmode
        ? 'border border-gray-400'
        : 'border border-gray-300'
    }`}
  >
    Clear all expense
  </button>
</div>


{deleteall && (


<div className='fixed inset-0 bg-black/50 flex justify-center items-center'>

<div className={`w-[90%] sm:w-96 p-6 rounded-xl ${
  darkmode
    ? 'bg-black border border-gray-500'
    : 'bg-white border border-gray-400'
}`}>

<h2 className={`font-semibold  text-xl p-2 ${darkmode ?'text-white':'text-black'}`}>Clear all expenses</h2>
<p className={`font-medium   p-2 ${darkmode ?'text-white':'text-black'}`}>are you sure you want to delete all expense? this action cannot be undone.</p>


<div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mt-4">
<button onClick={()=>{setDeleteall(false)}}
className={`"w-full sm:w-30 h-8 ${darkmode ?'bg-gray-600 text-red-500 ':'bg-white text-red-600'}`}>Cancel</button>

<button onClick={()=>{
  clearallExpense()
  setDeleteall(false)
}}
 className={`"w-full sm:w-30 h-8 ${darkmode ?'bg-gray-600 text-red-500 ':'bg-white text-red-600'}`}> Delete all</button>
</div>


</div>



  </div>

)}


{editExpense && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">
    <div
      className={`w-[90%] sm:w-96 p-6 rounded-xl ${
        darkmode
          ? "bg-black border border-gray-500"
          : "bg-white border border-gray-400"
      }`}
    >
      <h2 className="text-xl font-semibold mb-5">
        Edit Expense
      </h2>

      <input
        type="text"
        value={editExpense.title}
        onChange={(e) =>
          setEditExpense({
            ...editExpense,
            title: e.target.value,
          })
        }
        className="w-full h-10 border rounded-xl p-2 mb-3"
        placeholder="Expense title"
      />

      <input
        type="number"
        value={editExpense.amount}
        onChange={(e) =>
          setEditExpense({
            ...editExpense,
            amount: e.target.value,
          })
        }
        className="w-full h-10 border rounded-xl p-2 mb-3"
        placeholder="Amount"
      />

      <select
        value={editExpense.category}
        onChange={(e) =>
          setEditExpense({
            ...editExpense,
            category: e.target.value,
          })
        }
        className="w-full h-10 border rounded-xl p-2"
      >
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button
          onClick={() => setEditExpense(null)}
          className="w-full sm:w-30 h-9 rounded-xl border"
        >
          Cancel
        </button>

        <button
          onClick={handleEditExpense}
          className="w-full sm:w-30 h-9 rounded-xl bg-blue-600 text-white"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}



      
      </div>
  )
}

export default Expenses
