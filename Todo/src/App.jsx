import { useEffect, useState } from 'react'

import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todo, setTodo] = useState([])

  const addTodo =(todo)=>
  {
    setTodo((prev)=>prev.concat({id:Date.now(), ...todo}));
  };

  const updateTodo=(id,todo)=>{
       setTodo((prev)=> prev.map((prevTodo)=>(prevTodo.id===id? todo: prevTodo)))
  }

  const deleteTodo =(id) =>{
    setTodo((prev)=>prev.filter((todo)=> todo.id !== id ))
  }

  const togglecheck=(id)=>{
    setTodo((prev)=>
      prev.map((prevTodo)=>
        prevTodo.id === id? 
    {...prevTodo,check: !prevTodo.check}:prevTodo))
  }

  useEffect(()=>{
    const todo = JSON.parse(localStorage.getItem("todo"))

    if(todo && todo.length>0){
      setTodo(todo)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(todo))
  },[todo])

  return (
   <TodoProvider value={{todo , addTodo, updateTodo, deleteTodo, togglecheck}}>
        <div className='bg-[#172842] min-h-screen py-8'>
            <div  className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className='text-2xl font-bold text-color text-center mb-8 mt-2'>Manage Your Todos</h1>
               <div className='mb-4'>
                <TodoForm/>
               </div>
               <div className='flex flex-wrap gap-y-3'>
                   {todo.map((todo)=>(
                    <div key={todo.id} className='w-full'>
                        <TodoItem todo ={todo}/>
                      </div>
                   ))}
               </div>
            </div>
        </div>
   </TodoProvider>
  )
}

export default App
