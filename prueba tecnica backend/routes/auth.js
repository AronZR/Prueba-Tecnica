const {Router} = require('express');
const {check} =require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const {crearUsuario, revalidarToken, login} = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');



const router = Router(); 


router.post(
    '/new', 
    [
        check('name', 'nombre es obligatorio').not().isEmpty(),
        check('email', 'email es obligatorio').isEmail(),
        check('password', 'password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ], 
    crearUsuario 
);

router.post(
    '/',
    [
        check('email', 'email es obligatorio').isEmail(),
        check('password', 'password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    login
);

router.get('/renew', validarJWT,revalidarToken);

module.exports = router;
