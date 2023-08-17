import { Pelicula } from "./Pelicula";
import { Tipo } from "./Tipo";


let genero1 = new Tipo("1 ", "terror")
let genero2 = new Tipo("2 " , "Accion")
let genero3 = new Tipo("3 " , "aventura")
let genero4 = new Tipo("4 ", "Futurista")
let genero5 = new Tipo("5 ", "Suspenso")

let pelicula1 = new Pelicula("Avatar ", "j.W", 190, 2012, 5, [genero1, genero2,genero3])
let pelicula2 = new Pelicula("Hombres de negro", "W.T.", 150, 2010, 7, [genero2, genero3])
let pelicula3 = new Pelicula("Up grade", "M.V ", 160, 2016, 5, [genero2])

pelicula1.Imprimir();
console.log( pelicula1.esSimilar(pelicula3));
 
