import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { motion } from "framer-motion";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }

            return todo;
        })

        setTodos(updatedTodos);
    };

    const removeTodo = id => {
        const removedTodos = [...todos].filter(todo => todo.id !== id);

        setTodos(removedTodos);
    };

    return(
        <div class="bg-gray-600 p-5 max-w-sm mx-auto rounded-xl shadow-md  justify-center">
            <motion.h1 ini initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} class="header text-purple-300">Simple Todo App</motion.h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
        </div>
    );
}