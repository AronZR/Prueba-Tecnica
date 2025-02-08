const {Schema, model} = require("mongoose");

const tareaSchema= Schema({
    tarea: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estatus: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

});


tareaSchema.method('toJSON', function() {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object
});


module.exports = model('Tarea', tareaSchema);