        // URL de la API que devuelve los datos JSON
        const API_URL = 'http://192.168.1.12:8000/api/empleados/';

        // Función para cargar y mostrar los empleados
        async function cargarEmpleados() {
            console.log("Iniciando la carga de empleados...");
            json.load
            try {
                // Realiza la solicitud a la API
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
                }

                // Carga los datos JSON desde la respuesta
                const empleados = await response.json();
                console.log("Datos cargados:", empleados);

                // Referencia al elemento de la tabla
                const tabla = document.getElementById('empleadosTabla');
                tabla.innerHTML = ''; // Limpiar la tabla antes de llenarla

                // Iterar y crear filas para cada empleado
                empleados.forEach(empleado => {
                    const fila = document.createElement('tr');
                    fila.innerHTML = `
                        <td>${empleado.id_usuario || '-'}</td>
                        <td>${empleado.nombre || '-'}</td>
                        <td>${empleado.apellido || '-'}</td>
                        <td>${empleado.rut || '-'}</td>
                        <td>${empleado.fecha_nacimiento || '-'}</td>
                        <td>${empleado.telefono || '-'}</td>
                        <td>${empleado.correo_electronico || '-'}</td>
                        <td>${empleado.salario || '-'}</td>
                    `;
                    tabla.appendChild(fila);
                });
            } catch (error) {
                console.error("Error al cargar los empleados:", error);
            }
        }

        // Llama a la función al cargar la página
        document.addEventListener("DOMContentLoaded", cargarEmpleados);