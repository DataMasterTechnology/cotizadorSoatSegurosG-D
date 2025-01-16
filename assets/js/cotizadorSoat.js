 // Datos de la tabla
 const datos = {
  "MOTOS": {
    "MÁS DE 200": { total: 773300, comision: 15000 },
    "CICLOMOTOR": { total: 132900, comision: 15000 },
    "MENOS DE 100": { total: 258400, comision: 15000 },
    "DE 100 A 200": { total: 341300, comision: 15000 },
    "MOTOCARRO, TRICIMOTO, CUATRICICLO": { total: 382800, comision: 15000 },
    "MOTOCARRO 5 PASAJEROS": { total: 382800, comision: 15000 }
  },
  "AUTOMÓVILES FAMILIARES": {
    "MENOS DE 1.500 MODELOS DESDE 2014 HASTA 2023": { total: 460300, comision: 15000 },
    "MENOS DE 1.500 MODELOS DESDE 2013 HACIA ATRÁS": { total: 605400, comision: 15000 },
    "1.500 A 2.500 MODELOS DESDE 2014 HASTA 2023": { total: 557400, comision: 15000 },
    "1.500 A 2.500 MODELOS DESDE 2013 HACIA ATRÁS": { total: 689700, comision: 15000 },
    "MÁS DE 2.500 MODELOS DESDE 2014 HASTA 2023": { total: 648500, comision: 15000 },
    "MÁS DE 2.500 MODELOS DESDE 2013 HACIA ATRÁS": { total: 766300, comision: 15000 }
  },
  "CAMPEROS O CAMIONETAS": {
    "MENOS DE 1.500 MODELOS DESDE 2014 HASTA 2023": { total: 809600, comision: 20000 },
    "MENOS DE 1.500 MODELOS DESDE 2013 HACIA ATRÁS": { total: 969200, comision: 20000 },
    "1.500 A 2.500 MODELOS DESDE 2014 HASTA 2023": { total: 962800, comision: 20000 },
    "1.500 A 2.500 MODELOS DESDE 2013 HACIA ATRÁS": { total: 1136800, comision: 20000 },
    "MÁS DE 2.500 MODELOS DESDE 2014 HASTA 2023": { total: 1120900, comision: 15000 },
    "MÁS DE 2.500 MODELOS DESDE 2013 HACIA ATRÁS": { total: 1289000, comision: 20000 }
  },
  "VEHÍCULOS PARA 6 O MÁS PASAJEROS": {
    "MENOS DE 2.500 MODELOS DESDE 2014 HASTA 2023": { total: 819100, comision: 25000 },
    "MENOS DE 2.500 MODELOS DESDE 2013 HACIA ATRÁS": { total: 1038600, comision: 25000 },
    "MÁS DE 2.500 MODELOS DESDE 2014 HASTA 2023": { total: 1088000, comision: 25000 },
    "MÁS DE 2.500 MODELOS DESDE 2013 HACIA ATRÁS": { total: 1301400, comision: 25000 }
  },
  "CARGA O MIXTO": {
    "MENOS DE 5 TON": { total: 909700, comision: 25000 },
    "DE 5 A 15 TON": { total: 1302600, comision: 25000 },
    "MÁS DE 15 TON": { total: 1640500, comision: 25000 }
  },
  "OFICIALES, ESPECIALES, AMBULANCIAS, BOMBEROS, DIPLOMATICOS": {
    "MENOS DE 1.500": { total: 1020500, comision: 25000 },
    "1.500 A 2.500": { total: 1280100, comision: 25000 },
    "MÁS DE 2.500": { total: 1529700, comision: 25000 }
  },
  "BUSES Y BUSETAS, MICROBUSES": {
    "MÁS DE 12 PASAJEROS": { total: 665000, comision: 25000 }
  },
  "VEHÍCULOS DE SERVICIO PÚBLICO, INTERMUNICIPAL, ESCOLAR Y TURISMO": {
    "MENOS DE 10 PASAJEROS": { total: 657700, comision: 25000 },
    "10 O MÁS PASAJEROS": { total: 942700, comision: 25000 }
  },
  "AUTOS DE NEGOCIO, TAXIS Y MICROBUSES URBANOS HASTA 12 PASAJEROS": {
    "MENOS DE 1.500 MODELOS DESDE 2014 HASTA 2023": { total: 292900, comision: 25000 },
    "MENOS DE 1.500 MODELOS DESDE 2013 HACIA ATRÁS": { total: 359500, comision: 25000 },
    "1.500 A 2.500 MODELOS DESDE 2014 HASTA 2023": { total: 357700, comision: 25000 },
    "1.500 A 2.500 MODELOS DESDE 2013 HACIA ATRÁS": { total: 435900, comision: 25000 },
    "MÁS DE 2.500 MODELOS DESDE 2014 HASTA 2023": { total: 454000, comision: 25000 },
    "MÁS DE 2.500 MODELOS DESDE 2013 HACIA ATRÁS": { total: 528200, comision: 25000 }
  }
};

 // Referencias a elementos del DOM
 const tipoSelect = document.getElementById("tipo");
 const caracteristicasSelect = document.getElementById("caracteristicas");
 const resultadoDiv = document.getElementById("resultado");

 // Poblar las opciones del tipo
 Object.keys(datos).forEach(tipo => {
   const option = document.createElement("option");
   option.value = tipo;
   option.textContent = tipo;
   tipoSelect.appendChild(option);
 });

 // Evento para actualizar características según el tipo
 tipoSelect.addEventListener("change", () => {
   caracteristicasSelect.innerHTML = '<option value="" disabled selected>Seleccione características</option>';
   const tipoSeleccionado = tipoSelect.value;

   if (tipoSeleccionado) {
     caracteristicasSelect.disabled = false;

     Object.keys(datos[tipoSeleccionado]).forEach(caracteristica => {
       const option = document.createElement("option");
       option.value = caracteristica;
       option.textContent = caracteristica;
       caracteristicasSelect.appendChild(option);
     });
   } else {
     caracteristicasSelect.disabled = true;
   }

   mostrarResultado(); // Limpiar resultado
 });

 // Evento para mostrar el resultado
 caracteristicasSelect.addEventListener("change", mostrarResultado);

 // Función para mostrar resultado
 function mostrarResultado() {
   const tipo = tipoSelect.value;
   const caracteristica = caracteristicasSelect.value;

   if (tipo && caracteristica) {
     const { total, comision } = datos[tipo][caracteristica];
     resultadoDiv.classList.replace("alert-info", "alert-success");
     resultadoDiv.textContent = `Total: $${total.toLocaleString()} - Comisión: $${comision.toLocaleString()}`;
   } else {
     resultadoDiv.classList.replace("alert-success", "alert-info");
     resultadoDiv.textContent = "Seleccione ambas opciones para ver el resultado.";
   }
 }