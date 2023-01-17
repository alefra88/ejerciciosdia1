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
    validateId(id) {
        //validamos que introduscan el id
        if (!id) {
            throw new Error("id is required");
        }
        //validamos que el id conrresponda a las caracteristicas pedidas
        const idRegExp = /^[a-zA-Z]{2}[0-9]{7}$/;
        if (!idRegExp.test(id)) {
            throw new Error(`El id ${id} es invalido`);
        }
    }
    validateTitulo(titulo) {
        //validamos que introduscan el nombre
        if (!titulo) {
            throw new Error("El titulo es requerido");
        }
        //validamos que no supere los 100 caracteres
        if (titulo.length > 100) {
            throw new Error("El titulo no debe exceder los 100 caracteres");
        }
    }
    validateDirector(director) {
        //validamos que introduscan el nombre
        if (!director) {
            throw new Error("El nombre del director es necesario");
        }
        //validamos que no supere los 50 caracteres
        if (director.length > 50) {
            throw new Error(
                "El nombre de director no debe exceder los 50 caracteres"
            );
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
        //validamos que el numero no supere los 4 digitos
        if (estreno.toString().length !== 4) {
            throw new Error("Estreno debe ser un numero de 4 digitos");
        }
    }
    validatePais(pais) {
        //validamos que introduscan un pais
        if (!pais) {
            throw new Error("El nombre del pais es necesario");
        }
        //validamos que el pais sea introducido en forma de arreglo
        if (!Array.isArray(pais)) {
            throw new Error("Pais debe ser un arreglo");
        }
    }
    validateGeneros(generos) {
        if (!generos) {
            //validamos que introduscan el nombre
            throw new Error("Introduce el genero");
        }
        //validamos que los generos sean introducidos en forma de array
        if (!Array.isArray(generos)) {
            throw new Error("generos debe ser un arreglo");
        }
    }
    validateCalificacion(calificacion) {
        if (!calificacion) {
            throw new Error("El nombre del director es necesario");
        }
        if (director.length > 50) {
            throw new Error(
                "El nombre de director no debe exceder los 50 caracteres"
            );
        }
    }
}
