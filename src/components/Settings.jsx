import React, { useContext } from 'react'
import { useState } from 'react'
import Themecontext, { Themeprovider } from '../Context/Themecontext'

function Settings({onClose}) {

    const{darkmode,setdarkmode}=useContext(Themeprovider)




  return (
   <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">

  <div
    className={`w-full max-w-md min-h-80 sm:min-h-100 rounded-xl relative ${
      darkmode ? "bg-gray-800" : "bg-white"
    }`}
  >

    <h1
      className={`p-4 font-semibold text-xl ${
        darkmode ? "text-gray-300" : "text-slate-800"
      }`}
    >
      Settings
    </h1>

    <button
      className="absolute top-4 right-4 bg-red-600 text-white w-10 h-8 rounded-md"
      onClick={onClose}
    >
      X
    </button>

    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mt-5 px-5">

      <h1
        className={`font-semibold ${
          darkmode ? "text-gray-300" : "text-slate-800"
        }`}
      >
        Change theme
      </h1>

      <div
        onClick={() => setdarkmode(!darkmode)}
        className={`w-14 h-8 rounded-full cursor-pointer transition-all duration-300 ${
          darkmode ? "bg-green-500" : "bg-gray-300"
        }`}
      >

        <div
          className={`w-6 h-6 bg-white rounded-full shadow mt-1 transition-all duration-300 ${
            darkmode ? "translate-x-7" : "translate-x-1"
          }`}
        />

      </div>

      <p
        className={`font-semibold text-sm ${
          darkmode ? "text-gray-300" : "text-slate-800"
        }`}
      >
        {darkmode ? "DARK MODE" : "LIGHT MODE"}
      </p>

    </div>

  </div>

</div>
  )
}

export default Settings
