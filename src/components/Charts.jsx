import React, { useContext } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  
  
  CartesianGrid,
} from "recharts";
import Themecontext, { Themeprovider } from '../Context/Themecontext';

 

const COLORS = [
  "#3B82F6",
  "#EF4444",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
];

const Charts = ({chartdata,monthlydata}) => {



const{darkmode,setdarkmode}=useContext(Themeprovider)


  return (
   <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 w-full'>


<div className={`h-70 w-full lg:w-110 overflow-hidden rounded-xl ${darkmode ?'bg-neutral-800':'bg-slate-50 border border-slate-300 '}   `}>

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






<div  className={`h-70 w-full lg:w-110 overflow-hidden rounded-xl ${darkmode ?'bg-neutral-800':'bg-slate-50 border border-slate-300 '}   `}>
<h1 className={`ml-4 mt-2 font-semibold ${darkmode ?'text-gray-400':'text-zinc-800'}`}>Expense by category</h1>

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







      
    </div>
  )
}

export default Charts
