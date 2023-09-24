import React, {useState} from 'react';
import {connect} from "react-redux";

const Task = (props) => {

    const [editedTaskName, setEditedTaskName] = useState(props.task.name)
    const [completedTask, setCompletedTask] = useState(false);

    const onChecked = () => {
        const completeTask = {...props.task, completed: !completedTask }
        setCompletedTask(completeTask)
    }




    return (
        <div>
            <input type='checkbox' checked={completedTask} onChange={() => onChecked()}
            />
            <span className={completedTask ? 'complete' : ''}>
                {props.task.name}
            </span>

            <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
            <input value={editedTaskName} onChange={(event) => setEditedTaskName(event.target.value)}/>
            <button onClick={() => props.editTask(props.task.id, editedTaskName)}>Edit</button>
            <button onClick={() => setEditedTaskName(props.task.name)}>Cancel</button>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id}),
    editTask: (id, newName) => dispatch({type: 'EDIT_TASK', payload: {id: id, name: newName}}),
    completeTask: (id) => dispatch({type: 'COMPLETE_TASK', payload: {id: id, completed: true}})
})

export default connect(null, mapDispatchToProps)(Task);
