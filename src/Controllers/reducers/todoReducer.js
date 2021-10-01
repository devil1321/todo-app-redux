import { FILTER_TODO, ADD_TODO, REMOVE_TODO, SET_NAME, SET_NOTE, SET_DESCRIPTION, SET_COMPLETED, PIN_TO_TOP, UNPIN, IS_MODIFY_TRUE, IS_MODIFY_FALSE } from '../types'
import { v4 as uuidv4 } from 'uuid';
const initData = {
    todos: [{
            id: uuidv4(),
            completed: false,
            task: 'Walk Dog',
            note: 'My Favoruite Time',
            description: '',
            date: '06/05/2021'
        },
        {
            id: uuidv4(),
            completed: true,
            task: 'Go shopping',
            note: 'Remember to buy cigaretes',
            description: '',
            date: '05/02/2020'
        },
    ],
    todo: {},
    pinned: [],
    isModify: false
}

export default (state = initData, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case PIN_TO_TOP:
            return {
                ...state,
                pinned: action.payload,
                todos: action.todos
            }
        case UNPIN:
            return {
                ...state,
                pinned: [],
                todos: action.payload
            }
        case SET_NAME:
            return {
                ...state,
                todo: action.task,
                todos: [...action.payload]
            }
        case SET_NOTE:
            return {
                ...state,
                todo: action.task,
                todos: [...action.payload]
            }
        case SET_DESCRIPTION:
            return {
                ...state,
                todo: action.task,
                todos: [...action.payload]
            }
        case SET_COMPLETED:
            return {
                ...state,
                todo: action.task,
                todos: [...action.payload]
            }
        case IS_MODIFY_TRUE:
            return {
                ...state,
                isModify: true,
                todo: action.payload
            }
        case IS_MODIFY_FALSE:
            return {
                ...state,
                isModify: false
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state
    }
}