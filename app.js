// tu código aquí

// Usad adecadamente querySelectorAll y el método forEach para asociar el evento 'mouseover' , y que me mustre por console.log el 'globo' actual sobre el cual estamos planeando. Pista: necesitais también usar el objeto event

/* let consola = document.querySelectorAll('.balloon').addEventListener('click', (target))
console.log(consola); (mi principio de solucion)*/

document.querySelectorAll(".balloon").forEach((b) =>
  b.addEventListener("mouseover", (event) => {
    const balloon = event.target;
    balloon.style.backgroundColor = "#ededed";
    balloon.innerHTML = "POP!"
  })
);