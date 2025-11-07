window.addEventListener("load", () =>{

    const footer = document.getElementById("footer");
    const header = document.getElementById("header");


    let tiempo = new Date();
    let fecha = tiempo.getDay() + "/" + (tiempo.getMonth() + 1) + "/" + tiempo.getFullYear();
    let hora = tiempo.getHours() + ":" + tiempo.getMinutes() + ":" + tiempo.getSeconds();

    header.textContent = `Bienvenido a unCurrito - ${fecha} / ${hora}`;
    footer.textContent = `© ${tiempo.getFullYear()} unCurrito. Todos los derechos reservados.`;
});