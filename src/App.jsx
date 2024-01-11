import React, { useState } from "react";
import Box from "./components/Box";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskItems from "./components/TaskItems";
const App = () => {
  const [task, settask] = useState([]);
  const [likho, setlikho] = useState("");
  const [date, setdate] = useState("")

  const KuchLikhRha = (e) => {
    setlikho(e.target.value);
    console.log(likho);
  };
  const dateDaal=(e)=>{
    setdate(e.target.value)
    console.log(e.target.value)
  }
  const addKrow = () => {
    let currTask = likho;
    let currDate= date;
    console.log(currTask,currDate)
    let oldArr = [...task, {kaam:currTask,din:currDate}];
    settask(oldArr);
  };



  const deleteKrde = (e, item) => {
    console.log(e, item);
    let oldArr = [...task]
    const index = oldArr.indexOf(item);
    if (index > -1) { 
      oldArr.splice(index,1)
    } 
    console.log(index)
    settask(oldArr)
  };
  return (
    <>
      <div className="container">
        <Box />

        <TaskInput KuchLikhRha={KuchLikhRha} addKrow={addKrow} dateDaal={dateDaal}/>


        <TaskItems 
        task={task} deleteKrde={deleteKrde} />


        {
          task.length===0 && <div className="emptyWala">All Task are finished</div>
        }
      </div>
    </>
  );
};

export default App;
