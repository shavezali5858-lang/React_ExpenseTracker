import React, { useContext, useState } from 'react'
import { Themeprovider } from '../Context/Themecontext';





const Transactionmodal = ({onClose,addexpense,expense}) => {

const{darkmode,setdarkmode}=useContext(Themeprovider)
  

const handlesubmit=(e)=>{
  e.preventDefault();

  const newExpense={
    title,
    amount,
    category,
    date,

  }

  addexpense(newExpense);
  onClose();

}







const [title, settitle] = useState(expense?.title || " ")
const [amount, setamount] = useState(expense?.amount ||" ")
const [category, setcategory] = useState(expense?.category ||" food")
const [date, setdate] = useState(expense?.date ||" ")




  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">

 <div className={`p-5 sm:p-6 rounded-lg w-[90%] sm:w-100 max-h-[90vh] overflow-y-auto relative ${
  darkmode ? 'bg-neutral-800' : 'bg-white'
}`}>


<h1 className={`font-bold text-xl p-3 ${darkmode ?'text-white':'text-blue-600'} `}>Add Expense</h1>

<button className='  absolute top-4 right-4 w-10 h-10 bg-red-600 text-white' 
onClick={onClose}
>X</button>


<form className='flex flex-col gap-6' onSubmit={handlesubmit} >

<input
  type="text"
  placeholder="Enter Title"
  className={`border p-2 ${
    darkmode
      ? 'border-gray-500 text-white placeholder:text-gray-400'
      : 'border-slate-300 text-black placeholder:text-gray-500'
  }`}
  value={title}
  onChange={(e) => {
    settitle(e.target.value)
  }}
/>



<input type="text" placeholder='Enter amount' className={`border p-2 ${darkmode ?'border-gray-500 text-white':'border-slate-300'}` }
value={amount}
onChange={(e)=>{
    setamount(e.target.value)
}}
/>


<select  className={`w-full p-1 border ${darkmode ?'border-gray-500 text-white':'border-slate-300 text-black'} `}  value={category} onChange={(e)=>{setcategory(e.target.value)}}>
  <option className={`${darkmode ?'text-white bg-black':'text-black'}`}>select category</option>

<option className={`${darkmode ?'text-white bg-black':'text-black'}`} >Food</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`} >shopping</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>travel</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>rent</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>Entertainment</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>Health</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>Household stuff</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>Transport</option>
<option className={`${darkmode ?'text-white bg-black':'text-black'}`}>others</option>

</select>



<input type="date" className={`border p-2 ${darkmode ?'border-gray-500 text-white':'border-slate-300 text-black'}` } value={date} onChange={(e)=>{
    setdate(e.target.value)
}} />


<button
  className='w-full sm:w-35 h-10 bg-red-700 text-white rounded-xl px-3 py-2 sm:ml-15 active:scale-105'
  type='submit'
>
  ADD
</button>


</form>




 </div>

      
    </div>
  )
}

export default Transactionmodal
