/* Ejercicio-1.	
    1.	Crear una función flecha que reciba un arreglo de comidas 
    y lo devuelva en mayúsculas y mejoras en su formato de presentación. */

    Array.prototype.toUpperCase = function() {
        return this.map(word => word.toUpperCase())
      };
    const comidasFavoritas = [
        "Encebollado",
        "Pure de papa con carne frita",
        "Ceviche"
    ].toUpperCase();

  const devolver = (comidasFavoritas)=>{
    for(let i=0; i<comidasFavoritas.length; i++){
        console.log(comidasFavoritas[i]);
    }
  } 
  
  devolver(comidasFavoritas);

