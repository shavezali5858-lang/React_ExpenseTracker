import React, { useContext, useState } from 'react'
import { Themeprovider } from '../Context/Themecontext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
 import {faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";
 import jsPDF from "jspdf";




const COLORS = [
  "#3B82F6",
  "#EF4444",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
];

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
  Tooltip,

} from "recharts";
 import {
  BarChart,
  Bar,
 
 
} from "recharts";
import { Expenseprovider } from '../Context/Expensecontext';
import Charts from './Charts';

const Reports = () => {
 

const{darkmode,setdarkmode}=useContext(Themeprovider)
const{expenses}=useContext(Expenseprovider)

const [month, setmonth] = useState(new Date().toLocaleString("default",{month:"short"}))





const months = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

const monthlyTotals = Array(12).fill(0);
expenses.forEach((expense) => {
  const month = new Date(expense.date).getMonth();

  monthlyTotals[month] += Number(expense.amount);
});
const monthlyData = months.map((month, index) => ({
  month,
  amount: monthlyTotals[index],
}));

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






const exportpdf=()=>{
  const doc= new jsPDF();



 const monthlyTransactions = expenses.filter((expense) => {
    const expenseMonth = new Date(expense.date).toLocaleString("default", {
      month: "short",
    });

    return expenseMonth === month;
  });
   doc.setFontSize(18);
  doc.text(`Expense Report - ${month}`, 20, 20);

  // Total
  doc.setFontSize(12);
  

  // Heading
  let y = 50;
  doc.setFont(undefined, "bold");
  doc.text("Title", 20, y);
  doc.text("Category", 80, y);
  doc.text("Amount", 130, y);
  doc.text("Date", 170, y);

  doc.setFont(undefined, "normal");
  y += 10;

  // Transactions
  monthlyTransactions.forEach((expense) => {
    doc.text(expense.title, 20, y);
    doc.text(expense.category, 80, y);
    doc.text(`₹${expense.amount}`, 130, y);
    doc.text(expense.date, 170, y);

    doc.text(`Total Spent: ₹${monthlytotals[month] || 0}`, 20, 35);

    y += 10;

    // New page if needed
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save(`${month}_Expense_Report.pdf`);
};











  return (
  <div className={`min-h-screen w-full p-3 sm:p-4 lg:p-6 ${
  darkmode ? 'bg-black' : 'bg-white'
}`}>

    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
  <h1 className={`text-2xl font-semibold p-2 ${
    darkmode ? 'text-gray-400' : 'text-black'
  }`}>
    REPORTS
  </h1>

  <button
    className={`w-full sm:w-30 h-10 px-2 py-1 rounded-xl active:scale-105 ${
      darkmode
        ? 'bg-blue-700 text-white'
        : 'bg-blue-500 text-white'
    }`}
    onClick={exportpdf}
  >
    <FontAwesomeIcon icon={faDownload} /> Export
  </button>
</div>



<div className="mt-5 w-full h-80 sm:h-96 bg-slate-50 rounded-xl border border-slate-300 p-3 sm:p-5">

<h1 className="font-semibold mb-5">
Monthly Expense Trend
</h1>

<ResponsiveContainer width="100%" height="90%">

<LineChart data={monthlyData}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="amount"
stroke="#3B82F6"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>










<div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mt-8">


     <div className={`h-70 w-full lg:w-110 overflow-hidden rounded-xl ${
  darkmode
    ? 'bg-neutral-800'
    : 'bg-slate-50 border border-slate-300'
}`}>
      
      <h1 className={`ml-4 mt-2 font-semibold ${darkmode ?'text-gray-400':'text-zinc-800'}`}>Monthly expense</h1>
      
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={monthlydata}>
                <CartesianGrid strokeDasharray="3 3" />
      
      
                <XAxis dataKey="month" />
      
                <YAxis />
      
                {/* <Tooltip /> */}
      
               
  
            <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
              {monthlydata.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
              </BarChart>
            </ResponsiveContainer>
      
    
      </div> 




      <div className={`w-full lg:w-130 h-auto min-h-80 rounded-xl ${
  darkmode
    ? 'border border-gray-500 bg-neutral-800'
    : 'border border-gray-400 bg-white'
}`}>
        <h1 className={`font-semibold p-4 text-xl ${darkmode ?'text-gray-400':'text-black'}`}>Total spent Month-wise </h1>


<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10">
        <h2 className={` p-2 ${darkmode ?'text-gray-400':'text-black'}`}>Select month</h2>

      <select
  className={`w-full sm:w-auto rounded-xl ${
    darkmode
      ? 'text-gray-400 border border-gray-400'
      : 'text-black border border-gray-300'
  }`}
  value={month}
  onChange={(e) => {
    setmonth(e.target.value)
  }}
>
           <option value="" className={`${darkmode ?'text-white bg-black':'text-black'}`}>🗓️</option>
          <option  value="Jan" className={`${darkmode ?'text-white bg-black':'text-black'}`}> Jan</option>
<option value="Feb" className={`${darkmode ?'text-white bg-black':'text-black'}`}> Feb</option>
<option  value="Mar" className={`${darkmode ?'text-white bg-black':'text-black'}`}> Mar</option>
<option value="Apr" className={`${darkmode ?'text-white bg-black':'text-black'}`}> Apr</option>
<option value="May" className={`${darkmode ?'text-white bg-black':'text-black'}`}> May</option>
<option value="Jun" className={`${darkmode ?'text-white bg-black':'text-black'}`}> Jun</option>
<option value="Jul" className={`${darkmode ?'text-white bg-black':'text-black'}`}> Jul</option>
<option value="Aug" className={`${darkmode ?'text-white bg-black':'text-black'}`}> Aug</option>
<option value="Sept" className={`${darkmode ?'text-white bg-black':'text-black'}`}> Sep</option>
<option value="Oct" className={`${darkmode ?'text-white bg-black':'text-black'}`}> Oct</option>
<option value="Nov" className={`${darkmode ?'text-white bg-black':'text-black'}`}> Nov</option>
<option value="Dec" className={`${darkmode ?'text-white bg-black':'text-black'}`}> Dec</option>
 </select>


        </div>



       <div className={`h-30 w-full sm:w-[90%] sm:ml-5 mt-8 rounded-xl ${
  darkmode
    ? 'bg-neutral-800 text-gray-400 border border-gray-500'
    : 'bg-slate-200 text-black'
}`}>
<h2 className={`p-4 font-semibold ${darkmode? 'text-blue-500':'text-blue-700'}`} >Total spent in {month}</h2>
<h1 className={`font-bold p-4 text-2xl ${darkmode? 'text-gray-400 ':'text-black'}`}><FontAwesomeIcon icon={faIndianRupeeSign} />
{monthlytotals[month] || 0}</h1>

        </div>





       




      </div>




      
 
</div>

    </div>
  )
}

export default Reports
