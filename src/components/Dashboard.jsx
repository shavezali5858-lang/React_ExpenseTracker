import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Transactionmodal from './Transactionmodal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";
import {faPencil}  from "@fortawesome/free-solid-svg-icons";
import {faTrashCan}   from "@fortawesome/free-solid-svg-icons";
import Charts from './Charts';
import { Themeprovider } from '../Context/Themecontext';
import { Expenseprovider } from '../Context/Expensecontext';

const Dashboard = () => {
  


  const{darkmode,setdarkmode}=useContext(Themeprovider)

const [isopen, setisopen] = useState(false)



const{expenses,addExpense}=useContext(Expenseprovider)
// const [expenses, setexpenses] = useState([])

const [totalsum, settotalsum] = useState('')


const [editindex, seteditindex]=useState(null)

const [settingopen, setsettingopen] = useState(false)


const [budgetopen, setbudgetopen] = useState(false)

const [budgetvalue, setbudgetvalue] = useState(" ")

const [budget, setbudget] = useState(0);




// const addexpense=(newExpense)=>{
//   console.log(newExpense)
//   setexpenses((prev)=>[...prev,newExpense])
// }


const totalamount=expenses.reduce((total,expense)=>{
  return total+Number(expense.amount)

},0)




const currentmonth=new Date().getMonth();
const currentyear=new Date().getFullYear();


const monthlyexpense=expenses.filter((expense)=>{
  const expensedate= new Date(expense.date);

  return(

    expensedate.getMonth()===currentmonth && expensedate.getFullYear()===currentyear
  )
})

.reduce((total,expense)=>{
  return total+Number(expense.amount)
},0)


const monthname=new Date().toLocaleString("default",{
  month:"long",
})



const deleteexpense=(deleteindex)=>{
  const updatedexpense=expenses.filter((_,index)=>{
    return deleteindex!=index
  })
  setexpenses(updatedexpense)

}




const categorytotals={}
expenses.forEach((expense)=>{




  if(categorytotals[expense.category]){
    categorytotals[expense.category]+=Number(expense.amount)
  }

  else{
    categorytotals[expense.category]=Number(expense.amount)
  }

})

const chartdata=Object.entries(categorytotals).map(
  ([category,amount])=>({
    name:category,
    value:amount,
  })
)





const monthlytotals={}

expenses.forEach((expense)=>{


const month=new Date(expense.date).toLocaleString("default",{
  month:"short",
})


  if(monthlytotals[month]){
    monthlytotals[month]+=Number(expense.amount);
  }

  else{
    monthlytotals[month]=Number(expense.amount)
  }
})



const monthlydata=Object.entries(monthlytotals).map(
  ([month,amount])=>({
    month,
    amount,
  })
)

const categoryTotals={}

expenses.forEach((expense)=>{

if(!categoryTotals[expense.category]){
  categoryTotals[expense.category]=0;
}

  categoryTotals[expense.category]+=Number(expense.amount)
})

let topcategory="";
let maxamount=0;

for(const category in categorytotals){
  if(categoryTotals[category]>maxamount){
    maxamount=categoryTotals[category]
    topcategory=category
  }
}

const totalTransactions = expenses.length;




useEffect(()=>{
    const savedbudget=localStorage.getItem("monthlybudget")

    if(savedbudget){
      setbudget(Number(savedbudget))
    }
  },[])



  const remainingamount=budget-monthlyexpense;

  const percentage= budget>0 ? Math.min((monthlyexpense/budget)*100,100):0;








  return (

 <div className={`  p-3 sm:p-4 lg:p-6 min-h-screen ${
  darkmode ? 'bg-black' : 'bg-white'
}`}>

  <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 min-h-20 w-full px-3 py-3 border-b ${darkmode ?'text-white border-gray-400':'text-black border-b-gray-300'}  `}>
  
  <h1 className='font-semibold text-xl sm:text-2xl px-3 py-2 '>Dashboard</h1>

  <button className={` w-full sm:w-30 h-10 rounded-xl px-2 py-1 active:scale-105 ${darkmode ? 'bg-blue-700 text-white':'bg-blue-500 text-white'}`}
  onClick={()=>{
setisopen(true)
}}
  >
     +Add expense</button>

  </div>
 


<h1 className={`font-semibold mt-5 text-xl ${darkmode ?'text-white':'text-gray-700'}`}>Overview : {monthname} {currentyear}</h1>
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 p-3 sm:p-5'>

  

<div className={`min-h-30 w-full border  rounded-xl ${darkmode ?'bg-neutral-800 ':'bg-slate-50 border-slate-400'}`}>
  <p className={` p-3 ${darkmode ?'text-gray-400':'text-zinc-800' }`}>Total spent</p>
  <h1 className={`text-xl  ml-4 font-semibold ${darkmode ?'text-white':'text-black'} `}> <FontAwesomeIcon icon={faIndianRupeeSign} />{totalamount}</h1>
  {/* <p className={`inline-block text-xs ml-4 mt-5 ${darkmode ?'text-red-300 bg-red-700':'bg-red-300 text-black'} `}>+4.5% </p> */}
 
</div>

<div className={`min-h-30 w-full border  rounded-xl ${darkmode ?'bg-neutral-800  ':'bg-slate-50 border-slate-400'}`}>
  <p className={` p-3 ${darkmode ?'text-gray-400':'text-zinc-800' }`}>This month</p>
  <h1 className={`text-xl  ml-4 font-semibold ${darkmode ?'text-white':'text-black'} `}><FontAwesomeIcon icon={faIndianRupeeSign} /> {monthlyexpense}</h1>
  {/* <p className=' text-xs inline-block text-slate-800 ml-4 mt-5  bg-green-400'>+ 4.5% last month</p> */}
</div>

{/* 
<div className={`min-h-30 w-full  border  rounded-xl ${darkmode ?'bg-neutral-800  ':'bg-slate-50 border-slate-400'}`}>
  <p className={` p-3 ${darkmode ?'text-gray-400':'text-zinc-800' }`}>Top category</p>
  <h1 className={`text-xl  ml-4 font-semibold ${darkmode ?'text-white':'text-black'} `}>{topcategory || "no data"}</h1>
  <p className='   text-slate-800   font-bold  ml-4 mt-5 '> <FontAwesomeIcon icon={faIndianRupeeSign} /> {maxamount}</p>
</div> */}


<div className={`min-h-30 w-full border  rounded-xl ${darkmode ?'bg-neutral-800  ':'bg-slate-50 border-slate-400'}`}>
  <p className={` p-3 ${darkmode ?'text-gray-400':'text-zinc-800' }`}>Total transactions</p>
  <h1 className={`text-xl  ml-4 font-semibold ${darkmode ?'text-white':'text-black'} `}> {totalTransactions}</h1>
  {/* <p className=' text-xs inline-block text-slate-800 ml-4 mt-5  bg-green-400'>+ 4.5% last month</p> */}
</div>




</div>



<div className={` w-full h-30 rounded-xl ${darkmode?'bg-neutral-800 border border-gray-500':'bg-slate-50 border border-gray-400'}`}>

<div className='  relative p-3 flex gap-10'>

  <h2 className={`font-semibold ml-2 ${darkmode? 'text-gray-400':'text-black'}`}>Monthly budget</h2>
  <h2 className={` ${darkmode?'text-gray-400':'text-black'}`}> Spent <FontAwesomeIcon icon={faIndianRupeeSign} />{monthlyexpense}  </h2>
  <h2 className={` ${darkmode?'text-gray-400':'text-black'}`}> <FontAwesomeIcon icon={faIndianRupeeSign} />{remainingamount} Left</h2>

  </div>

  <div className='mt-3 px-3'>
  <button
    onClick={() => {
      setbudgetopen(true)
    }}
    className={`w-full sm:w-32 h-8 rounded-xl ${
      darkmode
        ? 'border border-gray-500 bg-black text-white'
        : 'bg-blue-500 border border-gray-400 text-white'
    }`}
  >
    Set budget
  </button>
</div>
<div className='w-full sm:w-[80%] lg:w-[70%] ml-0 sm:ml-5 h-3 rounded-full bg-gray-300 mt-2 '>
  <div className={` flex  px-2 py-1  h-3 rounded-full  transition-all duration-300  ${
  percentage<50 ? "bg-green-600"
  : percentage>50 && percentage<80 ?"bg-yellow-600"
  : "bg-red-700"
  }`}
  style={{
    width: `${percentage}%`
  }}
  >

    <p className={` mt-3 ml-3 ${darkmode? "text-white ":"text-black"}`}>
      {percentage.toFixed(0)}% used
    </p>

   {remainingamount<=0 && (
    <h2 className={`font-bold  mt-8 ml-5 ${darkmode?"text-red-500":"text-red-700"} `}>
      ⚠️ warning: Your budget has been exceeded. please review your expenses!
    </h2>
   )}


  </div>


</div>

</div>



{/* GRAPH */}
<div className='flex flex-col lg:flex-row gap-6 mt-20 ml-0 lg:ml-5 lg:mt-10 '>


<Charts chartdata={chartdata}  monthlydata={monthlydata}/>









</div>

<div className={`rounded-xl mt-8 w-full max-w-full overflow-hidden ${
  darkmode
    ? 'bg-neutral-800'
    : 'bg-slate-50 border border-slate-300'
}`}>

  <h1 className={`font-semibold text-lg p-4 ${
    darkmode ? 'text-gray-400' : 'text-zinc-800'
  }`}>
    Recent Expenses
  </h1>

  <div className=" w-full overflow-x-auto">

    <div className="min-w-[550px]">

      {/* Table Header */}
      <div className={`grid grid-cols-4 px-5 py-3 font-medium ${
        darkmode
          ? 'text-gray-400 border-b border-slate-500'
          : 'border-b border-slate-300 text-slate-500'
      }`}>
        <div>Title</div>
        <div>Amount</div>
        <div>Category</div>
        <div>Date</div>
      </div>

      {/* Table Body */}
      {expenses.length === 0 ? (
        <div className="p-8 text-center text-slate-400">
          No expenses added yet.
        </div>
      ) : (
        expenses.map((expense, index) => (
          <div
            key={index}
            className="grid grid-cols-4 px-5 py-4 border-b border-slate-200 items-center hover:bg-slate-100 transition"
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

          </div>
        ))
      )}

    </div>

  </div>

</div>




      {isopen && (
        <Transactionmodal
          onClose={() => setisopen(false)}
          addexpense={addExpense}
            expense={editindex !== null ? expenses[editindex] : null}
        />
      )}


     {budgetopen && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">

    <div
      className={`w-full max-w-md min-h-60 rounded-xl p-5 ${
        darkmode ? 'bg-neutral-800' : 'bg-slate-50'
      }`}
    >

      <h2
        className={`font-semibold text-xl p-1 ${
          darkmode ? 'text-gray-400' : 'text-black'
        }`}
      >
        Set monthly budget
      </h2>

      <input
        type="number"
        placeholder="Enter budget"
        value={budgetvalue}
        onChange={(e) => {
          setbudgetvalue(e.target.value)
        }}
        className={`w-full h-10 mt-8 border rounded-xl p-3 ${
          darkmode
            ? 'border-gray-500 bg-neutral-700 text-white placeholder:text-gray-400'
            : 'border-gray-400 bg-white text-black placeholder:text-gray-500'
        }`}
      />

      <div className="flex flex-col sm:flex-row gap-3 mt-8">

        <button
          className="w-full sm:w-30 h-10 rounded-xl bg-red-600 text-white px-2 py-1"
          onClick={() => {
            setbudgetopen(false)
          }}
        >
          Cancel
        </button>

        <button
          onClick={() => {
            const newbudget = Number(budgetvalue)

            setbudget(newbudget)
            localStorage.setItem("monthlybudget", newbudget)

            setbudgetopen(false)
          }}
          className="w-full sm:w-30 h-10 rounded-xl bg-green-600 text-white px-2 py-1"
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

export default Dashboard
