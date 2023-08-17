import { Tipo } from "./Tipo";
export class Pelicula{

    private nombre:string
    private director:string
    private listGenero:Array<Tipo>
    private duracion:number
    private anio:number
    private calificacion:number

    constructor(nombre:string, director:string,  duracion:number, anio:number, calificacion:number, listGenero:Tipo[]){
        this.nombre = nombre
        this.director = director
        this.duracion = duracion
        this.anio = anio
        this.calificacion = calificacion
        this.listGenero = listGenero
    }

    //Metodo geters
    
    public getNombre():string{
        return this.nombre
    }
    public getDirector():string{
        return this.director 
    }
    /*getGenero():tipo{
        return this.genero 
    }*/
    public getDuracion():number{
        return this.duracion 
    }
    public getAnio():number{
        return this.anio 
    }
    public getCalificacion():number{
        return this.calificacion
    }

    // Metodos seters

    public setNombre(nomber:string){
        this.nombre = this.nombre
    }
    public setDirector(director:string){
        this.director = director
    }
    
    public setDuracion(duracion:number){
        this.duracion = duracion
    }
    public setAnio(anio:number){
        this.anio = anio
    }
    public setCalificacion(calificacion:number){
        this.calificacion = calificacion
    }

    public Imprimir(){
        console.log("nombre de la pelicula: " + this.nombre +
                "\ndirector de la pelicula: " + this.director +
                "\nduracion de la pelicula: " + this.duracion +
                "\nannio de la pelicula: " + this.anio + 
                "\ncalificacion de la pelicula: " + this.calificacion+
                "\nGenero de la pelicula: ")
                for(let i =0 ;i< this.listGenero.length; i++){
                    console.log(this.listGenero[i].getNombre())
                    }
               
                    
                    
                
    }

    private esPeliculaEpica():boolean{
        if (this.duracion >= 180) {
            return true
        }
        else {
            return false
        }
        
    }

    private calcularValoracion():string{
        if ((this.calificacion >= 0) && (this.calificacion <= 2)) {
            return "Muy mala"    
        }
        else if ((this.calificacion>2) && (this.calificacion<=5)){
            return "Mala"    
        }
        else if ((this.calificacion>5) && (this.calificacion<=7)){
            return "Regular"    
        }
        else if ((this.calificacion>7) && (this.calificacion<=8)){
            return "Buena"    
        }
        else if((this.calificacion>8) && (this.calificacion<=10)){
            return "Excelente"    
        }
        else {
            return "No tiene asignada una valoracion valida"
        }
        
    }

    public esSimilar(pelicula2:Pelicula){
        if (this.calificacion==pelicula2.calificacion) {
          
           
            for(let i=0; i<this.listGenero.length;i++){
                for(let j=0; j<pelicula2.listGenero.length;j++){
                    if (this.listGenero[i]==pelicula2.listGenero[j]) {
                        //console.log("--Las peliculas son similares--");
                        return  true
                    }
                    else {
                        return false
                    }
                  
                }
            }
        }
        else{
            return false
            
        }
    }

}