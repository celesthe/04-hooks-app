import * as z from "zod";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number
}

export type TaskAction =
    | { type: 'ADD-TODO', payload: string }
    | { type: 'TOGGLE-TODO', payload: number }
    | { type: 'DELETE-TODO', payload: number }

const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
});

const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number(),
});

export const getTaskInitialState = (): TaskState => {
    const localStorageStage = localStorage.getItem('task-state');
    if (!localStorageStage) {
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0
        }

    }
    const result = TaskStateSchema.safeParse(JSON.parse(localStorageStage));
    if (result.error) {
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0
        }
    }
    // return JSON.parse(localStorageStage);

    return result.data;
}

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

    switch (action.type) {
        case 'ADD-TODO': {

            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };

            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1
            };
        }
        case 'TOGGLE-TODO':
            {
                const updatedTodos = state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                })
                return {
                    ...state,
                    todos: updatedTodos,
                    completed: updatedTodos.filter((todo) => todo.completed).length,
                    pending: updatedTodos.filter((todo) => !todo.completed).length

                }
            }

        case 'DELETE-TODO': {
            const currentTodos = state.todos.filter((todo) => todo.id != action.payload);

            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != action.payload),
                length: currentTodos.length,
                completed: currentTodos.filter((todo) => todo.completed).length,
                pending: currentTodos.filter((todo) => !todo.completed).length
            }
        }

        default:
            return state;
    }



}