import React from "react";

const TaskItems = ({ deleteKrde, task }) => {
  return (
    <>
      <div className="taskList">
        {task.map((item) => (
          <div className="taskItems" key={item.kaam+item.din}>
            <span className="textTask">{item.kaam}</span>
            <span className="textTask">{item.din}</span>




            <button
              type="button"
              className="btn btn-danger"
              onClick={(e) => deleteKrde(e, item)}
            >
              Delete
            </button>




          </div>
        ))}
      </div>
    </>
  );
};

export default TaskItems;
