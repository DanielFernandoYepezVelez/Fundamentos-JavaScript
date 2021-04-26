import Citas from '../js/class/Citas';

describe('Probar La Clase De Citas', () => {

    const citas = new Citas();
    const id = Date.now();

    test('Agregar Una Nueva Cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Daniel',
            telefono: '2867598',
            fecha: '10-12-2021',
            hora: '10:30',
            sintomas: 'Solo Duerme'
        };

        citas.agregarCita(citaObj);

        /* Prueba */
        expect(citas).toMatchSnapshot();
    });

    test('Actualizar Cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Nuevo Nombre',
            propietario: 'Daniel',
            telefono: '2867598',
            fecha: '10-12-2021',
            hora: '10:30',
            sintomas: 'Solo Duerme'
        };

        citas.editarCita(citaActualizada);
        expect(citas).toMatchSnapshot();
    });

    test('Eliminar Cita', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    });
});