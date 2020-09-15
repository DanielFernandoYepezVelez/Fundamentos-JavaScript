/* Referencia De La Base De Datos */
let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB() {
    /* Crear La Base De Datos */
    let crmDB = indexedDB.open('crm', 1);

    /* Si Existe Un Error En La Creacion De La DB */
    crmDB.onerror = function() {
        console.log('Hubo En Un Error En La Creación De La Base De Datos');
    }

    /* Si Se Creo Correctamente La DB */
    crmDB.onsuccess = function() {
        console.log('La Base De Datos Se Creo Exitasamente');
        /* Referencia De La Base De Datos */
        DB = crmDB.result;
    }

    /* Configuración De La Base De Datos */

    /* Como Este Método Se Ejecuta Una Sola Vez, Entonces Aqui
    Se Crean Las Columnas Que Va Tener Mi CRMDB Cuando Se Va A Crear
    La Base De Datos Por Primera Vez */
    crmDB.onupgradeneeded = function(e) {
        /* Referencia De La Base De Datos */
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        /* Definir Las Columnas De La Base De Datos */
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas Creadas Finalmente');
    }
}

/* Para Un CRUD Con Esta Base De Datos Se Deben Ejecutar Algo Llamado TRANSACCIONES */
function crearCliente() {
    /* Referencia A La Base De Datos Y Los Permisos Que Va A Tener(Lectura Y Escritura) */
    let transaction = DB.transaction(['crm'], 'readwrite');

    /* Si La Transacción Es Completada Exitosamenrte */
    transaction.oncomplete = function() {
        console.log('Transacción Completada');
    }

    /* Si Existe Un Error Al Momento De Ejecutar La Transacción */
    transaction.onerror = function() {
        console.log('Hubo Un Error En La Transaction');
    }

    /* Referencia De Las Columnas De La Base De Datos */
    const objectStore = transaction.objectStore('crm');

    /* Objeto Literal */
    const nuevoCliente = {
        telefono: 2838338833,
        nombre: 'Daniel',
        email: 'dani.@gmail.com'
    };

    /* Aqui Aplicamos Los Métodos(CRUD) add, put, delete */
    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
}