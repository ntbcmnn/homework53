import {useState} from 'react';
import './App.css';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm.tsx';
import Task from './Components/Task/Task.tsx';

interface Props {
    text: string;
    id: string;
}

const App = () => {
    const [tasks, setTasks] = useState<Props[]>([
        {text: 'Write code', id: '0'},
        {text: 'Do something', id: '1'},
    ]);

    const [currentTask, setCurrentTask] = useState('');

    const addTask = (): void => {
        if (currentTask.trim()) {
            const newTask: Props = {
                text: currentTask,
                id: Date.now().toString()
            };

            setTasks([...tasks, newTask]);
            setCurrentTask('');
        }
    };

    const deleteTask = (id: string): void => {
        return setTasks(tasks.filter((task: Props): boolean => task.id !== id));
    };

    return (
        <>
            <AddTaskForm
                currentTask={currentTask}
                onChangeTask={(e) => setCurrentTask(e.target.value)}
                onAddTask={addTask}
            />

            {
                tasks.map(task =>
                    <Task
                        key={task.id}
                        text={task.text}
                        id={task.id}
                        onDeleteTask={() => deleteTask(task.id)}
                    />
                )
            }
        </>
    );
};

export default App;
