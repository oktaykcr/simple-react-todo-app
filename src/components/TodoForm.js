import { useState } from "react";
import { motion } from "framer-motion";

export default function TodoForm({ onSubmit }) {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 1000),
            isComplete: false,
            text: input
        });

        setInput('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <form className="flex justify-between p-5">
            <motion.input whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{y: -100}} animate={{y: 0}} transition={{delay:0.2}} class="bg-gray-200 w-full appearance-none border rounded-l-md py-2 px-4 text-purple-600 leading-tight focus:outline-none focus:bg-gray-200 focus:border-purple-300"
                type="text"
                placeholder="Add a todo"
                value={input}
                onChange={handleChange} />
            <motion.button initial={{y: -100}} animate={{y: 0}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="btn-purple rounded-r-md" type="submit" onClick={handleSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </motion.button>
        </form>
    );
}