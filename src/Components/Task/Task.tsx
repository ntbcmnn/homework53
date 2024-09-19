import React from 'react';
import './Task.css';

interface ITask {
    text: string;
    id: string;
    onDeleteTask: React.MouseEventHandler;
}

const Task: React.FC<ITask> = ({text, id, onDeleteTask}) => {
    return (
        <div id={id} className="taskContainer">
            <p className="taskText">{text}</p>
            <button type="button" onClick={onDeleteTask} className="taskBtn"></button>
        </div>
    );
};

export default Task;