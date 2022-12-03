alert(`Bienvenido a mi pagina`);

let app = document.getElementById(`typewriter`);

let typewriter = new typewriter(app,{
    loop: true,
    delay: 75,
});

typewriter
  .pausefor(2500)
  .typeString(`Desarrollo sitios wed y escribo articulos sobre programacion`);
  .pausefor(200)
  .deleteChars(10)
  .start() ;
  