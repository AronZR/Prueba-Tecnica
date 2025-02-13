const {response} = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const {generarJWT} = require('../helpers/jwt');

const crearUsuario = async(req, res = response) => {

    const {email, password} = req.body

    try {

        let usuario = await Usuario.findOne({email});

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'correo en uso'
            });
        }

        usuario = new Usuario(req.body);

        // encriptar contraseña 
        const salt = bcrypt.genSaltSync(2);
        usuario.password = bcrypt.hashSync(password, salt);
    
        await usuario.save();

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);


    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'hablar con administrador'
        });
    }

}

const login = async(req, res = response) => {

    const { email, password} = req.body;

    try {
        
        const usuario = await Usuario.findOne({email});
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'no existe un user con este email'
            });
        }

        // confirmar passwords
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'password invalido',
            });
        }

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);



        return res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token: token
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg: 'hablar con administrador'
        });
    }


    
}

const revalidarToken = async(req, res = response) => {

    const {uid, name} = req;
     

    const token = await generarJWT(uid, name);

    return res.json({
        ok: true,
        uid, name,
        token
    });
}


module.exports = {
    crearUsuario,
    login,
    revalidarToken
}