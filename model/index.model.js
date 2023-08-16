const mongoose = require("mongoose")

const propiedadModel = new mongoose.Schema({
  direccion:{
    calle:{type: String, required: true},
    barrio:{type: String, required: true},
    numero:{type: Number, required: true}
  },
  tipo: {
    type: String,
    required: [true, "el tipo de propiedad es requerido"],
    lowercase: true,
    trim: true,
    enum: {
      value: ["departamento", "casa", "ph"],
      message: "Tipo incorrecto"
    }
  },
  operacion: {
    type: String,
    enum: ["alquiler", "venta"]
  },
  fechaVenta: {type: Date},
  antiguedad: {
    type: Number,
    min: [0, "no puede ser negativo"],
    max: [30, "demasiado vieja"]
  },
  precio: {type: Number},
  visitantes: [{
    apellido: {type: String},
    fecha: {type: Date}
  }]
})

module.exports = mongoose.model("modeloPropiedad", propiedadModel)