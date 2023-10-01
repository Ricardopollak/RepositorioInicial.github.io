
/**My First JavaScript**/
/*button onclick="document.getElementById('demo').innerHTML = Date()">
"Click me to display Date and Time."
Console.log("Mi primer frase en Java");
document.getElementById('boton') .onclick =function name() {
    console.log ("capturamos el evento click");
    document.getElementsById("demo".innerHTML ("estamos probando nuestro primer evento en js"))}
**/
document.getElementsById("demo").addEventListener('click', function() {
    console.log ("Hola mundo desde listener");
    document.getElementsById("demo").innerHTML ="Estamos probando nuestro primer evento js"
});