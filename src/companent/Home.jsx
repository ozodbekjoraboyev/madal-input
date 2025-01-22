import React, { useState } from "react";

function Home({madal, setMadal}) {
 
  return (
    (
      <div>
        <button
          onClick={() => setMadal(true)}
          className=" border-none bg-green-800 text-white p-3 pb-4 pt-2 flex items-center gap-1 text-center  rounded text-xl"
        >
          <span className="text-2xl">+</span> Qo'shish
        </button>
      </div>
    )
  );
}
export default Home;
