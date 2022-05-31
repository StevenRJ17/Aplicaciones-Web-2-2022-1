
/* Ejercicio-1.	
    Crear una función que reciba N como parámetro y genere 
    la tabla de multiplicar por consola de este parámetro. */

function tablaDeMultiplicar(tabla){

for(i=1; i<=10; i++){
    console.log(tabla + "X" + i + "=" + (tabla*i))
}

}
tablaDeMultiplicar(5);