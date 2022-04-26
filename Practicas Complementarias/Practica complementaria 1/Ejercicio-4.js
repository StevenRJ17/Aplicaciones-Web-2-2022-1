/* Ejercicio-4.	
    4.	Recorrer el arreglo definido en la opción anterior y 
    mostrarlo aplicando 4 estructuras de repetición. */

    //Estructura repetitiva For
    const comidasFavoritas = [
        "Encebollado",
        "Pure de papa con carne frita",
        "Ceviche"
    ]
for(let i=0; i<comidasFavoritas.length; i++){
    console.log(comidasFavoritas[i]);
}

//Estructura repetitiva while
i=0;
while(i<comidasFavoritas.length){
    console.log(comidasFavoritas[i]);
i++;
}

//Estructura repetitiva foreach
comidasFavoritas.forEach(elemento => {
    console.log(elemento);
});

//Estructura repetitiva do While
let i=0;
do{
    console.log(comidasFavoritas[i]);
    i++;
}while (i<comidasFavoritas.length);
    
