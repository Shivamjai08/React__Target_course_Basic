import { createContext, useContext, useState } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        },
    ]);

    // ➕ Add Todo
    const addTodo = (todo) => {
        setTodos((prev) => [...prev, todo]);
    };

    // ✏️ Update Todo
    const updateTodo = (id, updatedTodo) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? updatedTodo : todo
            )
        );
    };

    // ❌ Delete Todo
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    // ✅ Toggle Complete
    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                updateTodo,
                deleteTodo,
                toggleComplete,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => {const Context=useContext(TodoContext);
if (!Context){
    throw new Error("useTodo must be used inside TodoProvider")
}
return Context;
};