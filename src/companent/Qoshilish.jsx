import React from "react";

function Qoshilish({
  state,
  setSteet,
  stateValyu,
  setStateValyu,
  cheked,
  delet,
  madal,
  setMadal,
}) {
  return (
    <>
      <div>
        {madal && (
          <div onClick={() => setMadal(false)} className="bg-slate-200 p-32  ">
            <div
              onClick={(e) => e.stopPropagation()}
              className=" m-auto text-center bg-blue-200 h-[350px] pt-20 w-[300px] rounded"
            >
              <div>
                <p>ism</p>
                <input
                  value={state.name}
                  onChange={(e) => {
                    const new_arr = {
                      ...state,
                      name: e.currentTarget.value,
                    };
                    setSteet(new_arr);
                  }}
                  className=" border border-black rounded"
                  type="text"
                />
              </div>
              <div>
                <p>familya</p>
                <input
                  value={state.surname}
                  onChange={(e) => {
                    const new_arr = {
                      ...state,
                      surname: e.currentTarget.value,
                    };
                    setSteet(new_arr);
                  }}
                  className=" border border-black rounded"
                  type="text"
                />
              </div>
              <div>
                <p>Yosh</p>
                <input
                  value={state.age}
                  onChange={(e) => {
                    const new_arr = {
                      ...state,
                      age: e.currentTarget.value,
                    };
                    setSteet(new_arr);
                  }}
                  className=" border border-black rounded"
                  type="number"
                />
              </div>
              <button
                onClick={cheked}
                className=" text-white bg-green-700 px-4 py-1 rounded"
              >
                clik
              </button>
            </div>
          </div>
        )}
      </div>
      {stateValyu.map((itme) => (
        <div
          key={itme.id}
          className=" flex w-[500px] border border-blue-950 justify-between p-3"
        >
          <p className=" border border-blue-950  px-2">{itme.name}</p>
          <p className=" border border-blue-950  px-2">{itme.surname}</p>
          <p className=" border border-blue-950  px-2">{itme.age}</p>
          <button onClick={() => delet(itme.id)} className="  text-2xl">
            x
          </button>
        </div>
      ))}
    </>
  );
}

export default Qoshilish;
