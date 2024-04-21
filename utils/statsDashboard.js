//*********************************************************/
// Funciones para calcular las estadisticas del dashboard
//*********************************************************/

function numeroDePersonasReg(jsonData){
    // removemos duplicados
    var clean = jsonData.filter((arr, index, self) =>
        index === self.findIndex((t) =>
            (t.save === jsonData.save && t.State === jsonData.State)))

    return Object.keys(clean).length;
}

function statsSociosDashboard(jsonData){
   
    // 1. Cantidad total de personas registradas: nro. de socios
    const nroSocios = numeroDePersonasReg(jsonData);
    const jsonStats = {'nroSocios':[nroSocios]};
    
    // 2. Promedio de edad de los socios de racing
    equipo = 'Racing';
    const edadAvgSociosRacing = avgEdadSociosPorEquipo(jsonData, equipo);
    return jsonStats;
}



module.exports = statsSociosDashboard;