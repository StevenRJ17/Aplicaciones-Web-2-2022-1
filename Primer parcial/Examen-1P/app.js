const express = require('express');

app = express();

const PORT = 9000;

app.post('/', (req, res)=>{
    res.send('Ruta funcionando correctamente');
})

app.listen(PORT, ()=>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
});

const estudiantes = [
        estudiante1 = {
            "nombre": "Steven",
            "nota1": 9,
            "nota2": 7   
        },
        estudiante2 = {
            "nombre": "Ana",
            "nota1": 8,
            "nota2": 7   
        },
        estudiante3 = {
            "nombre": "Carlos",
            "nota1": 9,
            "nota2": 5   
        }
    ];
console.log(estudiantes);