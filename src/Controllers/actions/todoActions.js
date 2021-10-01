import {ADD_TODO, REMOVE_TODO, SET_NAME, SET_NOTE, SET_DESCRIPTION, SET_COMPLETED , PIN_TO_TOP, IS_MODIFY_TRUE, IS_MODIFY_FALSE } from '../actions/types'

import { v4 as uuidv4 } from 'uuid';


const addTodo = (name,date) => dispatch => {
    const task = {
        id:uuidv4(),
        completed:false,
        task:name,
        note:'',
        description:'',
        date:date
    }
    dispatch({
        type:ADD_TODO,
        payload:task
    })
}

const pinTodo = (id,todos,pinned) => dispatch =>{
    if(pinned.length > 0){
        todos.push(pinned[0])
    }
    const todo = todos.filter(item => item.id === id)
    let newTodos = todos.filter(item => item.id !== id)
    dispatch({
        type:PIN_TO_TOP,
        payload:todo,
        todos:newTodos
    })
}


const startEdit = (todo) => dispatch =>{
    dispatch({
        type:IS_MODIFY_TRUE,
        payload:todo
    })
}

const stopEdit = () => dispatch =>{
    dispatch({
        type:IS_MODIFY_FALSE,
    })
}

const handleName = (id,name,tasks) => dispatch => {
    const task =  tasks.find(item => item.id === id) 
    const index = tasks.indexOf(task)
    tasks[index].task = name 
    dispatch({
        type:SET_NAME,
        task:task,
        payload:tasks
    })
}

const handleNote = (id,note,tasks) => dispatch => {
    const task =  tasks.find(item => item.id === id) 
    const index = tasks.indexOf(task)
    tasks[index].note = note 
    dispatch({
        type:SET_NOTE,
        task:task,
        payload:tasks
    })
}

const handleDescription = (id,description,tasks) => dispatch => {
    const task =  tasks.find(item => item.id === id) 
    const index = tasks.indexOf(task)
    tasks[index].description = description 
    dispatch({
        type:SET_DESCRIPTION,
        task:task,
        payload:tasks
    })
}

const handleCompleted = (id,tasks) => dispatch => {
    const task =  tasks.find(item => item.id === id) 
    const index = tasks.indexOf(task)
    const completed = tasks[index].completed 
    if(completed){
        tasks[index].completed = false 
    }else{
        tasks[index].completed = true 
    }
    dispatch({
        type:SET_COMPLETED,
        task:task,
        payload:tasks
    })
}

const handleRemove = (id,tasks) => dispatch => {
    const newTasks = tasks.filter(task => task.id !== id)
    dispatch({
        type:REMOVE_TODO,
        payload:newTasks
    })
}

export const todoActions = {
    addTodo,
    pinTodo,
    startEdit,
    stopEdit,
    handleName,
    handleNote,
    handleDescription,
    handleCompleted,
    handleRemove
}