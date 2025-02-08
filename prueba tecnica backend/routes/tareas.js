const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { getTasks, crearTask, actualizarTask, eliminarTask } = require("../controllers/tareas");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const router = Router();


// deben pasar por una validacion de token
router.use(validarJWT);


// Obtener tareas
router.get(
    '/',
    
    getTasks
);


router.post(
    '/',
    [
        check('tarea', 'la tarea es obligatoria').not().isEmpty(),
        check('descripcion', 'agregue una descripcion').not().isEmpty(),
        check('estatus', 'defina el estatus').not().isEmpty(),
        validarCampos
    ], 
    crearTask
);


router.put('/:id', actualizarTask);



router.delete('/:id', eliminarTask);



module.exports = router;