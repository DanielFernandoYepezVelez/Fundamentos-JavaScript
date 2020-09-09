class Libro {
    constructor() {}

    getInfoBooks() {
        let books = [];

        for (let index = 0; index < 2; index++) {
            const titulo = window.prompt(`Ingresar Titulo Del Libro #${index + 1}`);
            const autor = window.prompt(`Ingresar Autor Del Libro #${index + 1}`);
            const año = window.prompt(`Ingresar Año De Lanzamiento Del Libro #${index + 1}`);
            const genero = window.prompt(`Ingresar Genero Del Libro #${index + 1}`);

            const infoBook = {
                titulo,
                autor,
                año,
                genero
            }

            books.push(infoBook);
        }

        return books;
    }

    infoCompleted() {
        const infoCompleted = this.getInfoBooks();

        console.log('               Información Completa              ');
        infoCompleted.forEach((book, index) => {
            console.log(`Titulo Del Libro #${index + 1} => ${book.titulo}`);
            console.log(`Autor Del Libro #${index + 1} => ${book.autor}`);
            console.log(`Año Del Libro #${index + 1} => ${book.año}`);
            console.log(`Genero Del Libro #${index + 1} => ${book.genero}`);
            console.log('---------');
        });
        console.log('--------------------------------');

        this.infoBook(infoCompleted);
        this.getGender(infoCompleted);
    }

    infoBook(infoBook) {
        let informacion = infoBook;

        console.log('');
        console.log('               Titulo De Los Libros              ');
        informacion.forEach((title, index) => {
            console.log(`Titulo Del Libro #${index + 1} => ${title.titulo}`);
        });
        console.log('--------------------------------');
        this.infoAuthor(informacion);
    }

    infoAuthor(infoAuthor) {
        console.log('');
        console.log('               Autor De Los Libros              ');
        infoAuthor.forEach((author, index) => {
            console.log(`Autor Del Libro #${index + 1} => ${author.autor}`);
        });
        console.log('--------------------------------');
    }

    getGender(infoCompleted) {
        let opcion = 0;

        do {
            opcion = parseInt(prompt('Ingrese Una Opción Para El Género => \n1.Aventuras \n2.Terror \n3.Fantasia'));

            if (opcion <= 0 || opcion > 3) {
                window.confirm('Ingresa Una Opción Válida Del Menú');

            } else {
                infoCompleted.forEach((genero) => {
                    if (opcion === 1) {
                        if (genero.genero === 'Aventuras' || genero.genero === 'aventuras') {
                            console.log(genero);
                        }
                    } else if (opcion === 2) {
                        if (genero.genero === 'Terror' || genero.genero === 'terror') {
                            console.log(genero);
                        }
                    } else if (opcion === 3) {
                        if (genero.genero === 'Fantasia' || genero.genero === 'fantasia') {
                            console.log(genero);
                        }
                    }
                });
            }
        } while (opcion <= 0 || opcion > 3);
    }
}

const libro = new Libro();
libro.infoCompleted();