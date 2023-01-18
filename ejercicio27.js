// 27) Programa una clase llamada Pelicula.
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica
//     de cada película.
// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
    constructor({
        id,
        titulo,
        director,
        estreno,
        pais,
        generos,
        calificacion,
    }) {
        this.validateId(id);
        this.validateTitulo(titulo);
        this.validateDirector(director);
        this.validateEstreno(estreno);
        this.validatePais(pais);
        this.validateGeneros(generos);
        this.validateCalificacion(calificacion);
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
    }
    //Creamos el metodo estatico que devuelve los generos aceptados: let genres = Pelicula.getGenAcep();
    static getGenAcep() {
        return [
            "Action",
            "Adult",
            "Adventure",
            "Animation",
            "Biography",
            "Comedy",
            "Crime",
            "Documentary",
            "Drama",
            "Family",
            "Fantasy",
            "Film Noir",
            "Game-Show",
            "History",
            "Horror",
            "Musical",
            "Music",
            "Mystery",
            "News",
            "Reality-TV",
            "Romance",
            "Sci-Fi",
            "Short",
            "Sport",
            "Talk-Show",
            "Thriller",
            "War",
            "Western",
        ];
    }
    //creamos el metodo que devuelve la ficha tecnica de la pelìcula en un objeto
    getInfo() {
        return {
            id: this.id,
            titulo: this.titulo,
            director: this.director,
            estreno: this.estreno,
            pais: this.pais,
            generos: this.generos,
            calificacion: this.calificacion,
        };
    }
    validateChain(prop, valor) {
        if (!valor) throw new Error(`${prop} y ${valor} estan vacios`);
        if (typeof valor !== "string")
            throw new Error(
                `${prop} el valor ingresado ${valor}, no es una cadena de texto`
            );
        if (!/\S/.test(valor)) {
            throw new Error(`${prop} no debe ser solo espacios en blanco`);
        }
        return true;
    }
    validateLongChain(prop, valor, long) {
        if (valor.length > long) {
            throw new Error(
                `${prop} "${valor}" no tiene el numero de caracteres permitidos`
            );
        }
        return true;
    }
    //validacion para arreglos
    validateArray(prop, valor) {
        if (!valor) {
            throw new Error(`${prop}El nombre del ${valor} es necesario`);
        }
        //validamos que el valor sea introducido en forma de array
        if (!Array.isArray(valor)) {
            throw new Error(`${valor} debe ser un arreglo`);
        }
        //validamos que el valor introducido sea cadena
        for (let chain of valor) {
            if (typeof chain !== "string") {
                throw new Error(`El valor ${chain} no es cadena de texto`);
            }
        return true
        }
        // validamos que tenga datos el valor
        if (valor.length === 0) {
            throw new Error(`El ${valor} ingresado,no tiene datos`);
        }
        return true;
    }
    validateId(id) {
        //validamos que introduscan el id
        if (!this.validateChain("IMDB id", id)) {
            throw new Error("Debes llenar los campos de id y su contenido");
        }
        //validamos que el id conrresponda a las caracteristicas pedidas
        const idRegExp = /^[a-zA-Z]{2}[0-9]{7}$/;
        if (!idRegExp.test(id)) {
            throw new Error(`El id ${id} es invalido`);
        }
    }
    validateTitulo(titulo) {
        //validamos que introduscan el nombre
        if (!this.validateChain("nombre del titulo", titulo)) {
            throw new Error("Debes ingresar el titulo y el nombre");
        }
        //validamos que no supere los 100 caracteres
        if (!this.validateLongChain("titulo", titulo, 100)) {
            throw new Error("El titulo no debe exceder los 100 caracteres");
        }
    }
    validateDirector(director) {
        //validamos que introduscan el nombre
        if (!director) {
            throw new Error("El nombre del director es necesario");
        }
        //validamos que no supere los 50 caracteres
        if (!this.validateLongChain("director", director, 50)) {
            throw new Error("El titulo no debe exceder los 50 caracteres");
        }
        //validamos el formato nombre
        const nomRegExp = /^[a-zA-Z\s']+$/;
        if (!nomRegExp.test(director)) {
            throw new Error("El nombre es invalido");
        }
    }
    validateEstreno(estreno) {
        //validamos que introduscan año
        if (!estreno) {
            throw new Error("Debes ingresar el año de estreno");
        }
        //validamos que el año sea numero
        if (!Number.isInteger(estreno)) {
            throw new Error("Estreno debe ser numero");
        }
        if (!/\S/.test(estreno)) {
            throw new Error(`${prop} no debe ser solo espacios en blanco`);
        }
        //validamos que el numero no supere los 4 digitos
        if (estreno.toString().length !== 4) {
            throw new Error("Estreno debe ser un numero de 4 digitos");
        }
    }
    validatePais(pais) {
        if (!this.validateArray("pais", pais)) {
            throw new Error("Pais no debe estar vacio y/o debe ser un array");
        }
    }
    validateGeneros(generos) {
        if (!this.validateArray("generos", generos)) {
            throw new Error("Pais no debe estar vacio y/o debe ser un array");
        }
        let aceptedGenres = [
            "Action",
            "Adult",
            "Adventure",
            "Animation",
            "Biography",
            "Comedy",
            "Crime",
            "Documentary",
            "Drama",
            "Family",
            "Fantasy",
            "Film Noir",
            "Game-Show",
            "History",
            "Horror",
            "Musical",
            "Music",
            "Mystery",
            "News",
            "Reality-TV",
            "Romance",
            "Sci-Fi",
            "Short",
            "Sport",
            "Talk-Show",
            "Thriller",
            "War",
            "Western",
        ];
        if (!generos.every((g) => aceptedGenres.includes(g))) {
            throw new Error("Generos invalidos");
        }
    }
    validateCalificacion(calificacion) {
        //verificamos que introduscan una calificacion
        if (!calificacion) {
            throw new Error("Debes ingrasar una calificacion");
        }
        //verificamos que la calificacion introducida sea numero
        if (typeof calificacion !== "number") {
            throw new Error("la calificacion debe ser un numero");
        }
        //verificamos que la calificacion sea un numero entre 0 y 10
        if (calificacion < 0 || calificacion > 10) {
            throw new Error("Calificacion debe ser un numero entre 0 y 10");
        }
    }
}

const pelicula = new Pelicula({
    id: "tt0019130",
    titulo: "El hombre que rie",
    director: "Paul Leni",
    estreno: 1928,
    pais: ["Mexico"],
    generos: ["Drama", "Mystery", "Horror"],
    calificacion: 7.98,
});

console.log(pelicula.getInfo());
