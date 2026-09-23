import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
 import { faHouse } from "@fortawesome/free-solid-svg-icons";
  import { faBars } from "@fortawesome/free-solid-svg-icons";
   import { faChartSimple } from "@fortawesome/free-solid-svg-icons"; 
   import { faTag} from "@fortawesome/free-solid-svg-icons";
    import { faUser} from "@fortawesome/free-solid-svg-icons";
     import { faGear} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Settings from "./Settings";
import { Themeprovider } from "../Context/Themecontext";

const Sidebar = () => {

  const{darkmode,setdarkmode}=useContext(Themeprovider)

const [settingopen, setsettingopen] = useState(false)

  return (
  <aside className={`w-16 md:w-64 h-screen fixed left-0 top-0 border-r border-slate-200 p-3 md:p-5 flex flex-col ${
  darkmode ? 'bg-black' : 'bg-slate-50'
}`}>
      <h1 className={`font-serif text-2xl py-5 text-center ${
  darkmode ? 'text-white' : 'text-black'
}`}>
  <FontAwesomeIcon icon={faWallet} className="text-blue-600" />

  <span className="hidden md:inline ml-2">
    Expensify
  </span>
</h1>

    <p className={`hidden md:block px-3 ${
  darkmode ? 'text-white' : 'text-slate-400'
}`}>
  Main
</p>

      <nav className="flex flex-col gap-5 px-3 py-2">
       <Link
  to="/"
  className={`transition-all duration-200 text-lg flex items-center gap-3 justify-center md:justify-start ${
    darkmode
      ? 'text-gray-400 hover:bg-blue-100 hover:text-blue-600'
      : 'text-slate-700 hover:bg-blue-100 hover:text-blue-600'
  }`}
>
  <FontAwesomeIcon icon={faHouse} />

  <span className="hidden md:inline">
    Dashboard
  </span>
</Link>


<Link
  to="/expenses"
  className={`transition-all duration-200 text-lg flex items-center gap-3 justify-center md:justify-start ${
    darkmode
      ? 'text-gray-400 hover:bg-blue-100 hover:text-blue-600'
      : 'text-slate-700 hover:bg-blue-100 hover:text-blue-600'
  }`}
>
 <FontAwesomeIcon icon={faBars} />

  <span className="hidden md:inline">
    Expenses
  </span>
</Link>


<Link
  to="/reports"
  className={`transition-all duration-200 text-lg flex items-center gap-3 justify-center md:justify-start ${
    darkmode
      ? 'text-gray-400 hover:bg-blue-100 hover:text-blue-600'
      : 'text-slate-700 hover:bg-blue-100 hover:text-blue-600'
  }`}
>
<FontAwesomeIcon icon={faChartSimple} />

  <span className="hidden md:inline">
    Reports
  </span>
</Link>


<Link
  to="/categories"
  className={`transition-all duration-200 text-lg flex items-center gap-3 justify-center md:justify-start ${
    darkmode
      ? 'text-gray-400 hover:bg-blue-100 hover:text-blue-600'
      : 'text-slate-700 hover:bg-blue-100 hover:text-blue-600'
  }`}
>
<FontAwesomeIcon icon={faTag} />

  <span className="hidden md:inline">
    Categories
  </span>
</Link>




        
        
       
      </nav>

     <p className={`hidden md:block ml-4 mt-8 ${
  darkmode ? 'text-white' : 'text-slate-400'
}`}>
  Account
</p><div className="px-3 py-2 flex items-center justify-center md:justify-start gap-3">
  <FontAwesomeIcon icon={faUser} />

  <span className="hidden md:inline">
    Profile
  </span>
</div>


<div className="mt-auto px-3 py-2">
    <button className={` font-semibold ${darkmode ? 'text-gray-300':'text-slate-400'} `} onClick={()=>{
      setsettingopen(true)
      
    }}> <FontAwesomeIcon icon={faGear} className={` text-lg mr-2 ${darkmode ?'text-gray-300':'text-black'}`} />
    
    Settings</button>
</div>



{settingopen && (
  <Settings
  onClose={()=>{
    setsettingopen(false);
  }}
  />
)}


    </aside>
  );
};

export default Sidebar;