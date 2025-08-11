    const express = require('express'); //importa la libreria express
    const mongoose = require('mongoose');// importa la biblioteca  mongoose, ayuda  aconectarme con mongoDB
    //sin cors el navegador bloque solicitudes
    const cors = require('cors');  // importa la liberia cors para que el navegador le de permiso a la app front para acceder
    const dotenv = require('dotenv'); //modulo sin dependencias que carga variables de entorno
    const taskRoutes = require(',/routes/tasks');//accediendo a directorios
    const errorHandler = require(',/middleware/errorHanler');//importación para manejo de errores

    dotenv.config();//libreria y metodo, funci[on buscar.env

    const app = express();

    //Middeleware
    app.use(cors()); // acepta peticiones de cualquier origen
    app.use(express.json());//traductor automatico entre cliente servidor

    //conectar a MongoDB

    mongoose.connect(process.env.NONGODB_URI, {
      userNewUrlParser: true
      useUnifiedTopology: true,
    })

    .then((     :
