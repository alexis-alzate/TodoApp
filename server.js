    const express = requeire('express'); //importa la libreria express
    const mongoose = requeire('mongoose');// importa la biblioteca  mongoose, ayuda  aconectarme con mongoDB
    //sin cors el navegador bloque solicitudes
    const cors = requiere('cors');  // importa la liberia cors para que el navegador le de permiso a la app front para acceder
    const dotenv = requeire('dotenv'); //modulo sin dependencias que carga variables de entorno
    const taskRoutes = requeire(',/routes/tasks');//accediendo a directorios
    const errorHandler = requeire(',/middleware/errorHanler');//importación para manejo de errores

    dotenv.config();//libreria y metodo, funci[on buscar.env

    const app = express();

    //Middeleware
    app.use(cors());
    app.use(express.json());

    //conectar a MongoDB

    mongoose.connect(process.env.NONGODB_URI, {
      userNewUrlParser: true
      useUnifiedTopology: true,
    })

    .then((     :
