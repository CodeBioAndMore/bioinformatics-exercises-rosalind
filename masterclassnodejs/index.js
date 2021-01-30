const express = require('express')
const bodyParser = require('body-parser');//librería para poder recojer los datos introducidos
const app = express()
const port = 3000;

//requiero los archivos de ruta
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

//líneas de configuración de la librería bodyparser para que mi backend pueda recoger datos de un formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

//utilizar la ruta que requiero/importo arriba del archivo
app.use('/', indexRouter);
app.use('/user', userRouter);

/*
//Método GET
//localhost:3000 + lo que ponga en el primer parámetro de esa ruta
//app.get es una solicitud a través del navegador
app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/codebioandmore/page1', (req, res) => {
    res.send('HolaMundo!!!')
})

//Método POST
//Nosotros recivimos datos desde el formulario.
app.post('/enviar', (req, res) => {
    console.log('esta es la ruta POST');

    //el request es la petición, pide al backend los datos, 
    //los datos que llegan a través del cuerpo del mensaje.
    let datos = req.body
    console.log(datos);
    
    res.send('enviaaar')
})
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})