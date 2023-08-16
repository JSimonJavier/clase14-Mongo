const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://javisimon22:dJrUwMt8jA9kgApw@data-base.shzhzce.mongodb.net/"
// const propiedadModel = require("./model/index.model.js")
const petModel = require("./model/pet.model.js")

app.use(express.json())

const connectToMongo = async () => {
  try{
    await mongoose.connect(url)
    app.listen(8000, () => {
      console.log("Escuchando en el puerto 8000 y base de datos conectada");
    })
  } catch(error){
    console.log(error);
  }
} //-> para hacer la conexion

connectToMongo()