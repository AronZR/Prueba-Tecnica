import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'task',
    initialState: {

        tasks: [],
        activeTask: {},
        // active: {
        //     id: '',
        //     tarea: '',
        //     descripcion: '',
        //     estatus: ''
        // }
    },
    reducers: {
        setActiveTask: (state, {payload}) => {
            state.activeTask = payload;
        },
        onSavingTask: (state, {payload}) => {
            state.tasks.push(payload);
            state.activeTask = {};
        },
        setTasks: (state, {payload}) => {
            state.tasks = payload.tareas;
        },
        updateTask: (state, {payload}) => {
            state.tasks= state.tasks.map(task => {

                if(task.id === payload.id) {
                    return payload
                }

                return task
            })
            state.activeTask = {};
        },
        deleteTaskById: (state) => {
            state.tasks = state.tasks.filter(task => task.id !== state.activeTask.id );
            state.activeTask = {};
        },
        cleanTask: (state) => {
            state.activeTask = {}
        }
    }
});
// Action creators are generated for each case reducer function
export const { 
    onSavingTask, 
    setActiveTask,
    setTasks,
    updateTask,
    deleteTaskById,
    cleanTask
} = taskSlice.actions;