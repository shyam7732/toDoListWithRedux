import { createSlice } from "@reduxjs/toolkit";

export const list = createSlice({
    name: "todo",
    initialState: {
        input:"",
        tasks: [],
        editing: false,
        complet: [],
    },
    reducers: {
        setInput: (state, action) => {
            state.input = action.payload
        },
        setTasks: (state, action) => {
            if(state.editing !== false){
                state.tasks[state.editing] = state.input
                state.editing = false

            }else{
                state.tasks = [...state.tasks, state.input]
            }   
            state.input = ""    
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task,index) => {
                return index !== action.payload
            })
            state.complet = state.complet.filter((task, index) => {
                if( index === action.payload){
                    return false
                }else{
                    return true

                }
            })
        },
        editTask: (state, action) => {
            state.editing = action.payload
            state.input = state.tasks[action.payload]
        },
        setComplet: (state, action) => {
            state.complet = [...state.complet, action.payload]
        }

    }  
})
export const { setInput, setTasks, deleteTask, editTask, setComplet } = list.actions
export default list.reducer

