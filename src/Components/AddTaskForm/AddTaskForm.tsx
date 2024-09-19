import React from 'react';
import './AddTaskForm.css';

interface IAddTaskForm {
    currentTask: string;
    onChangeTask: React.ChangeEventHandler<HTMLInputElement>;
    onAddTask: React.MouseEventHandler;
}

const AddTaskForm: React.FC<IAddTaskForm> = ({currentTask, onChangeTask, onAddTask}) => {
    return (
        <div className="formContainer">
            <input type="text"
                   onChange={onChangeTask}
                   placeholder="Task..."
                   value={currentTask}
                   className="formInput"
            />
            <button type="button" onClick={onAddTask} className="formBtn">Add</button>
        </div>
    );
};

export default AddTaskForm;