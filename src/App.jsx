import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./companent/home";
import Qoshilish from "./companent/Qoshilish";

function App() {
  const [madal, setMadal] = useState(false);
  const [state, setSteet] = useState({
    name: "",
    surname: "",
    age: undefined,
  });
  const [stateValyu, setStateValyu] = useState([]);
  const cheked = () => {
    const clik = {
      name: state.name,
      surname: state.surname,
      age: state.age,
      id: new Date().getTime(),
    };
    setStateValyu([...stateValyu, clik]);
    setSteet({
      name: "",
      surname: "",
      age: "",
    });
    setMadal(false);
  };
  const delet = (id) => {
    const ochirish = stateValyu.filter((item) => item.id !== id);

    setStateValyu(ochirish);
  };
  return (
    <>
      <Home madal={madal} setMadal={setMadal} />
      <Qoshilish
        madal={madal}
        setMadal={setMadal}
        state={state}
        setSteet={setSteet}
        stateValyu={stateValyu}
        setStateValyu={setStateValyu}
        cheked={cheked}
        delet={delet}
      />
    </>
  );
}

export default App;
