import {createContext , useContext} from 'react'

export const TodoConext = createContext({
    todos:[
       { id: 1,
        todo:"text",
        check: false,
    }
    ],

    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo:(id)=>{},
    togglecheck:(id)=>{}
})


export const useTodo =()=>{
    return useContext(TodoConext)
}

export const TodoProvider = TodoConext.Provider