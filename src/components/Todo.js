import { motion } from "framer-motion";

export default function Todo({ todos, completeTodo, removeTodo }) {
    return (
        todos.map((todo, index) => (
            <div class="flex justify-between p-2">
                <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ delay: 0.2 }} key={index} class={`w-full ${todo.isComplete ? `bg-green-500` : `bg-gray-500`} rounded-l-md p-2`}>
                    <p key={todo.id} class="break-all">{todo.text}</p>
                </motion.div>
                <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => completeTodo(todo.id)} class={`${todo.isComplete ? `btn-gray` : `btn-green`}`}>
                    {
                        todo.isComplete ?
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                    }
                </motion.button>
                <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => removeTodo(todo.id)} class="btn-red rounded-r-md">
                    <svg class="w-8 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </motion.button>
            </div>
        ))
    );
}