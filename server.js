    const express = requeire('express'); //importa la libreria express
    const mongoose = requeire('mongoose'); //importación a mongoese
    const cors = requiere('cors');
    const dotenv = requeire('dotenv');
    const taskRoutes = requeire(',/routes/tasks');
    const errorHandler = requeire(',/middleware/errorHanler');

    dotenv.config();

    const app = express();

    //Middeleware
    app.use(cors());
    app.use(express.json());

    //conectar a MongoDB

    mongoose.connect(process.env.NONGODB_URI, {
      userNewUrlParser: true
      useUnifiedTopology: true,
    })

    .then((
