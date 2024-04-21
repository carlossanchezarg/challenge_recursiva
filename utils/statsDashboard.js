//*********************************************************/
// Funciones para calcular las estadisticas del dashboard
//*********************************************************/

// Funcion que remueve registros duplicados en el JSON
function removeDuplicates(jsonData){
    // removemos registros duplicados
    var clean = jsonData.filter((arr, index, self) =>
        index === self.findIndex((t) =>
            (t.save === jsonData.save && t.State === jsonData.State))
    );

    return clean;
}

// Funcion que calcula el numero de personas registradas
function numeroDePersonasReg(jsonData){
    return Object.keys(jsonData).length;
}

// Funcion que calcula el promedio de edad de los socios de un equipo
function avgEdadSociosPorEquipo(jsonData, equipo){
    // filtramos por equipo
    const sociosEquipo = jsonData.filter(socio => socio.Equipo === equipo);
    const nroSocios = Object.keys(sociosEquipo).length;
    const sumaEdades = sociosEquipo.reduce((acc, socio) => acc + parseInt(socio.Edad), 0);
    return sumaEdades/nroSocios;
}


// Funcion que obtiene una lista de las primeras 100 personas registradas casadas y con estudios universitarios
function personasCasadasConEstudios(jsonData){  
    const personasCasadasConEstudios = jsonData.filter(socio => socio.EstadoCivil === 'Casado' && socio.NivelDeEstudios === 'Universitario');
    // ordenar de menor a mayor segun su edad
    personasCasadasConEstudios.sort((a, b) => parseInt(a.Edad) - parseInt(b.Edad));
    return personasCasadasConEstudios.slice(0, 100);
}

// Funcion que obtiene el listado de los 5 nombres mas comunes de socios de un equipo
function top5NombresMasComunes(jsonData, equipo){
    // filtramos por equipo
    const sociosEquipo = jsonData.filter(socio => socio.Equipo === equipo);
    const nombres = sociosEquipo.map(socio => socio.Nombre);
    const nombresUnicos = [...new Set(nombres)];
    const nombresCount = nombresUnicos.map(nombre => {
        return {
            nombre: nombre,
            count: nombres.filter(n => n === nombre).length
        }
    });
    nombresCount.sort((a, b) => b.count - a.count);
    return nombresCount.slice(0, 5);
}

// Funcion que genera el listado de todos los equipos detallando edad promedio, menor edad y maxima edad.
function statsEquipos(jsonData){
    const equipos = [...new Set(jsonData.map(socio => socio.Equipo))];
    const stats = equipos.map(equipo => {
        const sociosEquipo = jsonData.filter(socio => socio.Equipo === equipo);
        const nroSocios = Object.keys(sociosEquipo).length;
        const edades = sociosEquipo.map(socio => socio.Edad);
        const edadAvg = edades.reduce((acc, edad) => acc + parseInt(edad), 0) / nroSocios;
        const edadMin = Math.min(...edades);
        const edadMax = Math.max(...edades);
        return {
            equipo: equipo,
            nroSocios: nroSocios,
            edadAvg: Math.round(edadAvg),
            edadMin: edadMin,
            edadMax: edadMax
        }
    });
    return stats;
}


function statsSociosDashboard(jsonData){
    // removemos registros duplicados
    //jsonData = removeDuplicates(jsonData);

    // 1. Cantidad total de personas registradas: nro. de socios
    const nroSocios = numeroDePersonasReg(jsonData);
    
    // 2. Promedio de edad de los socios de racing
    const edadAvgSociosRacing = Math.round(avgEdadSociosPorEquipo(jsonData, "Racing"));
    
    // 3. Listado de las primeras 100 personas registradas casadas y con estudios universitarios
    const personasCasadasConEstudiosList = personasCasadasConEstudios(jsonData);

    // 4. Listado de los 5 nombres mas comunes de socios de Racing
    const top5NombresRacing = top5NombresMasComunes(jsonData, "Racing");

    // 5. Listado de todos los equipos detallando edad promedio, menor edad y maxima edad.
    const statsEquiposList = statsEquipos(jsonData);

    const jsonStats = {'nroSocios':[nroSocios],
                        'edadAvgSociosRacing':[edadAvgSociosRacing],
                        'personasCasadasConEstudiosList':personasCasadasConEstudiosList,
                        'top5NombresRacing':top5NombresRacing,
                        'statsEquiposList':statsEquiposList
                    };

    return jsonStats;
}

module.exports = statsSociosDashboard;