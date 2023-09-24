const initialState = {
    appHeader: 'TO DO LIST',
    todoList: [
        {
            id: 1,
            name: 'Learn Redux',
            completed: false,
        },
        {
            id: 2,
            name: 'Learn Redux-server',
            completed: false,
        },
    ]
}


const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'CREATE_TASK':
            return {...state, todoList: [...state.todoList, action.payload]}
        case 'DELETE_TASK':
            return {...state, todoList: state.todoList.filter(el => el.id !== action.payload)}
        case 'EDIT_TASK':
            return {...state, todoList: state.todoList.map(el => el.id === action.payload.id ? {...el, name: action.payload.name} : el)}
        case 'COMPLETE_TASK':
            return {...state, todoList: state.todoList.map(el => el.id === action.payload.id ? {...el, completed: !action.payload.completed} : el)}
        default:
            return state
    }
}


export default reducer;
