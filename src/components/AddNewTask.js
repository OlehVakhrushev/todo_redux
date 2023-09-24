import React, {useState} from 'react';
import {connect} from "react-redux";

const AddNewTask = ({createTask}) => {

    const [inputTaskName, setInputTaskName] = useState('')


    function submit() {
        createTask({name: inputTaskName, id: Date.now()});
        setInputTaskName('')

    }

    return (
        <div>
            <input value={inputTaskName} onChange={(event) => setInputTaskName(event.target.value)}/>
            <button
                onClick={submit}
                disabled={!inputTaskName}
            > Add </button>
        </div>
    );
};

const mapsDispatchToProps = (dispatch) => ({
    createTask: (newTask) => dispatch({type: 'CREATE_TASK', payload: newTask})
})


export default connect(null, mapsDispatchToProps)(AddNewTask);
