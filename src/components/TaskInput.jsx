import React from "react";

const TaskInput = ({KuchLikhRha,addKrow,dateDaal}) => {
  return (
    <>
      {" "}
      <div className="take">
        <input type="text" className="taskName" onInput={(e)=>KuchLikhRha(e)} />

        <input type="date" className="taskName" 
        onInput={(e)=>dateDaal(e)}/>

        <button type="button" className="btn btn-success"
        onClick={addKrow}>
          Add
        </button>

      </div>
    </>
  );
};

export default TaskInput;
