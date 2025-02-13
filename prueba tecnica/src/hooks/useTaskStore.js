import { useDispatch, useSelector } from "react-redux"
import { taskApi } from "../api";
import { cleanTask, deleteTaskById, onSavingTask, setActiveTask, setTasks, updateTask } from "../store/tasks/taskSlice";

export const useTaskStore = () => {
    const {tasks, activeTask} = useSelector(state => state.task);
    const dispatch = useDispatch();

    const startCreatingTask = async(task) => {

        if(task.id) {
            const {data} =  await taskApi.put(`/tareas/${task.id}`, 
                {data: task}
            );
            
            dispatch(updateTask(data.tarea));

        }else {
            const {data} =  await taskApi.post('/tareas', 
                {tarea: task.tarea, descripcion: task.descripcion, estatus: task.estatus}
            );
            
            dispatch(onSavingTask(data.tarea));
        }
    }  

    const getTasks = async() => {
        const {data} =  await taskApi.get('/tareas');
        dispatch(setTasks({tareas: data.tareas}));
    }

    const deleteTask = async(task) => {
        await taskApi.delete(`/tareas/${task.id}`)
        dispatch(deleteTaskById(task.id))
    }

    const startSetActiveTask = (data) => {
        dispatch(setActiveTask({id: data.id, tarea: data.tarea, descripcion: data.descripcion, estatus: data.estatus}));

    }

    return {
        // propiedades
        tasks, activeTask,
        // metodos
        startCreatingTask,
        deleteTask,
        getTasks,
        startSetActiveTask,
    }
}

