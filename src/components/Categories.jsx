import React, { useContext, useState } from 'react'
import { Themeprovider } from '../Context/Themecontext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";
 import { Expenseprovider } from '../Context/Expensecontext';
 import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const Categories = () => {


const {darkmode,setdarkmode}=useContext(Themeprovider);
const{expenses}=useContext(Expenseprovider);

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#F97316",
  "#EF4444",
  "#A855F7",
  "#EAB308",
  "#14B8A6",
  "#EC4899",
];


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


const categoryTotals = {};

expenses.forEach((expense) => {
  if (!categoryTotals[expense.category]) {
    categoryTotals[expense.category] = 0;
  }

  categoryTotals[expense.category] += Number(expense.amount);
});

let topcategory = "";
let maxamount = 0;

for (const category in categoryTotals) {
  if (categoryTotals[category] > maxamount) {
    maxamount = categoryTotals[category];
    topcategory = category;
  }
}

let totalSpending = 0;

expenses.forEach((expense) => {
  totalSpending += Number(expense.amount);
});

let averageSpending = 0;

if (expenses.length > 0) {
  averageSpending = totalSpending / expenses.length;
}



  return (
    <div
  className={`min-h-screen w-full p-3 sm:p-4 lg:p-6 ${
    darkmode ? "bg-black text-white" : "bg-white text-black"
  }`}
>
      <div
  className={`w-full h-[350px] sm:h-96 mt-5 sm:mt-6 rounded-xl p-3 sm:p-4 ${
    darkmode
      ? "bg-neutral-800 border border-gray-700"
      : "bg-slate-50 border border-slate-300"
  }`}
>
  <h2
    className={`font-semibold text-lg ${
      darkmode ? "text-gray-300" : "text-black"
    }`}
  >
    Category-wise Spending
  </h2>

  <ResponsiveContainer width="100%" height="90%">
    <PieChart>
      <Pie
        data={chartdata}
        cx="50%"
        cy="50%"
        outerRadius={100}
        dataKey="value"
        nameKey="name"
        label
      >
        {chartdata.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-5">
<div
  className={`w-full min-h-32 rounded-xl p-4 sm:p-5 ${
    darkmode
      ? "bg-neutral-800 border border-gray-700"
      : "bg-slate-50 border border-slate-300"
  }`}
>
  <h2 className="text-sm sm:text-base font-medium text-gray-500">
    Top Category
  </h2>

  <h1 className="text-xl sm:text-2xl font-bold mt-3">
    {topcategory || "No expenses"}
  </h1>

  <p className="text-sm sm:text-base mt-1 text-gray-500">
    ₹ {maxamount.toFixed(2)}
  </p>
</div>



<div
  className={`w-full min-h-32 rounded-xl p-4 sm:p-5 ${
    darkmode
      ? "bg-neutral-800 border border-gray-700"
      : "bg-slate-50 border border-slate-300"
  }`}
>
  <h2 className="text-sm sm:text-base font-medium text-gray-500">
    Average Spending
  </h2>

  <h1 className="text-xl sm:text-2xl font-bold mt-3">
    ₹ {averageSpending.toFixed(2)}
  </h1>

  <p className="text-sm sm:text-base mt-1 text-gray-500">
    per transaction
  </p>
</div>

</div>


    </div>
  )
}

export default Categories
