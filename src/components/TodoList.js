import React, {useState} from 'react';
import {connect} from "react-redux";
import Task from "./Task";
import AddNewTask from "./AddNewTask";

const TodoList = ({todoList}) => {


    const [completedTask, setCompletedTask] = useState(false);

    const onChecked = (id) => {
        const completedList = todoList.map(task => task.id === id ? {...task, completed: !completedTask } : task)
        setCompletedTask(completedList)
    }

    return (
        <div>
            <AddNewTask />
            {todoList.map((el) => (
                <Task
                    task={el}
                    key={el.id}
                />

            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    todoList: state.todoList,

})

export default connect(mapStateToProps)(TodoList);
