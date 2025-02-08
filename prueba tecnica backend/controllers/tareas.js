const { response } = require("express");
const Tarea = require("../models/Tarea");



const getTasks = async(req, res = response) => {

    const tareas = await Tarea.find()    
                              .populate('user', 'name');
    res.json({
        ok: true, 
        tareas
    });
}

const crearTask = async(req, res = response) => {

    const tarea = new Tarea(req.body);
    try {
        
        tarea.user = req.uid;
        
        const tareaDB = await tarea.save();
        
        return res.json({
            ok: true,
            tarea: tareaDB
        });

    } catch (error) {
        console.log(req);

        console.log(error);
        return res.status(500).json({
            ok: false, 
            msg: 'error'
        });
    }
}

const actualizarTask = async(req, res = response) => {

    const tareaId = req.params.id;
    const uid = req.uid;

    try {
        
        const tarea = await Tarea.findById(tareaId);

        if(!tarea) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe tarea con ese id'
            });
        }

        if(tarea.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'no puede editar esta tarea'
            });
        }

        const nuevaTarea = {
            ...req.body,
            user: uid
        }

        const tareaActualizada = await Tarea.findByIdAndUpdate(tareaId, nuevaTarea, {new: true});

        res.json({
            ok: true,
            tarea: tareaActualizada
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error interno'
        });
    }
}

const eliminarTask = async(req, res = response) => {
    
    const tareaId = req.params.id;
    const uid = req.uid;

    try {
        
        const tarea = await Tarea.findById(tareaId);

        if(!tarea) {
            return res.status(404).json({
                ok: false,
                msg: 'no existe tarea con ese id'
            });
        }

        if(tarea.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'no puede eliminar esta tarea'
            });
        }



        await Tarea.findByIdAndDelete(tareaId);

        res.json({ok: true});


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error interno'
        });
    }
}



module.exports = {
    getTasks,
    crearTask,
    actualizarTask,
    eliminarTask
}