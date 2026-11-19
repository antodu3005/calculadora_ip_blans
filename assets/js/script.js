document.addEventListener("DOMContentLoaded", () => {
    // --- Referencias del DOM: Calculadora ---
    const formEstandar = document.getElementById("formEstandar");
    const resultadoEstandar = document.getElementById("resultadoEstandar");
    const formSustitucion = document.getElementById("formSustitucion");
    const resultadoSustitucion = document.getElementById("resultadoSustitucion");

    // --- Referencias del DOM: Tabla de Nodos ---
    const tablaNodosBody = document.getElementById("tablaNodosBody");
    const seccionTabla = document.getElementById("seccionTablaNodos");
    const btnDeshacer = document.getElementById("btnDeshacer");
    const btnLimpiarStorage = document.getElementById("btnLimpiarStorage");

    // --- Referencias del DOM: Gestión de Interfaces ---
    const seccionConfiguracion = document.getElementById("seccionConfiguracion");
    const tituloConfiguracion = document.getElementById("tituloConfiguracion");
    const inputModoPuerto = document.getElementById("inputModoPuerto");
    const guiaModoPuerto = document.getElementById("guiaModoPuerto");
    const inputInterfaz = document.getElementById("inputInterfaz");
    const btnAgregarInterfaz = document.getElementById("btnAgregarInterfaz");
    const listaInterfaces = document.getElementById("listaInterfaces");
    const btnCerrarConfiguracion = document.getElementById("btnCerrarConfiguracion");

    // --- Referencias del DOM: Menú de Dispositivo ---
    const seccionMenuNodo = document.getElementById("seccionMenuNodo");
    const nombreNodoMenu = document.getElementById("nombreNodoMenu");
    const btnOpcionSwitch = document.getElementById("btnOpcionSwitch");
    const btnOpcionRouter = document.getElementById("btnOpcionRouter");

    // --- Referencias del DOM: Switch L2 ---
    const seccionSwitch = document.getElementById("seccionSwitch");
    const btnCerrarSwitch = document.getElementById("btnCerrarSwitch");
    const switchInfoVlanId = document.getElementById("switchInfoVlanId");
    const switchInfoVlanName = document.getElementById("switchInfoVlanName");
    const switchPuertoDefault = document.getElementById("switchPuertoDefault");
    const switchPuertoTrunkOpcional = document.getElementById("switchPuertoTrunkOpcional");
    const btnGenerarConfigSwitch = document.getElementById("btnGenerarConfigSwitch");
    const terminalSwitch = document.getElementById("terminalSwitch");
    const btnCopiarSwitch = document.getElementById("btnCopiarSwitch");
    const btnListoSwitch = document.getElementById("btnListoSwitch");

    // --- Referencias del DOM: Router L3 ---
    const seccionRouter = document.getElementById("seccionRouter");
    const btnCerrarRouter = document.getElementById("btnCerrarRouter");

    // DHCP
    const checkHabilitarDhcp = document.getElementById("checkHabilitarDhcp");
    const formularioDhcp = document.getElementById("formularioDhcp");
    const dhcpPoolName = document.getElementById("dhcpPoolName");
    const dhcpExcluidas = document.getElementById("dhcpExcluidas");
    const dhcpRed = document.getElementById("dhcpRed");
    const dhcpMascara = document.getElementById("dhcpMascara");
    const dhcpGateway = document.getElementById("dhcpGateway");
    const dhcpDns = document.getElementById("dhcpDns");
    const btnAgregarDhcp = document.getElementById("btnAgregarDhcp");
    const listaDhcpPools = document.getElementById("listaDhcpPools");

    // RIPv2
    const checkHabilitarRip = document.getElementById("checkHabilitarRip");
    const formularioRip = document.getElementById("formularioRip");
    const ripNetworkInput = document.getElementById("ripNetworkInput");
    const btnAgregarRipNetwork = document.getElementById("btnAgregarRipNetwork");
    const listaRipNetworks = document.getElementById("listaRipNetworks");

    // EIGRP
    const checkHabilitarEigrp = document.getElementById("checkHabilitarEigrp");
    const formularioEigrp = document.getElementById("formularioEigrp");
    const eigrpAsInput = document.getElementById("eigrpAsInput");
    const eigrpRedInput = document.getElementById("eigrpRedInput");
    const eigrpMascaraInput = document.getElementById("eigrpMascaraInput");
    const eigrpWildcardInput = document.getElementById("eigrpWildcardInput");
    const btnAgregarEigrpNetwork = document.getElementById("btnAgregarEigrpNetwork");
    const listaEigrpNetworks = document.getElementById("listaEigrpNetworks");

    // OSPF
    const checkHabilitarOspf = document.getElementById("checkHabilitarOspf");
    const formularioOspf = document.getElementById("formularioOspf");
    const ospfProcessIdInput = document.getElementById("ospfProcessIdInput");
    const ospfAreaInput = document.getElementById("ospfAreaInput");
    const ospfRedInput = document.getElementById("ospfRedInput");
    const ospfMascaraInput = document.getElementById("ospfMascaraInput");
    const ospfWildcardInput = document.getElementById("ospfWildcardInput");
    const btnAgregarOspfNetwork = document.getElementById("btnAgregarOspfNetwork");
    const btnImportarDot1qOspf = document.getElementById("btnImportarDot1qOspf");
    const listaOspfNetworks = document.getElementById("listaOspfNetworks");

    // Enrutamiento Inter-VLAN (Router-on-a-Stick / dot1Q)
    const checkHabilitarVlans = document.getElementById("checkHabilitarVlans");
    const formularioVlans = document.getElementById("formularioVlans");
    const vlanIntfFisica = document.getElementById("vlanIntfFisica");
    const vlanId = document.getElementById("vlanId");
    const vlanIp = document.getElementById("vlanIp");
    const vlanMascara = document.getElementById("vlanMascara");
    const vlanHelper = document.getElementById("vlanHelper");
    const vlanCheckNativa = document.getElementById("vlanCheckNativa");
    const btnAgregarVlan = document.getElementById("btnAgregarVlan");
    const listaVlans = document.getElementById("listaVlans");

    // Auditoría y Terminal Router
    const panelAuditoria = document.getElementById("panelAuditoria");
    const btnGenerarConfigRouter = document.getElementById("btnGenerarConfigRouter");
    const terminalRouter = document.getElementById("terminalRouter");
    const btnCopiarRouter = document.getElementById("btnCopiarRouter");
    const btnListoRouter = document.getElementById("btnListoRouter");

    // Resumen de Nodos
    const seccionResumenNodos = document.getElementById("seccionResumenNodos");
    const acordeonResumenNodos = document.getElementById("acordeonResumenNodos");

    // --- Referencias del DOM: Subneteo VLAN (VLSM / FLSM) ---
    const subRedBase = document.getElementById("subRedBase");
    const subCidrBase = document.getElementById("subCidrBase");
    const subMetodo = document.getElementById("subMetodo");
    const subSitio = document.getElementById("subSitio");
    const subSerialesCant = document.getElementById("subSerialesCant");
    const btnSubAgregarSeriales = document.getElementById("btnSubAgregarSeriales");
    const subVlanId = document.getElementById("subVlanId");
    const subNombre = document.getElementById("subNombre");
    const subHosts = document.getElementById("subHosts");
    const subCantidad = document.getElementById("subCantidad");
    const subAyudaMetodo = document.getElementById("subAyudaMetodo");
    const btnSubAgregarFila = document.getElementById("btnSubAgregarFila");
    const subFilasBody = document.getElementById("subFilasBody");
    const btnSubCalcular = document.getElementById("btnSubCalcular");
    const btnSubLimpiarFilas = document.getElementById("btnSubLimpiarFilas");
    const resultadoSubneteo = document.getElementById("resultadoSubneteo");

    // --- Referencias del DOM: Switch completo (todas las VLANs) ---
    const seccionSwitchGlobal = document.getElementById("seccionSwitchGlobal");
    const cuerpoSwitchGlobal = document.getElementById("cuerpoSwitchGlobal");
    const btnToggleSwitchGlobal = document.getElementById("btnToggleSwitchGlobal");
    const swgVlansBody = document.getElementById("swgVlansBody");
    const swgSitio = document.getElementById("swgSitio");
    const btnGenerarSwitchGlobal = document.getElementById("btnGenerarSwitchGlobal");
    const btnCopiarSwitchGlobal = document.getElementById("btnCopiarSwitchGlobal");
    const terminalSwitchGlobal = document.getElementById("terminalSwitchGlobal");

    // --- Estado General ---
    const listaNodos = [];
    const historialBorrados = [];
    let nodoSeleccionadoIndex = null;
    let intfEditIndex = null;
    let vlanIdCounter = 10;
    let ultimoNodoPrefill = null;

    const TEXTO_TERMINAL_VACIO = 'Haz clic en "Generar Código Router y Auditar" para evaluar IPs y crear script.';
    const TEXTO_SWITCH_VACIO = 'Haz clic en "Generar Script Switch" para crear los comandos de la VLAN y sus puertos.';
    const TEXTO_SWITCH_GLOBAL_VACIO = 'Llena los puertos y haz clic en "Generar Script Completo del Switch".';
    const TEXTO_ROUTERS_VACIO = 'Asigna puertos y haz clic en "Generar Script de este Router".';

    // Estado del subneteo y del switch completo
    let subFilas = [];
    let subResultado = null;
    // Configuración de switch por Red / Sitio: { seleccionado, sitios: { [sitio]: cfg } }
    let swgTodos = { seleccionado: null, sitios: {} };
    let swg = estadoSwitchGlobalVacio();

    // --- Utilidades de Sanitización y Formateo Cisco IOS ---
    function esc(valor) {
        const mapa = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
        return String(valor ?? "").replace(/[&<>"']/g, c => mapa[c]);
    }

    function nodoActual() {
        return nodoSeleccionadoIndex !== null ? (listaNodos[nodoSeleccionadoIndex] || null) : null;
    }

    function etiquetaVlan(n) {
        return n.vlanId === null ? "Sin VLAN" : `VLAN ${n.vlanId}`;
    }

    function etiquetaNodo(n) {
        return `${n.cliente}${n.sitio ? ` · ${n.sitio}` : ''} (${etiquetaVlan(n)})`;
    }

    // Invalida selectivamente Router o Switch para no perder el otro script del nodo
    function invalidarScript(nodo, tipo = "ambos") {
        if (!nodo) return;
        if (tipo === "router" || tipo === "ambos") {
            nodo.scriptGenerado = null;
            nodo.scriptRouter = null;
            nodo.auditoriaLogs = [];
            terminalRouter.textContent = TEXTO_TERMINAL_VACIO;
            btnListoRouter.style.display = "none";
            panelAuditoria.style.display = "none";
        }
        if (tipo === "switch" || tipo === "ambos") {
            nodo.scriptSwitch = null;
            terminalSwitch.textContent = TEXTO_SWITCH_VACIO;
            btnListoSwitch.style.display = "none";
        }
    }

    function guardEdit() {
        if (intfEditIndex !== null) {
            alert("Por favor, guarda o cancela la edición de la interfaz actual antes de continuar.");
            return false;
        }
        return true;
    }

    function limpiarFormularioDhcp() {
        dhcpPoolName.value = "";
        dhcpExcluidas.value = "";
        dhcpRed.value = "";
        dhcpMascara.value = "";
        dhcpGateway.value = "";
        dhcpDns.value = "";
    }

    function limpiarFormularioVlans() {
        vlanIntfFisica.value = "";
        vlanId.value = "";
        vlanIp.value = "";
        vlanMascara.value = "";
        vlanHelper.value = "";
        vlanCheckNativa.checked = false;
    }

    function formatearInterfazCisco(nombreRaw, forzarInicioEnUno = false) {
        let limpio = String(nombreRaw || "").trim().toLowerCase().replace(/\s+/g, "");
        let prefijo = "";
        let resto = limpio;

        const match = limpio.match(/^(fastethernet|fa|f|gigabitethernet|gig|gi|g|serial|se|s|loopback|lo)(.+)$/);
        if (match) {
            const p = match[1];
            resto = match[2];
            if (p.startsWith("f")) prefijo = "fastEthernet ";
            else if (p.startsWith("g")) prefijo = "gigabitEthernet ";
            else if (p.startsWith("s")) prefijo = "serial ";
            else if (p.startsWith("l")) prefijo = "loopback ";
        }

        if (forzarInicioEnUno) {
            resto = resto.replace(/\/0(?=-|$)/g, "/1");
        }

        if (resto.includes("-")) {
            const partes = resto.split("-");
            return `${prefijo}${partes[0]} - ${partes[1]}`;
        }
        return `${prefijo}${resto}`;
    }

    function tienePuertoCeroDeSwitch(nombreRaw) {
        const limpio = String(nombreRaw || "").trim().toLowerCase().replace(/\s+/g, "");
        return /\/0(?:-|$)/.test(limpio);
    }

    function canonIntf(raw) {
        const l = String(raw || "").trim().toLowerCase().replace(/\s+/g, "");
        const m = l.match(/^(fa|f|gi|gig|g|se|s|lo)(\d.*)$/);
        if (!m) return l;
        const p = m[1];
        const pref = p.startsWith("f") ? "fa" : (p.startsWith("g") ? "g" : (p === "lo" ? "lo" : "s"));
        return pref + m[2];
    }

    function parsearRangoPuerto(nombre) {
        const m = String(nombre).match(/^([a-z]+\d+(?:\/\d+)*\/)(\d+)(?:-(\d+))?$/);
        if (!m) return null;
        return { base: m[1], ini: Number(m[2]), fin: m[3] !== undefined ? Number(m[3]) : Number(m[2]) };
    }

    function nombreVlanCisco(cliente, id) {
        const s = String(cliente || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .trim().replace(/\s+/g, "_").replace(/[^A-Za-z0-9_-]/g, "_").slice(0, 32);
        return s || `VLAN_${id}`;
    }

    function copiarAlPortapapeles(texto, btnElement, textoOriginal, claseBase = "", claseExito = "", alCopiar = null) {
        if (!texto || texto === TEXTO_TERMINAL_VACIO || texto === TEXTO_SWITCH_VACIO || texto === TEXTO_SWITCH_GLOBAL_VACIO || texto === TEXTO_ROUTERS_VACIO) return;

        const exito = () => {
            if (typeof alCopiar === "function") alCopiar();
            if (btnElement && claseBase && claseExito) {
                btnElement.textContent = "¡Copiado!";
                if (btnElement.classList.contains(claseBase)) {
                    btnElement.classList.replace(claseBase, claseExito);
                } else {
                    btnElement.classList.add(claseExito);
                }
                setTimeout(() => {
                    btnElement.textContent = textoOriginal;
                    if (btnElement.classList.contains(claseExito)) {
                        btnElement.classList.replace(claseExito, claseBase);
                    } else {
                        btnElement.classList.remove(claseExito);
                    }
                }, 2000);
            }
        };

        const fallback = () => {
            try {
                const ta = document.createElement("textarea");
                ta.value = texto;
                ta.style.position = "fixed";
                ta.style.opacity = "0";
                document.body.appendChild(ta);
                ta.select();
                document.execCommand("copy");
                document.body.removeChild(ta);
                exito();
            } catch (err) {
                alert("Tu navegador bloqueó el copiado automático. Cópialo manualmente.");
            }
        };

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(texto).then(exito).catch(fallback);
        } else {
            fallback();
        }
    }

    // --- Persistencia (LocalStorage) ---
    function leerJSON(key) {
        try {
            const parsed = JSON.parse(localStorage.getItem(key));
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            return [];
        }
    }

    function normalizarNodo(n) {
        const base = (n && typeof n === "object") ? n : {};
        const interfaces = (Array.isArray(base.interfaces) ? base.interfaces : []).filter(i => i && typeof i.nombre === "string").map(i => ({ ...i, nombre: canonIntf(i.nombre) }));
        const dhcpPools = (Array.isArray(base.dhcpPools) ? base.dhcpPools : []).filter(p => p && typeof p.nombre === "string" && typeof p.red === "string" && typeof p.mascara === "string");
        const ripNetworks = (Array.isArray(base.ripNetworks) ? base.ripNetworks : []).filter(r => typeof r === "string");
        const eigrpNetworks = (Array.isArray(base.eigrpNetworks) ? base.eigrpNetworks : []).filter(e => e && typeof e.red === "string" && typeof e.mascara === "string" && typeof e.wildcard === "string");
        const ospfNetworks = (Array.isArray(base.ospfNetworks) ? base.ospfNetworks : []).filter(o => o && typeof o.red === "string" && typeof o.mascara === "string" && typeof o.wildcard === "string");
        const vlans = (Array.isArray(base.vlans) ? base.vlans : []).filter(v => v && typeof v.intf === "string" && v.id).map(v => ({ ...v, intf: canonIntf(v.intf) }));

        const str = (v) => (typeof v === "string" ? v : (v == null ? "" : String(v)));

        return {
            ...base,
            vlanId: base.vlanId === null ? null : (Number.isFinite(Number(base.vlanId)) && Number(base.vlanId) >= 1 && Number(base.vlanId) <= 4094 ? Number(base.vlanId) : 10),
            sitio: str(base.sitio).trim(),
            cliente: str(base.cliente),
            direccion: str(base.direccion),
            mascara: str(base.mascara),
            hostMin: str(base.hostMin),
            hostMax: str(base.hostMax),
            broadcast: str(base.broadcast),
            hosts: str(base.hosts),
            hostsCrudo: Number.isFinite(base.hostsCrudo) ? base.hostsCrudo : 0,
            scriptGenerado: typeof base.scriptGenerado === "string" ? base.scriptGenerado : null,
            scriptRouter: typeof base.scriptRouter === "string" ? base.scriptRouter : (typeof base.scriptGenerado === "string" ? base.scriptGenerado : null),
            scriptSwitch: typeof base.scriptSwitch === "string" ? base.scriptSwitch : null,
            interfaces,
            dhcpPools,
            ripNetworks,
            eigrpNetworks,
            ospfNetworks,
            vlans,
            eigrpAS: (base.eigrpAS !== undefined && base.eigrpAS !== null) ? String(base.eigrpAS) : "",
            ospfProcessId: (base.ospfProcessId !== undefined && base.ospfProcessId !== null && String(base.ospfProcessId) !== "") ? String(base.ospfProcessId) : "1",
            auditoriaLogs: Array.isArray(base.auditoriaLogs) ? base.auditoriaLogs : [],
            dhcpHabilitado: typeof base.dhcpHabilitado === "boolean" ? base.dhcpHabilitado : dhcpPools.length > 0,
            ripHabilitado: typeof base.ripHabilitado === "boolean" ? base.ripHabilitado : ripNetworks.length > 0,
            eigrpHabilitado: typeof base.eigrpHabilitado === "boolean" ? base.eigrpHabilitado : eigrpNetworks.length > 0,
            ospfHabilitado: typeof base.ospfHabilitado === "boolean" ? base.ospfHabilitado : ospfNetworks.length > 0,
            vlansHabilitado: typeof base.vlansHabilitado === "boolean" ? base.vlansHabilitado : vlans.length > 0
        };
    }

    function guardarDatosStorage() {
        try {
            localStorage.setItem('ipcalc_nodos', JSON.stringify(listaNodos));
            localStorage.setItem('ipcalc_history', JSON.stringify(historialBorrados));
            localStorage.setItem('ipcalc_vlanid', vlanIdCounter.toString());
        } catch (e) {
            console.warn("No se pudo guardar en localStorage:", e);
        }
    }

    function cargarDatosStorage() {
        leerJSON('ipcalc_nodos').forEach(n => listaNodos.push(normalizarNodo(n)));
        leerJSON('ipcalc_history').forEach(h => {
            if (h && Number.isInteger(h.index) && h.nodo) {
                historialBorrados.push({ index: h.index, nodo: normalizarNodo(h.nodo) });
            }
        });
        const vl = localStorage.getItem('ipcalc_vlanid');
        if (vl && !isNaN(parseInt(vl, 10))) {
            vlanIdCounter = parseInt(vl, 10);
        }
        if (listaNodos.length > 0 || historialBorrados.length > 0) {
            renderizarTabla();
        }
    }

    btnLimpiarStorage.addEventListener("click", () => {
        if (confirm("⚠️ ¿Borrar todo el progreso? Esto eliminará todos los nodos y no se puede deshacer.")) {
            try {
                localStorage.removeItem('ipcalc_nodos');
                localStorage.removeItem('ipcalc_history');
                localStorage.removeItem('ipcalc_vlanid');
                localStorage.removeItem('ipcalc_subneteo');
                localStorage.removeItem('ipcalc_switch_global');
                localStorage.removeItem('ipcalc_routers');
            } catch (e) { }
            location.reload();
        }
    });

    // --- Calculadora IP ---
    formEstandar.addEventListener("submit", function (event) {
        event.preventDefault();
        procesarCalculoIP(
            document.getElementById("ipInput1").value.trim(),
            document.getElementById("bitsInput1").value.trim(),
            resultadoEstandar
        );
    });

    formSustitucion.addEventListener("submit", function (event) {
        event.preventDefault();
        const ipIncompleta = document.getElementById("ipInput2").value.trim();
        const valorX = document.getElementById("valorXInput").value.trim();
        const bitsValue = document.getElementById("bitsInput2").value.trim();

        if (ipIncompleta === "" || valorX === "" || bitsValue === "") {
            mostrarMensaje(resultadoSustitucion, "Por favor, llena todos los campos.", "warning");
            return;
        }

        const ipFinal = ipIncompleta.replace(/[xX]+/g, () => valorX);
        procesarCalculoIP(
            ipFinal,
            bitsValue,
            resultadoSustitucion,
            `<div class="mb-2 text-warning"><small><em>IP Interpretada (XX=${esc(valorX)}): ${esc(ipFinal)}</em></small></div>`
        );
    });

    function procesarCalculoIP(ipValue, bitsValue, contenedor, htmlAdicional = "") {
        if (ipValue === "" || bitsValue === "") {
            mostrarMensaje(contenedor, "Por favor, ingresa la dirección IP y los bits.", "warning");
            return;
        }

        if (!/^\d{1,2}$/.test(bitsValue)) {
            mostrarMensaje(contenedor, `${htmlAdicional}Los bits de red deben ser un número del 0 al 32.`, "danger");
            return;
        }

        const cidr = parseInt(bitsValue, 10);
        if (!esIPv4Valida(ipValue) || cidr < 0 || cidr > 32) {
            mostrarMensaje(contenedor, `${htmlAdicional}Formato de IP incorrecto o prefijo CIDR fuera de rango (0-32).`, "danger");
            return;
        }

        const ipOctetos = ipValue.split('.').map(Number);
        const maskOctetos = calcularMascara(cidr);
        const wildcardOctetos = maskOctetos.map(m => 255 - m);
        const redOctetos = calcularRed(ipOctetos, maskOctetos);
        const broadcastOctetos = calcularBroadcast(redOctetos, wildcardOctetos);
        const redBaseStr = redOctetos.join('.');

        if (ipOctetos.join('.') === redBaseStr) {
            let hostMinOctetos = [], hostMaxOctetos = [], numHosts = 0;

            if (cidr === 32) {
                numHosts = 1;
                hostMinOctetos = [...redOctetos];
                hostMaxOctetos = [...redOctetos];
            } else if (cidr === 31) {
                numHosts = 2;
                hostMinOctetos = [...redOctetos];
                hostMaxOctetos = [...broadcastOctetos];
            } else {
                numHosts = Math.pow(2, 32 - cidr) - 2;
                hostMinOctetos = intToIp(ipToInt(redOctetos) + 1);
                hostMaxOctetos = intToIp(ipToInt(broadcastOctetos) - 1);
            }

            const datosRedCalculada = {
                vlanId: vlanIdCounter,
                direccion: `${ipValue}/${cidr}`,
                mascara: maskOctetos.join('.'),
                hostMin: hostMinOctetos.join('.'),
                hostMax: hostMaxOctetos.join('.'),
                broadcast: broadcastOctetos.join('.'),
                hosts: numHosts.toLocaleString(),
                hostsCrudo: numHosts,
                interfaces: [],
                dhcpPools: [],
                ripNetworks: [],
                eigrpNetworks: [],
                ospfNetworks: [],
                vlans: [],
                eigrpAS: "",
                ospfProcessId: "1",
                dhcpHabilitado: false,
                ripHabilitado: false,
                eigrpHabilitado: false,
                ospfHabilitado: false,
                vlansHabilitado: false,
                scriptGenerado: null,
                scriptRouter: null,
                scriptSwitch: null,
                auditoriaLogs: []
            };

            const textoParaCopiar = `Dirección: ${ipValue}\nMáscara: ${datosRedCalculada.mascara}\nPrimer host: ${datosRedCalculada.hostMin}\nÚltimo host/Gateway: ${datosRedCalculada.hostMax}\nBroadcast: ${datosRedCalculada.broadcast}\nHosts soportados: ${datosRedCalculada.hosts}`;

            contenedor.innerHTML = `
                <div class="alert alert-success p-0 overflow-hidden shadow-sm mb-0" role="alert">
                    <div class="bg-success text-white px-3 py-2 fw-bold d-flex justify-content-between align-items-center">
                        <span>¡Dirección Válida!</span>
                        <button class="btn btn-sm btn-light py-0 px-2 btn-copiar-calculo" style="font-size: 0.8rem;" title="Copiar bloque completo">Copiar</button>
                    </div>
                    <div class="p-3 bg-dark text-info font-monospace" style="font-size: 1rem; line-height: 1.8;">
                        ${htmlAdicional}
                        <span class="text-secondary">Dirección:</span> <span class="text-light copy-click" title="Clic para copiar">${esc(ipValue)}</span><br>
                        <span class="text-secondary">Máscara:</span> <span class="text-light copy-click" title="Clic para copiar">${datosRedCalculada.mascara}</span><br>
                        <span class="text-secondary">Primer host:</span> <span class="text-light copy-click" title="Clic para copiar">${datosRedCalculada.hostMin}</span><br>
                        <span class="text-secondary">Último host/Gateway:</span> <span class="text-light copy-click" title="Clic para copiar">${datosRedCalculada.hostMax}</span><br>
                        <span class="text-secondary">Broadcast:</span> <span class="text-light copy-click" title="Clic para copiar">${datosRedCalculada.broadcast}</span><br>
                        <span class="text-secondary">Hosts soportados:</span> <span class="text-light copy-click" title="Clic para copiar">${datosRedCalculada.hosts}</span>
                        <hr class="border-secondary mt-3 mb-2">
                        <div class="mt-2">
                            <label class="form-label text-light fw-bold mb-1" style="font-size: 0.85rem;">Asignar red a Cliente / Nodo / VLAN (puedes repetir el VLAN ID · Enter para guardar):</label>
                            <div class="row g-2">
                                <div class="col-6 col-md-2">
                                    <div class="input-group input-group-sm">
                                        <span class="input-group-text bg-secondary text-white border-secondary">VLAN</span>
                                        <input type="number" class="form-control input-vlan-id" value="${datosRedCalculada.vlanId}" min="1" max="4094" title="VLAN ID (vacío = sin VLAN)" placeholder="—">
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <input type="text" class="form-control form-control-sm input-sitio" placeholder="Red / Sitio (Ej. RED1)" title="Red o sitio al que pertenece (opcional)">
                                </div>
                                <div class="col-6 col-md-4">
                                    <input type="text" class="form-control form-control-sm input-cliente" placeholder="Ej. Ventas, Sistemas, Pachuca 1">
                                </div>
                                <div class="col-6 col-md-3">
                                    <button class="btn btn-sm btn-warning btn-guardar-nodo fw-bold w-100" type="button">Guardar a Lista</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            contenedor.querySelector('.btn-copiar-calculo').addEventListener('click', (e) => {
                copiarAlPortapapeles(textoParaCopiar, e.target, "Copiar", "btn-light", "btn-success");
            });

            contenedor.querySelectorAll('.copy-click').forEach(span => {
                span.addEventListener('click', () => flashCopia(span));
            });

            const inputClienteEl = contenedor.querySelector('.input-cliente');
            const inputVlanEl = contenedor.querySelector('.input-vlan-id');
            const inputSitioEl = contenedor.querySelector('.input-sitio');
            const btnGuardarEl = contenedor.querySelector('.btn-guardar-nodo');

            const ejecutarGuardadoNodo = () => {
                if (!guardEdit()) return;
                const clienteNombre = inputClienteEl.value.trim();
                const sitio = inputSitioEl.value.trim();
                const vidTxt = inputVlanEl.value.trim();
                const vid = vidTxt === "" ? null : parseInt(vidTxt, 10);

                if (clienteNombre === "") {
                    alert("Por favor, ingresa un nombre para el cliente o VLAN.");
                    return;
                }
                if (vid !== null && (!/^\d+$/.test(vidTxt) || vid < 1 || vid > 4094)) {
                    alert("El VLAN ID debe ser un número entre 1 y 4094 (o déjalo vacío para una red sin VLAN).");
                    return;
                }
                // Se permite repetir VLAN ID y nombre (subneteo de una misma VLAN);
                // solo se bloquea guardar exactamente la misma red en la misma VLAN.
                const direccionNueva = `${ipValue}/${cidr}`;
                if (listaNodos.some(n => n.vlanId === vid && n.direccion === direccionNueva)) {
                    alert(`La red ${direccionNueva} ya está guardada${vid !== null ? ` en la VLAN ${vid}` : ''}.`);
                    return;
                }
                const nodoTraslapado = listaNodos.find(n => {
                    const [ipN, cN] = String(n.direccion).split('/');
                    const cc = parseInt(cN, 10);
                    if (!esIPv4Valida(ipN) || !Number.isInteger(cc)) return false;
                    const mCom = ipToInt(calcularMascara(Math.min(cc, cidr)));
                    return ((ipToInt(ipN.split('.').map(Number)) & mCom) >>> 0) === ((ipToInt(ipOctetos) & mCom) >>> 0);
                });
                if (nodoTraslapado && !confirm(`La red ${ipValue}/${cidr} se traslapa con "${nodoTraslapado.cliente}" (${nodoTraslapado.direccion}). ¿Guardarla de todos modos?`)) {
                    return;
                }

                datosRedCalculada.vlanId = vid;
                datosRedCalculada.sitio = sitio;
                guardarNodoLista(clienteNombre, JSON.parse(JSON.stringify(datosRedCalculada)));
                if (vid !== null) vlanIdCounter = Math.min(vid + 10, 4094);
                inputClienteEl.value = "";
                inputVlanEl.value = vlanIdCounter;
            };

            btnGuardarEl.addEventListener('click', ejecutarGuardadoNodo);

            [inputClienteEl, inputVlanEl, inputSitioEl].forEach(inp => {
                inp.addEventListener('keydown', (ev) => {
                    if (ev.key === "Enter") {
                        ev.preventDefault();
                        ejecutarGuardadoNodo();
                    }
                });
            });

        } else {
            mostrarMensaje(
                contenedor,
                `${htmlAdicional}
                <h5 class="alert-heading mt-2">Dirección Inválida</h5>
                <p>La dirección <strong>${esc(ipValue)}/${cidr}</strong> contiene bits de host activos.</p>
                <hr>
                <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <p class="mb-0">Dirección de red base correcta: <strong>${redBaseStr}/${cidr}</strong></p>
                    <button type="button" class="btn btn-sm btn-danger fw-bold btn-usar-red-base">⚡ Calcular usando ${redBaseStr}/${cidr}</button>
                </div>`,
                "danger"
            );
            const btnBase = contenedor.querySelector('.btn-usar-red-base');
            if (btnBase) {
                btnBase.addEventListener('click', () => {
                    procesarCalculoIP(redBaseStr, String(cidr), contenedor, htmlAdicional);
                });
            }
        }
    }

    // --- Módulo Matemático de Auditoría IP ---
    function auditarNodo(nodo) {
        const logs = [];
        const redesInterfaces = [];
        const ipsAsignadas = new Set();
        let usaRedDelNodo = false;

        const nodoNetIp = nodo.direccion.split('/')[0];
        let nodoNetInt = 0, nodoMaskInt = 0, nodoAuditable = true;
        if (!nodoNetIp || !esIPv4Valida(nodoNetIp) || !esMascaraValida(nodo.mascara)) {
            logs.push({ tipo: 'danger', texto: `El nodo carece de una red principal válida configurada. Auditoría parcial.` });
            nodoAuditable = false;
        } else {
            nodoNetInt = ipToInt(nodoNetIp.split('.').map(Number));
            nodoMaskInt = ipToInt(nodo.mascara.split('.').map(Number));
        }

        // Excluir puertos físicos que actúan únicamente como puerto padre (sin IP) para subinterfaces dot1Q
        const padresDot1q = new Set((nodo.vlansHabilitado ? nodo.vlans : []).map(v => v.intf));
        const intfsL3 = nodo.interfaces.filter(i => (!i.mode || i.mode === 'none') && !(padresDot1q.has(i.nombre) && !i.ip));

        if (intfsL3.length === 0 && (!nodo.vlansHabilitado || nodo.vlans.length === 0)) {
            logs.push({ tipo: 'warning', texto: `El router no tiene interfaces físicas L3 ni subinterfaces VLAN configuradas.` });
        }

        intfsL3.forEach(intf => {
            const nombre = intf.nombre.toUpperCase();
            const esLoopback = intf.nombre.toLowerCase().startsWith('lo');

            if (!intf.ip || !intf.mascara) {
                logs.push({ tipo: 'danger', texto: `Puerto ${nombre}: Falta configurar IP y máscara.` });
            } else if (!esIPv4Valida(intf.ip) || !esMascaraValida(intf.mascara)) {
                logs.push({ tipo: 'danger', texto: `Puerto ${nombre}: IP o máscara inválidas (${intf.ip} / ${intf.mascara}).` });
            } else {
                if (ipsAsignadas.has(intf.ip)) {
                    logs.push({ tipo: 'danger', texto: `Puerto ${nombre}: IP duplicada (${intf.ip}) en este mismo dispositivo.` });
                }
                ipsAsignadas.add(intf.ip);

                const ipOct = intf.ip.split('.').map(Number);
                const maskOct = intf.mascara.split('.').map(Number);
                const redOct = calcularRed(ipOct, maskOct);
                const prefijo = contarBitsMascara(maskOct);
                const ipInt = ipToInt(ipOct);
                const maskInt = ipToInt(maskOct);
                const netStr = redOct.join('.');

                let solapamiento = false;
                for (let r of redesInterfaces) {
                    const maskComun = (maskInt & r.maskInt) >>> 0;
                    if (((ipInt & maskComun) >>> 0) === ((r.ipInt & maskComun) >>> 0)) {
                        logs.push({ tipo: 'danger', texto: `Puerto ${nombre}: La subred (${netStr}/${prefijo}) se solapa con ${r.nombre} (${r.netStr}/${r.prefijo}).` });
                        solapamiento = true;
                    }
                }
                redesInterfaces.push({ nombre, ipInt, maskInt, netStr, prefijo, esDot1q: false });

                if (nodoAuditable && ((ipInt & nodoMaskInt) >>> 0) === nodoNetInt) {
                    usaRedDelNodo = true;
                }

                const bcastOct = calcularBroadcast(redOct, maskOct.map(m => 255 - m));
                const ipStr = ipOct.join('.');

                if (prefijo === 32) {
                    if (esLoopback) {
                        logs.push({ tipo: 'success', texto: `Puerto ${nombre}: IP ${intf.ip} con /32 en Loopback, válida.` });
                    } else {
                        logs.push({ tipo: 'warning', texto: `Puerto ${nombre}: la IP ${intf.ip} usa /32. Válido solo en interfaces lógicas (Loopbacks).` });
                    }
                } else if (prefijo === 31) {
                    logs.push({ tipo: 'success', texto: `Puerto ${nombre}: IP ${intf.ip} en enlace p2p /31 (RFC 3021), válida.` });
                } else if (ipStr === netStr) {
                    logs.push({ tipo: 'danger', texto: `Puerto ${nombre}: La IP ${intf.ip} es dirección de RED (.0), inválida para un host.` });
                } else if (ipStr === bcastOct.join('.')) {
                    logs.push({ tipo: 'danger', texto: `Puerto ${nombre}: La IP ${intf.ip} es dirección de BROADCAST, inválida para un host.` });
                } else if (!solapamiento) {
                    logs.push({ tipo: 'success', texto: `Puerto ${nombre}: IP ${intf.ip} es un host válido.` });
                }
            }
        });

        // Auditoría de Subinterfaces VLAN (Router-on-a-Stick / encapsulation dot1Q)
        if (nodo.vlansHabilitado && nodo.vlans.length > 0) {
            if (nodo.vlanId !== null && !nodo.vlans.some(v => Number(v.id) === Number(nodo.vlanId))) {
                logs.push({ tipo: 'warning', texto: `Ninguna subinterfaz usa encapsulation dot1Q ${nodo.vlanId} (el VLAN ID de este nodo).` });
            }
            const nativasPorPadre = {};
            nodo.vlans.forEach(v => { if (v.nativa) (nativasPorPadre[v.intf] = nativasPorPadre[v.intf] || []).push(v.id); });
            Object.entries(nativasPorPadre).forEach(([padre, ids]) => {
                if (ids.length > 1) logs.push({ tipo: 'danger', texto: `${padre.toUpperCase()}: más de una subinterfaz 'native' (VLAN ${ids.join(', ')}). Solo puede haber una.` });
            });
            [...new Set(nodo.vlans.map(v => v.intf))].forEach(padre => {
                const conIp = nodo.interfaces.find(i => (!i.mode || i.mode === 'none') && i.nombre === padre && i.ip);
                if (conIp) logs.push({ tipo: 'warning', texto: `${padre.toUpperCase()} tiene IP ${conIp.ip} y además es puerto padre de subinterfaces dot1Q. En router-on-a-stick el puerto físico no debe llevar IP.` });
            });
            nodo.vlans.forEach(v => {
                const subintfTag = `${v.intf.toUpperCase()}.${v.id}`;
                if (!esIPv4Valida(v.ip) || !esMascaraValida(v.mascara)) {
                    logs.push({ tipo: 'danger', texto: `VLAN [${subintfTag}]: IP o máscara inválidas.` });
                    return;
                }
                if (ipsAsignadas.has(v.ip)) {
                    logs.push({ tipo: 'danger', texto: `VLAN [${subintfTag}]: IP duplicada (${v.ip}).` });
                }
                ipsAsignadas.add(v.ip);

                const ipOct = v.ip.split('.').map(Number);
                const maskOct = v.mascara.split('.').map(Number);
                const redOct = calcularRed(ipOct, maskOct);
                const prefijo = contarBitsMascara(maskOct);
                const ipInt = ipToInt(ipOct);
                const maskInt = ipToInt(maskOct);
                const netStr = redOct.join('.');

                let solapamiento = false;
                for (let r of redesInterfaces) {
                    const maskComun = (maskInt & r.maskInt) >>> 0;
                    if (((ipInt & maskComun) >>> 0) === ((r.ipInt & maskComun) >>> 0)) {
                        logs.push({ tipo: 'danger', texto: `VLAN [${subintfTag}]: La subred (${netStr}/${prefijo}) se solapa con ${r.nombre} (${r.netStr}/${r.prefijo}).` });
                        solapamiento = true;
                    }
                }
                redesInterfaces.push({ nombre: subintfTag, ipInt, maskInt, netStr, prefijo, esDot1q: true, vlanId: v.id });

                if (nodoAuditable && ((ipInt & nodoMaskInt) >>> 0) === nodoNetInt) {
                    usaRedDelNodo = true;
                }

                const bcastOct = calcularBroadcast(redOct, maskOct.map(m => 255 - m));
                if (v.ip === netStr) {
                    logs.push({ tipo: 'danger', texto: `VLAN [${subintfTag}]: La IP ${v.ip} es dirección de RED (.0).` });
                } else if (v.ip === bcastOct.join('.')) {
                    logs.push({ tipo: 'danger', texto: `VLAN [${subintfTag}]: La IP ${v.ip} es dirección de BROADCAST.` });
                } else if (!solapamiento) {
                    logs.push({ tipo: 'success', texto: `VLAN [${subintfTag}]: Gateway ${v.ip}/${prefijo} con encapsulation dot1Q ${v.id} verificado.` });
                }
            });
        }

        if (nodoAuditable && !usaRedDelNodo && (intfsL3.length > 0 || (nodo.vlansHabilitado && nodo.vlans.length > 0))) {
            logs.push({ tipo: 'warning', texto: `Ninguna interfaz o subinterfaz del router pertenece a la red principal asignada al nodo (${nodo.direccion}).` });
        }

        // Auditoría DHCP
        if (nodo.dhcpHabilitado) {
            if (nodo.dhcpPools.length === 0) {
                logs.push({ tipo: 'warning', texto: `DHCP habilitado pero sin pools configurados.` });
            } else {
                nodo.dhcpPools.forEach(pool => {
                    if (!pool || !pool.red || !pool.mascara || !esIPv4Valida(pool.red) || !esMascaraValida(pool.mascara)) {
                        logs.push({ tipo: 'danger', texto: `DHCP [${pool?.nombre || 'sin-nombre'}]: red o máscara corrupta o faltante.` });
                        return;
                    }
                    const netOct = pool.red.split('.').map(Number);
                    const maskOct = pool.mascara.split('.').map(Number);
                    const calcRedOct = calcularRed(netOct, maskOct);

                    if (netOct.join('.') !== calcRedOct.join('.')) {
                        logs.push({ tipo: 'danger', texto: `DHCP [${pool.nombre}]: La red declarada (${pool.red}) no coincide con su máscara. Debería ser ${calcRedOct.join('.')}` });
                    } else {
                        logs.push({ tipo: 'success', texto: `DHCP [${pool.nombre}]: Dirección de red y máscara congruentes.` });
                    }

                    const poolNetInt = ipToInt(netOct);
                    let tieneInterfaz = false;
                    for (let r of redesInterfaces) {
                        if (r.ipInt !== 0 && ((r.ipInt & ipToInt(maskOct)) >>> 0) === poolNetInt) {
                            tieneInterfaz = true;
                            break;
                        }
                    }
                    if (!tieneInterfaz && (intfsL3.length > 0 || (nodo.vlansHabilitado && nodo.vlans.length > 0))) {
                        logs.push({ tipo: 'warning', texto: `DHCP [${pool.nombre}]: Ninguna interfaz o subinterfaz dot1Q pertenece a esta red. Los clientes conectados no recibirán IP.` });
                    }
                });
            }
        }

        // Auditoría RIPv2
        if (nodo.ripHabilitado && nodo.ripNetworks.length > 0) {
            nodo.ripNetworks.forEach(net => {
                const oct = net.split('.').map(Number);
                const cls = oct[0] < 128 ? 8 : (oct[0] < 192 ? 16 : 24);
                const maskCls = calcularMascara(cls);
                const redCalc = calcularRed(oct, maskCls);
                if (oct.join('.') !== redCalc.join('.')) {
                    logs.push({ tipo: 'warning', texto: `RIP: La red ${net} es una subred (VLSM). Verifica que sea la deseada, IOS podría resumirla a ${redCalc.join('.')} si falta 'no auto-summary'.` });
                }
            });
        }

        // Auditoría EIGRP
        if (nodo.eigrpHabilitado) {
            const asTexto = String(nodo.eigrpAS ?? "");
            const asNum = parseInt(asTexto, 10);
            if (!/^\d+$/.test(asTexto) || asNum < 1 || asNum > 65535) {
                logs.push({ tipo: 'danger', texto: `EIGRP: Falta un número de Sistema Autónomo válido (1-65535). No se generó el bloque 'router eigrp'.` });
            }

            if (nodo.eigrpNetworks.length === 0) {
                logs.push({ tipo: 'warning', texto: `EIGRP habilitado pero sin redes configuradas.` });
            } else {
                nodo.eigrpNetworks.forEach(e => {
                    if (!esIPv4Valida(e.red) || !esMascaraValida(e.mascara)) {
                        logs.push({ tipo: 'danger', texto: `EIGRP [${e.red}]: red o máscara corrupta o faltante.` });
                        return;
                    }
                    const maskOct = e.mascara.split('.').map(Number);
                    const maskInt = ipToInt(maskOct);
                    const netInt = (ipToInt(e.red.split('.').map(Number)) & maskInt) >>> 0;
                    const prefijo = contarBitsMascara(maskOct);
                    const cubreInterfaz = redesInterfaces.some(r => ((r.ipInt & maskInt) >>> 0) === netInt);

                    if (cubreInterfaz) {
                        logs.push({ tipo: 'success', texto: `EIGRP: network ${e.red} ${e.wildcard} (/${prefijo}) cubre al menos una interfaz/subinterfaz del router.` });
                    } else if (intfsL3.length > 0 || (nodo.vlansHabilitado && nodo.vlans.length > 0)) {
                        logs.push({ tipo: 'warning', texto: `EIGRP: Ninguna interfaz configurada pertenece a ${e.red}/${prefijo}; esa red no se anunciará.` });
                    }
                });
            }
        }

        // Auditoría OSPF
        if (nodo.ospfHabilitado) {
            const pidTexto = String(nodo.ospfProcessId ?? "");
            const pidNum = parseInt(pidTexto, 10);
            if (!/^\d+$/.test(pidTexto) || pidNum < 1 || pidNum > 65535) {
                logs.push({ tipo: 'danger', texto: `OSPF: Falta un ID de Proceso válido (1-65535). No se generó el bloque 'router ospf'.` });
            }

            if (nodo.ospfNetworks.length === 0) {
                logs.push({ tipo: 'warning', texto: `OSPF habilitado pero sin redes configuradas.` });
            } else {
                nodo.ospfNetworks.forEach(o => {
                    if (!esIPv4Valida(o.red) || !esMascaraValida(o.mascara)) {
                        logs.push({ tipo: 'danger', texto: `OSPF [${o.red}]: red o máscara corrupta o faltante.` });
                        return;
                    }
                    const maskOct = o.mascara.split('.').map(Number);
                    const maskInt = ipToInt(maskOct);
                    const netInt = (ipToInt(o.red.split('.').map(Number)) & maskInt) >>> 0;
                    const prefijo = contarBitsMascara(maskOct);
                    const intfsCubiertas = redesInterfaces.filter(r => ((r.ipInt & maskInt) >>> 0) === netInt);

                    if (intfsCubiertas.length > 0) {
                        const nombres = intfsCubiertas.map(i => i.esDot1q ? `${i.nombre} (dot1Q)` : i.nombre).join(', ');
                        logs.push({ tipo: 'success', texto: `OSPF (Área ${o.area}): network ${o.red} ${o.wildcard} (/${prefijo}) anuncia correctamente a ${nombres}.` });
                    } else if (intfsL3.length > 0 || (nodo.vlansHabilitado && nodo.vlans.length > 0)) {
                        logs.push({ tipo: 'warning', texto: `OSPF (Área ${o.area}): Ninguna interfaz ni subinterfaz dot1Q pertenece a ${o.red}/${prefijo}.` });
                    }
                });

                const subintfsDot1q = redesInterfaces.filter(r => r.esDot1q);
                subintfsDot1q.forEach(sub => {
                    const cubiertaEnOspf = nodo.ospfNetworks.some(o => {
                        if (!esIPv4Valida(o.red) || !esMascaraValida(o.mascara)) return false;
                        const mInt = ipToInt(o.mascara.split('.').map(Number));
                        const nInt = (ipToInt(o.red.split('.').map(Number)) & mInt) >>> 0;
                        return ((sub.ipInt & mInt) >>> 0) === nInt;
                    });
                    if (!cubiertaEnOspf) {
                        logs.push({ tipo: 'warning', texto: `OSPF + dot1Q: La subinterfaz ${sub.nombre} (${sub.netStr}/${sub.prefijo}) tiene encapsulation dot1Q pero aún no está anunciada en OSPF.` });
                    }
                });
            }
        }

        return logs;
    }

    // --- Tabla Maestra de Nodos ---
    function guardarNodoLista(cliente, datosRed) {
        listaNodos.push(normalizarNodo({ cliente, ...datosRed }));
        historialBorrados.length = 0;
        renderizarTabla();
    }

    function renderizarTabla() {
        btnDeshacer.style.display = historialBorrados.length > 0 ? "inline-block" : "none";

        if (listaNodos.length > 0 || historialBorrados.length > 0) {
            seccionTabla.style.display = "flex";
        } else {
            seccionTabla.style.display = "none";
            nodoSeleccionadoIndex = null;
        }

        if (listaNodos.length === 0 && historialBorrados.length > 0) {
            tablaNodosBody.innerHTML = `<tr><td colspan="11" class="text-center text-muted py-3">Todos los nodos eliminados. Puedes deshacer la acción.</td></tr>`;
        } else {
            tablaNodosBody.innerHTML = listaNodos.map((nodo, index) => {
                const isSelected = index === nodoSeleccionadoIndex;
                const totalIntf = nodo.interfaces.length + (nodo.vlansHabilitado ? nodo.vlans.length : 0);
                const ipBase = nodo.direccion.split('/')[0];
                // ×N = subredes que comparten la misma VLAN dentro de la misma red / sitio
                const subredesMismaVlan = nodo.vlanId === null ? 0 : listaNodos.filter(n => n.vlanId === nodo.vlanId && n.sitio === nodo.sitio).length;
                const badgeSubredes = subredesMismaVlan > 1 ? ` <span class="badge bg-warning text-dark" title="Subredes de esta VLAN en la misma red">×${subredesMismaVlan}</span>` : '';
                return `
                    <tr class="fila-nodo ${isSelected ? 'table-primary border-primary' : ''}" data-index="${index}">
                        <td class="fw-bold text-danger">${nodo.vlanId === null ? '<span class="text-muted">—</span>' : esc(nodo.vlanId)}${badgeSubredes}</td>
                        <td class="fw-bold">${nodo.sitio ? esc(nodo.sitio) : '<span class="text-muted">—</span>'}</td>
                        <td class="fw-bold ${isSelected ? 'text-dark' : 'text-primary'}">${esc(nodo.cliente)}</td>
                        <td><span class="badge ${isSelected ? 'bg-primary' : 'bg-secondary'} copy-click" data-copy="${esc(ipBase)}" title="Clic para copiar IP de Red (${esc(ipBase)})">${esc(nodo.direccion)}</span></td>
                        <td><span class="copy-click" title="Clic para copiar Máscara">${esc(nodo.mascara)}</span></td>
                        <td><span class="copy-click" title="Clic para copiar Primer Host">${esc(nodo.hostMin)}</span></td>
                        <td><span class="copy-click fw-bold text-success" title="Clic para copiar Último Host / Gateway">${esc(nodo.hostMax)}</span></td>
                        <td><span class="copy-click" title="Clic para copiar Broadcast">${esc(nodo.broadcast)}</span></td>
                        <td>${esc(nodo.hosts)}</td>
                        <td><span class="badge bg-${totalIntf > 0 ? 'success' : 'light text-dark'} border">${totalIntf}</span></td>
                        <td><button class="btn btn-sm btn-outline-danger btn-eliminar" data-index="${index}">Eliminar</button></td>
                    </tr>
                `;
            }).join('');
        }

        renderizarConfiguracion();
        renderizarMenuNodo();
        renderizarDhcpPools();
        renderizarRipNetworks();
        renderizarEigrpNetworks();
        renderizarOspfNetworks();
        renderizarVlans();
        renderizarResumenNodos();
        renderizarSwitchGlobal();
        renderizarRouters();
        guardarDatosStorage();
    }

    inputModoPuerto.addEventListener("change", () => {
        if (inputModoPuerto.value === "none") {
            guiaModoPuerto.innerHTML = `Para <strong>Router</strong> puedes usar puertos desde <code>0/0</code> (ej. <code>f0/0</code>, <code>g0/0</code>, <code>s0/1/0</code>, <code>lo0</code>).`;
            inputInterfaz.placeholder = "Ej. f0/0, g0/1/0, s0/1/0, lo0";
        } else {
            guiaModoPuerto.innerHTML = `⚠️ En <strong>Switches Cisco</strong> la numeración física inicia siempre en <code>1</code> (ej. <code>fa0/1</code>, <code>fa0/2-10</code>, <code>g0/1</code>). El puerto <code>0/0</code> no existe.`;
            inputInterfaz.placeholder = "Ej. fa0/1, fa0/2-10, g0/1 (Inician en 1)";
        }
    });

    // --- Configuración de Interfaces ---
    function renderizarConfiguracion() {
        if (nodoSeleccionadoIndex === null || !listaNodos[nodoSeleccionadoIndex]) {
            seccionConfiguracion.style.display = "none";
            intfEditIndex = null;
            return;
        }

        const nodo = listaNodos[nodoSeleccionadoIndex];
        seccionConfiguracion.style.display = "flex";
        tituloConfiguracion.innerHTML = `Gestión de Interfaces: <span class="text-dark border-bottom border-2 border-primary">${esc(etiquetaNodo(nodo))}</span>`;

        const padresDot1q = new Set((nodo.vlansHabilitado ? nodo.vlans : []).map(v => v.intf));

        if (nodo.interfaces.length === 0) {
            listaInterfaces.innerHTML = `<li class="list-group-item text-center text-muted fst-italic py-3">No hay interfaces conectadas.</li>`;
        } else {
            listaInterfaces.innerHTML = nodo.interfaces.map((intf, index) => {
                if (index === intfEditIndex) {
                    const esSerial = intf.nombre.toLowerCase().startsWith('s');
                    let htmlClock = "";
                    if (esSerial) {
                        htmlClock = `
                        <div class="d-flex flex-column flex-md-row align-items-md-center gap-3 mt-2 border-top pt-3">
                            <div class="form-check form-switch">
                                <input class="form-check-input check-clock-rate" type="checkbox" id="inlineCheckClock_${index}" data-index="${index}" ${intf.clockRate ? 'checked' : ''}>
                                <label class="form-check-label fw-bold text-muted" style="font-size: 0.85rem;" for="inlineCheckClock_${index}">Clock Rate (DCE)</label>
                            </div>
                            <div id="containerClockValue_${index}" style="display: ${intf.clockRate ? 'block' : 'none'};">
                                <input type="number" id="inlineClockValue_${index}" class="form-control form-control-sm border-warning input-inline-enter" data-index="${index}" placeholder="Valor (Ej. 64000)" value="${esc(intf.clockRateValue || '')}">
                            </div>
                        </div>`;
                    }

                    return `
                    <li class="list-group-item py-3 px-3 mb-2 border-primary border-2 rounded shadow-sm bg-light">
                        <div class="fw-bold text-primary mb-3"><span class="badge bg-primary me-2">Editando</span>${esc(intf.nombre.toUpperCase())}</div>
                        <div class="row g-2">
                            <div class="col-md-6 mb-2">
                                <label class="form-label fw-bold text-secondary mb-1" style="font-size: 0.8rem;">Dirección IP de Host (Router):</label>
                                <input type="text" id="inlineIp_${index}" class="form-control form-control-sm border-primary font-monospace input-inline-enter" data-index="${index}" placeholder="Ej. 192.168.10.1" value="${esc(intf.ip || '')}">
                            </div>
                            <div class="col-md-6 mb-2">
                                <label class="form-label fw-bold text-secondary mb-1" style="font-size: 0.8rem;">Máscara de Subred:</label>
                                <input type="text" id="inlineMask_${index}" class="form-control form-control-sm border-primary font-monospace input-inline-enter" data-index="${index}" placeholder="Ej. 255.255.255.0" value="${esc(intf.mascara || '')}">
                            </div>
                            <div class="col-md-12 mb-2">
                                <label class="form-label fw-bold text-secondary mb-1" style="font-size: 0.8rem;">IP Helper-Address (Opcional):</label>
                                <input type="text" id="inlineHelper_${index}" class="form-control form-control-sm border-info font-monospace input-inline-enter" data-index="${index}" placeholder="Ej. 192.168.20.5" value="${esc(intf.helper || '')}">
                            </div>
                        </div>
                        ${htmlClock}
                        <div class="d-flex justify-content-end gap-2 mt-3">
                            <button class="btn btn-sm btn-secondary btn-cancelar-inline" type="button">Cancelar</button>
                            <button class="btn btn-sm btn-success fw-bold btn-guardar-inline" type="button" data-index="${index}">💾 Guardar Cambios (Enter)</button>
                        </div>
                    </li>`;
                }

                const esSerial = intf.nombre.toLowerCase().startsWith('s');
                const esPadreDot1qSinIp = !intf.mode && !intf.ip && padresDot1q.has(intf.nombre);
                const modeBadge = intf.mode === 'access'
                    ? `<span class="badge bg-info text-dark ms-2">SWITCH ACCESS (${esc(etiquetaVlan(nodo))})</span>`
                    : (intf.mode === 'trunk' ? `<span class="badge bg-warning text-dark ms-2">SWITCH TRUNK</span>` : (esPadreDot1qSinIp ? `<span class="badge bg-success ms-2">PADRE dot1Q (Trunk L3)</span>` : ''));
                const clockBadge = (esSerial && intf.clockRate) ? `<span class="badge bg-warning text-dark ms-2 border border-secondary" style="font-size: 0.65rem;">⏱ CLOCK: ${esc(intf.clockRateValue)}</span>` : '';
                const helperBadge = intf.helper ? `<span class="badge bg-info text-dark ms-2 border border-secondary" style="font-size: 0.65rem;">HELPER: ${esc(intf.helper)}</span>` : '';

                const estadoConfig = (intf.ip && intf.mascara)
                    ? `<div class="text-muted font-monospace mt-1" style="font-size: 0.85rem;">IP: <span class="text-dark fw-bold">${esc(intf.ip)}</span> | Mask: <span class="text-dark fw-bold">${esc(intf.mascara)}</span></div>`
                    : (intf.mode
                        ? `<div class="text-success fst-italic mt-1" style="font-size: 0.80rem;">✔ Puerto Capa 2 listo para Switch (${esc(formatearInterfazCisco(intf.nombre, true))})</div>`
                        : (esPadreDot1qSinIp
                            ? `<div class="text-success fst-italic mt-1" style="font-size: 0.80rem;">✔ Puerto físico padre para subinterfaces dot1Q (sin IP en interfaz física)</div>`
                            : `<div class="text-danger fst-italic mt-1" style="font-size: 0.80rem;">⚠️ Falta configurar IP y máscara (o asignarle subinterfaces dot1Q)</div>`));

                return `
                <li class="list-group-item d-flex justify-content-between align-items-center py-2 px-3 mb-2 border rounded shadow-sm">
                    <div>
                        <div>
                            <span class="badge bg-secondary me-1">INT</span><strong class="font-monospace text-primary fs-6">${esc(intf.nombre.toUpperCase())}</strong>
                            ${modeBadge}${clockBadge}${helperBadge}
                        </div>
                        ${estadoConfig}
                    </div>
                    <div class="btn-group btn-group-sm">
                        ${!intf.mode ? `<button class="btn btn-outline-primary fw-bold btn-configurar-intf" type="button" data-intf-index="${index}">Configurar</button>` : ''}
                        <button class="btn btn-outline-danger fw-bold btn-quitar-intf" type="button" data-intf-index="${index}" title="Eliminar Interfaz">X</button>
                    </div>
                </li>`;
            }).join('');
        }
    }

    function agregarInterfazHandler() {
        if (!guardEdit()) return;
        const nodo = nodoActual();
        if (!nodo) {
            alert("Selecciona un nodo primero.");
            return;
        }
        const valorIntf = canonIntf(inputInterfaz.value);
        const mode = inputModoPuerto.value;

        if (valorIntf === "") return;

        const regexValida = /^(?:(?:fa|f|gi|gig|g|se|s)\d+\/\d+(?:\/\d+)?(?:-\d+)?|lo\d+)$/;
        if (!regexValida.test(valorIntf)) {
            alert("Formato inválido. Ejemplos válidos:\n- Router: f0/0, g0/0, g0/1/0, s0/0, s0/1/0, lo0\n- Switch: fa0/1, fa0/2-10, g0/1");
            return;
        }

        const nuevoRango = parsearRangoPuerto(valorIntf);
        if (valorIntf.includes("-") && (!nuevoRango || nuevoRango.ini > nuevoRango.fin)) {
            alert("Rango inválido: el primer número debe ser menor o igual al último (ej. fa0/2-10).");
            return;
        }

        if (mode !== "none") {
            if (valorIntf.startsWith("s") || valorIntf.startsWith("lo")) {
                alert("Un Switch de Capa 2 solo admite puertos FastEthernet (f/fa) o GigabitEthernet (g/gi).");
                return;
            }
            if (tienePuertoCeroDeSwitch(valorIntf)) {
                alert("⚠️ Error de numeración en Switch Cisco:\nEn los switches de Cisco la numeración de los puertos físicos siempre inicia en 1 (FastEthernet 0/1, 0/2, etc.) y el puerto 0/0 NO existe, lo que provoca el fallo '% Invalid input detected' en Packet Tracer.\n\nPor favor ingresa la interfaz iniciando en 1 (por ejemplo: fa0/1 o g0/1).");
                return;
            }
        } else if (valorIntf.includes("-")) {
            alert("Los rangos de puertos (ej. fa0/2-10) son para modo Switch (Acceso o Troncal). Cambia el selector de arriba si estás configurando un Switch.");
            return;
        }

        const modoNuevo = mode === 'none' ? null : mode;
        const conflicto = nodo.interfaces.find(intf => {
            const modoExistente = intf.mode || null;
            if ((modoExistente === null) !== (modoNuevo === null)) return false;
            if (intf.nombre === valorIntf) return true;
            if (modoNuevo === null) return false;
            const otro = parsearRangoPuerto(intf.nombre);
            return !!(otro && nuevoRango && otro.base === nuevoRango.base && otro.ini <= nuevoRango.fin && nuevoRango.ini <= otro.fin);
        });
        if (conflicto) {
            alert(`${valorIntf.toUpperCase()} ya existe o se traslapa con ${conflicto.nombre.toUpperCase()} (${conflicto.mode ? 'Switch ' + conflicto.mode : 'Router'}) en este nodo.`);
            return;
        }

        nodo.interfaces.push({
            nombre: valorIntf,
            mode: mode === 'none' ? null : mode,
            ip: null,
            mascara: null,
            clockRate: false,
            clockRateValue: null,
            helper: null
        });
        invalidarScript(nodo, modoNuevo === null ? "router" : "switch");
        inputInterfaz.value = "";
        renderizarTabla();
    }

    btnAgregarInterfaz.addEventListener("click", agregarInterfazHandler);
    inputInterfaz.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            agregarInterfazHandler();
        }
    });

    listaInterfaces.addEventListener("change", function (event) {
        if (event.target.classList.contains("check-clock-rate")) {
            const index = parseInt(event.target.getAttribute("data-index"), 10);
            const inputContainer = document.getElementById(`containerClockValue_${index}`);
            if (inputContainer) {
                inputContainer.style.display = event.target.checked ? "block" : "none";
                if (!event.target.checked) {
                    const valInput = document.getElementById(`inlineClockValue_${index}`);
                    if (valInput) valInput.value = "";
                }
            }
        }
    });

    function guardarEdicionInlineInterfaz(index) {
        const nodo = nodoActual();
        if (!nodo) return;
        const intfActual = nodo.interfaces[index];
        const esSerial = intfActual.nombre.toLowerCase().startsWith('s');

        const inputIp = document.getElementById(`inlineIp_${index}`).value.trim();
        const inputMask = document.getElementById(`inlineMask_${index}`).value.trim();
        const inputHelper = document.getElementById(`inlineHelper_${index}`).value.trim();

        const checkClockElement = document.getElementById(`inlineCheckClock_${index}`);
        const checkClock = (esSerial && checkClockElement) ? checkClockElement.checked : false;
        const inputClockVal = checkClock ? document.getElementById(`inlineClockValue_${index}`).value.trim() : null;

        if (inputIp === "" || inputMask === "") {
            alert("Por favor, ingresa la IP y la Máscara.");
            return;
        }
        if (!esIPv4Valida(inputIp)) {
            alert("La Dirección IP ingresada no es válida.");
            return;
        }
        if (!esMascaraValida(inputMask)) {
            alert("La Máscara ingresada no es válida (bits contiguos).");
            return;
        }
        if (inputHelper !== "" && !esIPv4Valida(inputHelper)) {
            alert("La dirección Helper IP no es válida.");
            return;
        }
        if (checkClock && inputClockVal === "") {
            alert("Ingresa el valor del Clock Rate.");
            return;
        }

        intfActual.ip = inputIp;
        intfActual.mascara = inputMask;
        intfActual.helper = inputHelper !== "" ? inputHelper : null;
        intfActual.clockRate = checkClock;
        intfActual.clockRateValue = inputClockVal;

        invalidarScript(nodo, "router");
        intfEditIndex = null;
        renderizarTabla();
    }

    listaInterfaces.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && event.target.classList.contains("input-inline-enter")) {
            event.preventDefault();
            const index = parseInt(event.target.getAttribute("data-index"), 10);
            guardarEdicionInlineInterfaz(index);
        }
    });

    listaInterfaces.addEventListener("click", function (event) {
        const nodo = nodoActual();
        if (!nodo) return;

        if (event.target.classList.contains("btn-quitar-intf")) {
            if (!guardEdit()) return;
            const idx = parseInt(event.target.getAttribute("data-intf-index"), 10);
            const eliminada = nodo.interfaces[idx];
            nodo.interfaces.splice(idx, 1);
            invalidarScript(nodo, (eliminada && eliminada.mode) ? "switch" : "router");
            renderizarTabla();
        }

        if (event.target.classList.contains("btn-configurar-intf")) {
            if (!guardEdit()) return;
            intfEditIndex = parseInt(event.target.getAttribute("data-intf-index"), 10);
            renderizarTabla();
        }

        if (event.target.classList.contains("btn-cancelar-inline")) {
            intfEditIndex = null;
            renderizarTabla();
        }

        if (event.target.classList.contains("btn-guardar-inline")) {
            const index = parseInt(event.target.getAttribute("data-index"), 10);
            guardarEdicionInlineInterfaz(index);
        }
    });

    btnCerrarConfiguracion.addEventListener("click", () => {
        if (!guardEdit()) return;
        nodoSeleccionadoIndex = null;
        renderizarTabla();
    });

    // --- Panel Menú Nodo ---
    function renderizarMenuNodo() {
        if (nodoSeleccionadoIndex === null || !listaNodos[nodoSeleccionadoIndex]) {
            seccionMenuNodo.style.display = "none";
            seccionRouter.style.display = "none";
            seccionSwitch.style.display = "none";
            panelAuditoria.style.display = "none";
            return;
        }
        const nodo = listaNodos[nodoSeleccionadoIndex];
        seccionMenuNodo.style.display = "flex";
        nombreNodoMenu.textContent = etiquetaNodo(nodo);

        switchInfoVlanId.textContent = nodo.vlanId === null ? "— (esta red no tiene VLAN)" : nodo.vlanId;
        switchInfoVlanName.textContent = nombreVlanCisco(nodo.cliente, nodo.vlanId);

        checkHabilitarDhcp.checked = !!nodo.dhcpHabilitado;
        formularioDhcp.style.display = nodo.dhcpHabilitado ? "block" : "none";

        checkHabilitarRip.checked = !!nodo.ripHabilitado;
        formularioRip.style.display = nodo.ripHabilitado ? "block" : "none";

        checkHabilitarEigrp.checked = !!nodo.eigrpHabilitado;
        formularioEigrp.style.display = nodo.eigrpHabilitado ? "block" : "none";

        checkHabilitarOspf.checked = !!nodo.ospfHabilitado;
        formularioOspf.style.display = nodo.ospfHabilitado ? "block" : "none";

        checkHabilitarVlans.checked = !!nodo.vlansHabilitado;
        formularioVlans.style.display = nodo.vlansHabilitado ? "block" : "none";

        if (document.activeElement !== eigrpAsInput) {
            eigrpAsInput.value = nodo.eigrpAS ?? "";
        }
        if (document.activeElement !== ospfProcessIdInput) {
            ospfProcessIdInput.value = nodo.ospfProcessId ?? "1";
        }

        // Autocompletar subinterfaz dot1Q con los datos del nodo
        if (ultimoNodoPrefill !== nodo) {
            limpiarFormularioVlans();
            ultimoNodoPrefill = nodo;
        }
        const vlanYaAgregada = nodo.vlanId === null || nodo.vlans.some(v => Number(v.id) === Number(nodo.vlanId));
        if (!vlanYaAgregada && !vlanId.value && !vlanIp.value && !vlanMascara.value) {
            vlanId.value = nodo.vlanId;
            vlanIp.value = nodo.hostMax;
            vlanMascara.value = nodo.mascara;
        }
        if (!vlanYaAgregada && !vlanIntfFisica.value) {
            const padre = nodo.interfaces.find(i => !i.mode && /^(fa|g)\d+\/\d+(?:\/\d+)?$/.test(i.nombre) && !i.ip);
            if (padre) vlanIntfFisica.value = padre.nombre;
        }
    }

    btnOpcionSwitch.addEventListener("click", () => {
        if (!guardEdit()) return;
        seccionRouter.style.display = "none";
        seccionSwitch.style.display = "flex";
        seccionSwitch.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    btnOpcionRouter.addEventListener("click", () => {
        if (!guardEdit()) return;
        seccionSwitch.style.display = "none";
        seccionRouter.style.display = "flex";
        seccionRouter.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    btnCerrarSwitch.addEventListener("click", () => { seccionSwitch.style.display = "none"; });
    btnCerrarRouter.addEventListener("click", () => { seccionRouter.style.display = "none"; });

    checkHabilitarDhcp.addEventListener("change", function () {
        if (!guardEdit()) { this.checked = !this.checked; return; }
        const nodo = nodoActual(); if (!nodo) return;
        nodo.dhcpHabilitado = this.checked;
        invalidarScript(nodo, "router");
        renderizarTabla();
    });

    checkHabilitarRip.addEventListener("change", function () {
        if (!guardEdit()) { this.checked = !this.checked; return; }
        const nodo = nodoActual(); if (!nodo) return;
        nodo.ripHabilitado = this.checked;
        invalidarScript(nodo, "router");
        renderizarTabla();
    });

    checkHabilitarEigrp.addEventListener("change", function () {
        if (!guardEdit()) { this.checked = !this.checked; return; }
        const nodo = nodoActual(); if (!nodo) return;
        nodo.eigrpHabilitado = this.checked;
        invalidarScript(nodo, "router");
        renderizarTabla();
    });

    checkHabilitarOspf.addEventListener("change", function () {
        if (!guardEdit()) { this.checked = !this.checked; return; }
        const nodo = nodoActual(); if (!nodo) return;
        nodo.ospfHabilitado = this.checked;
        invalidarScript(nodo, "router");
        renderizarTabla();
    });

    checkHabilitarVlans.addEventListener("change", function () {
        if (!guardEdit()) { this.checked = !this.checked; return; }
        const nodo = nodoActual(); if (!nodo) return;
        nodo.vlansHabilitado = this.checked;
        invalidarScript(nodo, "router");
        renderizarTabla();
    });

    // --- DHCP ---
    function renderizarDhcpPools() {
        if (nodoSeleccionadoIndex === null || !listaNodos[nodoSeleccionadoIndex]) {
            listaDhcpPools.innerHTML = "";
            return;
        }
        const nodo = listaNodos[nodoSeleccionadoIndex];
        if (nodo.dhcpPools.length === 0) {
            listaDhcpPools.innerHTML = `<li class="list-group-item text-muted small py-2">No hay pools configurados.</li>`;
        } else {
            listaDhcpPools.innerHTML = nodo.dhcpPools.map((pool, index) => `
                <li class="list-group-item d-flex justify-content-between align-items-center py-2 px-3 mb-2 border border-success rounded">
                    <div>
                        <div class="fw-bold text-success">${esc(pool.nombre)}</div>
                        <div class="text-muted font-monospace" style="font-size:0.75rem;">
                            Red: ${esc(pool.red)} | Mask: ${esc(pool.mascara)}${pool.gateway ? ` | GW: ${esc(pool.gateway)}` : ''}${pool.dns ? ` | DNS: ${esc(pool.dns)}` : ''}
                        </div>
                    </div>
                    <button class="btn btn-sm btn-outline-danger fw-bold btn-quitar-dhcp" type="button" data-dhcp-index="${index}">X</button>
                </li>
            `).join('');
        }
    }

    function agregarDhcpHandler() {
        if (!guardEdit()) return;
        const nodo = nodoActual(); if (!nodo) return;

        const pool = dhcpPoolName.value.trim();
        const exc = dhcpExcluidas.value.trim();
        const net = dhcpRed.value.trim();
        const mask = dhcpMascara.value.trim();
        const gw = dhcpGateway.value.trim();
        const dns = dhcpDns.value.trim();

        if (pool === "" || net === "" || mask === "") {
            alert("Nombre del Pool, IP de Red y Máscara son obligatorios.");
            return;
        }
        if (/\s/.test(pool)) {
            alert("El nombre del pool no debe contener espacios.");
            return;
        }
        if (!esIPv4Valida(net)) {
            alert("La IP de Red es inválida.");
            return;
        }
        if (!esMascaraValida(mask)) {
            alert("La Máscara no es válida (debe tener bits contiguos).");
            return;
        }

        const poolNetInt = ipToInt(net.split('.').map(Number));
        const poolMaskInt = ipToInt(mask.split('.').map(Number));

        if (((poolNetInt & poolMaskInt) >>> 0) !== poolNetInt) {
            const sugerida = intToIp((poolNetInt & poolMaskInt) >>> 0).join('.');
            alert(`La red ${net} no coincide con la máscara ${mask}. La dirección de red correcta es ${sugerida}.`);
            return;
        }
        const poolBcastInt = (poolNetInt | (~poolMaskInt >>> 0)) >>> 0;
        const poolPrefijo = contarBitsMascara(mask.split('.').map(Number));

        if (gw !== "") {
            if (!esIPv4Valida(gw)) {
                alert("El Default Gateway es inválido.");
                return;
            }
            const gwInt = ipToInt(gw.split('.').map(Number));
            if (((gwInt & poolMaskInt) >>> 0) !== poolNetInt) {
                alert("El Default Gateway no pertenece a la red del Pool DHCP.");
                return;
            }
            if (poolPrefijo < 31 && (gwInt === poolNetInt || gwInt === poolBcastInt)) {
                alert("El Default Gateway no puede ser la dirección de red ni la de broadcast.");
                return;
            }
        }
        if (dns !== "" && !esIPv4Valida(dns)) {
            alert("El DNS Server es inválido.");
            return;
        }

        if (exc !== "") {
            const grupos = exc.split(',').map(g => g.trim()).filter(g => g !== "");
            for (let g of grupos) {
                const ips = g.split(/[\s\-]+/).filter(i => i !== "");
                if (ips.length > 2) {
                    alert(`El rango excluido "${g}" es inválido. Usa una sola IP o un rango de dos IPs separadas por espacio. Usa comas para múltiples reglas.`);
                    return;
                }
                for (let i of ips) {
                    if (!esIPv4Valida(i)) {
                        alert(`La IP a excluir "${i}" es inválida.`);
                        return;
                    }
                    if (((ipToInt(i.split('.').map(Number)) & poolMaskInt) >>> 0) !== poolNetInt) {
                        alert(`La IP a excluir "${i}" no pertenece a la red del DHCP.`);
                        return;
                    }
                }
                if (ips.length === 2 && ipToInt(ips[0].split('.').map(Number)) > ipToInt(ips[1].split('.').map(Number))) {
                    alert(`El rango "${g}" tiene la IP de inicio mayor que la de fin.`);
                    return;
                }
            }
        }

        if (nodo.dhcpPools.some(p => p.nombre.toLowerCase() === pool.toLowerCase())) {
            alert("Ya existe un Pool con ese nombre en este router.");
            return;
        }

        nodo.dhcpPools.push({
            nombre: pool,
            excluidas: exc !== "" ? exc : null,
            red: net,
            mascara: mask,
            gateway: gw || null,
            dns: dns || null
        });
        invalidarScript(nodo, "router");
        limpiarFormularioDhcp();
        renderizarTabla();
    }

    btnAgregarDhcp.addEventListener("click", agregarDhcpHandler);
    formularioDhcp.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && event.target.tagName === "INPUT") {
            event.preventDefault();
            agregarDhcpHandler();
        }
    });

    listaDhcpPools.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-quitar-dhcp")) {
            if (!guardEdit()) return;
            const nodo = nodoActual(); if (!nodo) return;
            nodo.dhcpPools.splice(parseInt(event.target.getAttribute("data-dhcp-index"), 10), 1);
            invalidarScript(nodo, "router");
            renderizarTabla();
        }
    });

    // --- RIPv2 ---
    function renderizarRipNetworks() {
        if (nodoSeleccionadoIndex === null || !listaNodos[nodoSeleccionadoIndex]) {
            listaRipNetworks.innerHTML = "";
            return;
        }
        const nodo = listaNodos[nodoSeleccionadoIndex];
        if (nodo.ripNetworks.length === 0) {
            listaRipNetworks.innerHTML = `<li class="list-group-item text-muted small py-2">No hay redes agregadas.</li>`;
        } else {
            listaRipNetworks.innerHTML = nodo.ripNetworks.map((net, index) => `
                <li class="list-group-item d-flex justify-content-between align-items-center py-1 px-2 mb-1 border rounded shadow-sm">
                    <span class="font-monospace text-dark fw-bold">${esc(net)}</span>
                    <button class="btn btn-sm btn-outline-danger fw-bold btn-quitar-rip" type="button" data-rip-index="${index}">X</button>
                </li>
            `).join('');
        }
    }

    function agregarRipNetworkHandler() {
        if (!guardEdit()) return;
        const nodo = nodoActual(); if (!nodo) return;
        const net = ripNetworkInput.value.trim();
        if (!esIPv4Valida(net)) {
            alert("Dirección IP inválida para RIP.");
            return;
        }

        const oct = net.split('.').map(Number);
        let classfulNet = net;

        if (oct[0] >= 1 && oct[0] <= 126) classfulNet = `${oct[0]}.0.0.0`;
        else if (oct[0] >= 128 && oct[0] <= 191) classfulNet = `${oct[0]}.${oct[1]}.0.0`;
        else if (oct[0] >= 192 && oct[0] <= 223) classfulNet = `${oct[0]}.${oct[1]}.${oct[2]}.0`;
        else {
            alert("La IP no pertenece a una Clase A (1-126), B (128-191) o C (192-223).");
            return;
        }

        if (nodo.ripNetworks.includes(classfulNet)) {
            alert("Esta red principal (Classful) ya está en la lista.");
            return;
        }

        if (net !== classfulNet) {
            alert(`Nota (IOS Cisco Classful): El protocolo RIPv2 ajustó tu subred (${net}) a su red principal con clase (${classfulNet}).`);
        }

        nodo.ripNetworks.push(classfulNet);
        invalidarScript(nodo, "router");
        ripNetworkInput.value = "";
        renderizarTabla();
    }

    btnAgregarRipNetwork.addEventListener("click", agregarRipNetworkHandler);
    ripNetworkInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            agregarRipNetworkHandler();
        }
    });

    listaRipNetworks.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-quitar-rip")) {
            if (!guardEdit()) return;
            const nodo = nodoActual(); if (!nodo) return;
            nodo.ripNetworks.splice(parseInt(event.target.getAttribute("data-rip-index"), 10), 1);
            invalidarScript(nodo, "router");
            renderizarTabla();
        }
    });

    // --- EIGRP ---
    function renderizarEigrpNetworks() {
        if (nodoSeleccionadoIndex === null || !listaNodos[nodoSeleccionadoIndex]) {
            listaEigrpNetworks.innerHTML = "";
            return;
        }
        const nodo = listaNodos[nodoSeleccionadoIndex];
        if (nodo.eigrpNetworks.length === 0) {
            listaEigrpNetworks.innerHTML = `<li class="list-group-item text-muted small py-2">No hay redes agregadas.</li>`;
        } else {
            listaEigrpNetworks.innerHTML = nodo.eigrpNetworks.map((e, index) => `
                <li class="list-group-item d-flex justify-content-between align-items-center py-1 px-2 mb-1 border rounded shadow-sm">
                    <div class="font-monospace" style="font-size: 0.85rem;">
                        <span class="text-dark fw-bold">${esc(e.red)}</span>
                        <span class="text-success fw-bold ms-2">${esc(e.wildcard)}</span>
                        <div class="text-muted" style="font-size: 0.72rem;">Máscara: ${esc(e.mascara)}</div>
                    </div>
                    <button class="btn btn-sm btn-outline-danger fw-bold btn-quitar-eigrp" type="button" data-eigrp-index="${index}">X</button>
                </li>
            `).join('');
        }
    }

    function actualizarWildcardEigrp() {
        const m = eigrpMascaraInput.value.trim();
        if (m !== "" && esMascaraValida(m)) {
            eigrpWildcardInput.value = calcularWildcard(m.split('.').map(Number)).join('.');
            eigrpMascaraInput.classList.remove("is-invalid");
        } else {
            eigrpWildcardInput.value = "";
            eigrpMascaraInput.classList.toggle("is-invalid", m !== "");
        }
    }
    eigrpMascaraInput.addEventListener("input", actualizarWildcardEigrp);

    eigrpAsInput.addEventListener("input", function () {
        const nodo = nodoActual(); if (!nodo) return;
        const val = this.value.trim();
        nodo.eigrpAS = val;
        const num = parseInt(val, 10);
        const valido = /^\d+$/.test(val) && num >= 1 && num <= 65535;
        this.classList.toggle("is-invalid", val !== "" && !valido);
        invalidarScript(nodo, "router");
        renderizarResumenNodos();
        guardarDatosStorage();
    });

    function agregarEigrpNetworkHandler() {
        if (!guardEdit()) return;
        const nodo = nodoActual(); if (!nodo) return;

        const red = eigrpRedInput.value.trim();
        const mask = eigrpMascaraInput.value.trim();

        if (!esIPv4Valida(red)) {
            alert("La dirección de red es inválida.");
            return;
        }
        if (mask === "") {
            alert("Ingresa la máscara de subred normal (Ej. 255.255.255.0).");
            return;
        }
        if (!esMascaraValida(mask)) {
            alert("La Máscara no es válida (bits contiguos). Usa la máscara normal, la wildcard se calcula sola.");
            return;
        }

        const redOct = red.split('.').map(Number);
        const maskOct = mask.split('.').map(Number);
        const redCalc = calcularRed(redOct, maskOct).join('.');
        if (redCalc !== redOct.join('.')) {
            alert(`La red ${red} contiene bits de host para la máscara ${mask}. La dirección de red correcta es ${redCalc}.`);
            return;
        }

        const wildcard = calcularWildcard(maskOct).join('.');
        if (nodo.eigrpNetworks.some(e => e.red === redCalc && e.mascara === mask)) {
            alert("Esta red ya está en la lista.");
            return;
        }

        nodo.eigrpNetworks.push({ red: redCalc, mascara: mask, wildcard });
        invalidarScript(nodo, "router");
        eigrpRedInput.value = "";
        eigrpMascaraInput.value = "";
        eigrpWildcardInput.value = "";
        eigrpMascaraInput.classList.remove("is-invalid");
        renderizarTabla();
    }

    btnAgregarEigrpNetwork.addEventListener("click", agregarEigrpNetworkHandler);
    [eigrpRedInput, eigrpMascaraInput].forEach(inp => {
        inp.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                agregarEigrpNetworkHandler();
            }
        });
    });

    listaEigrpNetworks.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-quitar-eigrp")) {
            if (!guardEdit()) return;
            const nodo = nodoActual(); if (!nodo) return;
            nodo.eigrpNetworks.splice(parseInt(event.target.getAttribute("data-eigrp-index"), 10), 1);
            invalidarScript(nodo, "router");
            renderizarTabla();
        }
    });

    // --- OSPF ---
    function renderizarOspfNetworks() {
        if (nodoSeleccionadoIndex === null || !listaNodos[nodoSeleccionadoIndex]) {
            listaOspfNetworks.innerHTML = "";
            return;
        }
        const nodo = listaNodos[nodoSeleccionadoIndex];
        if (nodo.ospfNetworks.length === 0) {
            listaOspfNetworks.innerHTML = `<li class="list-group-item text-muted small py-2">No hay redes OSPF agregadas. Puedes agregarlas manualmente o importar tus subinterfaces dot1Q.</li>`;
        } else {
            listaOspfNetworks.innerHTML = nodo.ospfNetworks.map((o, index) => `
                <li class="list-group-item d-flex justify-content-between align-items-center py-1 px-2 mb-1 border rounded shadow-sm">
                    <div class="font-monospace" style="font-size: 0.85rem;">
                        <span class="badge bg-success me-2">Área ${esc(o.area ?? "0")}</span>
                        <span class="text-dark fw-bold">${esc(o.red)}</span>
                        <span class="text-success fw-bold ms-2">${esc(o.wildcard)}</span>
                        ${o.origenDot1q ? `<span class="badge bg-info text-dark ms-2">${esc(o.origenDot1q)}</span>` : ''}
                        <div class="text-muted" style="font-size: 0.72rem;">Máscara: ${esc(o.mascara)}</div>
                    </div>
                    <button class="btn btn-sm btn-outline-danger fw-bold btn-quitar-ospf" type="button" data-ospf-index="${index}">X</button>
                </li>
            `).join('');
        }
    }

    function actualizarWildcardOspf() {
        const m = ospfMascaraInput.value.trim();
        if (m !== "" && esMascaraValida(m)) {
            ospfWildcardInput.value = calcularWildcard(m.split('.').map(Number)).join('.');
            ospfMascaraInput.classList.remove("is-invalid");
        } else {
            ospfWildcardInput.value = "";
            ospfMascaraInput.classList.toggle("is-invalid", m !== "");
        }
    }
    ospfMascaraInput.addEventListener("input", actualizarWildcardOspf);

    ospfProcessIdInput.addEventListener("input", function () {
        const nodo = nodoActual(); if (!nodo) return;
        const val = this.value.trim();
        nodo.ospfProcessId = val;
        const num = parseInt(val, 10);
        const valido = /^\d+$/.test(val) && num >= 1 && num <= 65535;
        this.classList.toggle("is-invalid", val !== "" && !valido);
        invalidarScript(nodo, "router");
        renderizarResumenNodos();
        guardarDatosStorage();
    });

    function agregarOspfNetworkHandler() {
        if (!guardEdit()) return;
        const nodo = nodoActual(); if (!nodo) return;

        const red = ospfRedInput.value.trim();
        const mask = ospfMascaraInput.value.trim();
        const areaStr = ospfAreaInput.value.trim() !== "" ? ospfAreaInput.value.trim() : "0";

        if (!/^\d+$/.test(areaStr) || parseInt(areaStr, 10) < 0) {
            alert("El número de Área OSPF debe ser un entero mayor o igual a 0 (Ej. 0).");
            return;
        }
        if (!esIPv4Valida(red)) {
            alert("La dirección de red para OSPF es inválida.");
            return;
        }
        if (mask === "") {
            alert("Ingresa la máscara de subred normal (Ej. 255.255.255.0).");
            return;
        }
        if (!esMascaraValida(mask)) {
            alert("La Máscara no es válida (bits contiguos). Usa la máscara normal, la wildcard se calcula sola.");
            return;
        }

        const redOct = red.split('.').map(Number);
        const maskOct = mask.split('.').map(Number);
        const redCalc = calcularRed(redOct, maskOct).join('.');
        if (redCalc !== redOct.join('.')) {
            alert(`La dirección ${red} contiene bits de host para la máscara ${mask}. La dirección de red correcta es ${redCalc}.`);
            return;
        }

        const wildcard = calcularWildcard(maskOct).join('.');
        if (nodo.ospfNetworks.some(o => o.red === redCalc && o.mascara === mask && String(o.area) === areaStr)) {
            alert("Esta red ya está registrada en esa Área OSPF.");
            return;
        }

        nodo.ospfNetworks.push({
            red: redCalc,
            mascara: mask,
            wildcard,
            area: areaStr,
            origenDot1q: null
        });
        invalidarScript(nodo, "router");
        ospfRedInput.value = "";
        ospfMascaraInput.value = "";
        ospfWildcardInput.value = "";
        ospfMascaraInput.classList.remove("is-invalid");
        renderizarTabla();
    }

    btnAgregarOspfNetwork.addEventListener("click", agregarOspfNetworkHandler);
    [ospfRedInput, ospfMascaraInput, ospfAreaInput].forEach(inp => {
        inp.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                agregarOspfNetworkHandler();
            }
        });
    });

    btnImportarDot1qOspf.addEventListener("click", () => {
        if (!guardEdit()) return;
        const nodo = nodoActual(); if (!nodo) return;

        const areaStr = ospfAreaInput.value.trim() !== "" ? ospfAreaInput.value.trim() : "0";
        let agregadas = 0;

        if (nodo.vlans && nodo.vlans.length > 0) {
            nodo.vlans.forEach(v => {
                if (esIPv4Valida(v.ip) && esMascaraValida(v.mascara)) {
                    const maskOct = v.mascara.split('.').map(Number);
                    const redCalc = calcularRed(v.ip.split('.').map(Number), maskOct).join('.');
                    const wildcard = calcularWildcard(maskOct).join('.');
                    if (!nodo.ospfNetworks.some(o => o.red === redCalc && o.mascara === v.mascara)) {
                        nodo.ospfNetworks.push({
                            red: redCalc,
                            mascara: v.mascara,
                            wildcard,
                            area: areaStr,
                            origenDot1q: `dot1Q ${v.intf.toUpperCase()}.${v.id}`
                        });
                        agregadas++;
                    }
                }
            });
        }

        const intfsL3 = nodo.interfaces.filter(i => (!i.mode || i.mode === 'none') && esIPv4Valida(i.ip) && esMascaraValida(i.mascara));
        intfsL3.forEach(i => {
            const maskOct = i.mascara.split('.').map(Number);
            const redCalc = calcularRed(i.ip.split('.').map(Number), maskOct).join('.');
            const wildcard = calcularWildcard(maskOct).join('.');
            if (!nodo.ospfNetworks.some(o => o.red === redCalc && o.mascara === i.mascara)) {
                nodo.ospfNetworks.push({
                    red: redCalc,
                    mascara: i.mascara,
                    wildcard,
                    area: areaStr,
                    origenDot1q: `INT ${i.nombre.toUpperCase()}`
                });
                agregadas++;
            }
        });

        if (agregadas === 0) {
            alert("No se encontraron subredes nuevas en tus Subinterfaces dot1Q ni en tus Interfaces L3 para importar (o ya estaban todas agregadas en OSPF).");
            return;
        }

        invalidarScript(nodo, "router");
        renderizarTabla();
    });

    listaOspfNetworks.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-quitar-ospf")) {
            if (!guardEdit()) return;
            const nodo = nodoActual(); if (!nodo) return;
            nodo.ospfNetworks.splice(parseInt(event.target.getAttribute("data-ospf-index"), 10), 1);
            invalidarScript(nodo, "router");
            renderizarTabla();
        }
    });

    // --- Enrutamiento Inter-VLAN (Router-on-a-Stick / dot1Q) ---
    function renderizarVlans() {
        if (nodoSeleccionadoIndex === null || !listaNodos[nodoSeleccionadoIndex]) {
            listaVlans.innerHTML = "";
            return;
        }
        const nodo = listaNodos[nodoSeleccionadoIndex];
        if (nodo.vlans.length === 0) {
            listaVlans.innerHTML = `<li class="list-group-item text-muted small py-2">No hay subinterfaces VLAN configuradas.</li>`;
        } else {
            listaVlans.innerHTML = nodo.vlans.map((v, index) => {
                const badgeNativa = v.nativa ? `<span class="badge bg-warning text-dark ms-2">NATIVE</span>` : '';
                const badgeHelper = v.helper ? `<span class="badge bg-info text-dark ms-2">HELPER: ${esc(v.helper)}</span>` : '';
                return `
                <li class="list-group-item d-flex justify-content-between align-items-center py-2 px-3 mb-2 border border-success rounded shadow-sm">
                    <div>
                        <div class="fw-bold text-dark">
                            <span class="badge bg-success me-2">${esc(v.intf.toUpperCase())}.${esc(v.id)}</span>
                            <code>encapsulation dot1Q ${esc(v.id)}${v.nativa ? ' native' : ''}</code>
                            ${badgeNativa}${badgeHelper}
                        </div>
                        <div class="text-muted font-monospace small mt-1">
                            Gateway: <span class="text-dark fw-bold">${esc(v.ip)}</span> | Máscara: <span class="text-dark fw-bold">${esc(v.mascara)}</span>
                        </div>
                    </div>
                    <button class="btn btn-sm btn-outline-danger fw-bold btn-quitar-vlan" type="button" data-vlan-index="${index}">X</button>
                </li>`;
            }).join('');
        }
    }

    function agregarVlanHandler() {
        if (!guardEdit()) return;
        const nodo = nodoActual(); if (!nodo) return;

        const intf = canonIntf(vlanIntfFisica.value);
        const id = parseInt(vlanId.value.trim(), 10);
        const ip = vlanIp.value.trim();
        const mask = vlanMascara.value.trim();
        const hlp = vlanHelper.value.trim();
        const nativa = vlanCheckNativa.checked;

        if (intf === "" || isNaN(id) || ip === "" || mask === "") {
            alert("El Puerto Físico, VLAN ID, IP Gateway y Máscara son obligatorios.");
            return;
        }
        if (!/^(?:fa|f|gi|gig|g)\d+\/\d+(?:\/\d+)?$/.test(intf)) {
            alert("El puerto físico del Router para subinterfaces VLAN debe ser FastEthernet o GigabitEthernet (Ej. g0/0, f0/0, g0/0/0).");
            return;
        }
        if (id < 1 || id > 4094) {
            alert("El VLAN ID debe estar entre 1 y 4094.");
            return;
        }
        if (!esIPv4Valida(ip)) {
            alert("La IP Gateway de la subinterfaz no es válida.");
            return;
        }
        if (!esMascaraValida(mask)) {
            alert("La Máscara de la subinterfaz no es válida.");
            return;
        }
        if (hlp !== "" && !esIPv4Valida(hlp)) {
            alert("La IP Helper-Address no es válida.");
            return;
        }
        if (nodo.vlans.some(v => v.intf === intf && Number(v.id) === id)) {
            alert(`La subinterfaz ${intf.toUpperCase()}.${id} ya está agregada.`);
            return;
        }

        if (nativa && nodo.vlans.some(v => v.intf === intf && v.nativa)) {
            alert(`${intf.toUpperCase()} ya tiene una subinterfaz 'native'. Solo puede haber una por puerto físico.`);
            return;
        }

        nodo.vlans.push({
            intf,
            id,
            ip,
            mascara: mask,
            helper: hlp !== "" ? hlp : null,
            nativa
        });
        invalidarScript(nodo, "router");
        limpiarFormularioVlans();
        renderizarTabla();
    }

    btnAgregarVlan.addEventListener("click", agregarVlanHandler);
    formularioVlans.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && event.target.tagName === "INPUT") {
            event.preventDefault();
            agregarVlanHandler();
        }
    });

    listaVlans.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-quitar-vlan")) {
            if (!guardEdit()) return;
            const nodo = nodoActual(); if (!nodo) return;
            nodo.vlans.splice(parseInt(event.target.getAttribute("data-vlan-index"), 10), 1);
            invalidarScript(nodo, "router");
            renderizarTabla();
        }
    });

    // --- Generador de Script para SWITCH (Capa 2) ---
    function generarScriptSwitchHandler() {
        if (!guardEdit()) return;
        const nodo = nodoActual(); if (!nodo) return;
        if (nodo.vlanId === null) {
            alert("Esta red no tiene VLAN (por ejemplo un enlace serial o una LAN de servidor), así que no lleva script de switch con VLANs.");
            return;
        }

        const pDefault = canonIntf(switchPuertoDefault.value);
        const pTrunk = canonIntf(switchPuertoTrunkOpcional.value);

        if (tienePuertoCeroDeSwitch(pDefault) || tienePuertoCeroDeSwitch(pTrunk)) {
            alert("⚠️ Recuerda: En los switches de Cisco la numeración de los puertos físicos siempre inicia en 1 (FastEthernet 0/1, 0/2, etc.) y el puerto 0/0 NO existe (provoca % Invalid input detected en Packet Tracer).\n\nSe ajustará automáticamente a 0/1.");
        }

        const hayPuertosSwitch = nodo.interfaces.some(i => i.mode === 'access' || i.mode === 'trunk');
        const regexPuertoSwitch = /^(?:fa|g)\d+\/\d+(?:\/\d+)?(?:-\d+)?$/;
        const puertosAValidar = [[pTrunk, "Troncal Uplink"]];
        if (!hayPuertosSwitch) puertosAValidar.push([pDefault, "Acceso por defecto"]);
        for (const [p, etiqueta] of puertosAValidar) {
            if (p === "") continue;
            const r = parsearRangoPuerto(p);
            if (!regexPuertoSwitch.test(p) || !r || r.ini > r.fin) {
                alert(`El puerto ${etiqueta} "${p}" no es válido. Ejemplos: fa0/1, fa0/1-10, g0/1.`);
                return;
            }
        }

        const nombreVlanLimpio = nombreVlanCisco(nodo.cliente, nodo.vlanId);
        let cli = "enable\nconfigure terminal\n";
        cli += `vlan ${nodo.vlanId}\nname ${nombreVlanLimpio}\nexit\n`;

        const intfsSwitch = nodo.interfaces.filter(i => i.mode === 'access' || i.mode === 'trunk');

        if (intfsSwitch.length > 0) {
            intfsSwitch.forEach(i => {
                const nombreExpandido = formatearInterfazCisco(i.nombre, true);
                if (i.nombre.includes("-")) {
                    cli += `interface range ${nombreExpandido}\n`;
                } else {
                    cli += `interface ${nombreExpandido}\n`;
                }

                if (i.mode === 'access') {
                    cli += `switchport mode access\nswitchport access vlan ${nodo.vlanId}\n`;
                } else if (i.mode === 'trunk') {
                    cli += `switchport mode trunk\n`;
                }
                cli += `exit\n`;
            });
        } else {
            const puertoReal = pDefault !== "" ? pDefault : "fa0/1";
            const nombreExpandido = formatearInterfazCisco(puertoReal, true);
            if (puertoReal.includes("-")) {
                cli += `interface range ${nombreExpandido}\n`;
            } else {
                cli += `interface ${nombreExpandido}\n`;
            }
            cli += `switchport mode access\nswitchport access vlan ${nodo.vlanId}\nexit\n`;
        }

        if (pTrunk !== "") {
            const trunkExpandido = formatearInterfazCisco(pTrunk, true);
            if (pTrunk.includes("-")) {
                cli += `interface range ${trunkExpandido}\n`;
            } else {
                cli += `interface ${trunkExpandido}\n`;
            }
            cli += `switchport mode trunk\nexit\n`;
        }

        cli += "exit\nwrite memory\n";
        terminalSwitch.textContent = cli;
        nodo.scriptSwitch = cli;
        btnListoSwitch.style.display = "inline-block";
        renderizarResumenNodos();
        guardarDatosStorage();
    }

    btnGenerarConfigSwitch.addEventListener("click", generarScriptSwitchHandler);
    [switchPuertoDefault, switchPuertoTrunkOpcional].forEach(inp => {
        inp.addEventListener("keydown", (ev) => {
            if (ev.key === "Enter") {
                ev.preventDefault();
                generarScriptSwitchHandler();
            }
        });
    });

    btnCopiarSwitch.addEventListener("click", () => {
        copiarAlPortapapeles(terminalSwitch.textContent, btnCopiarSwitch, "📋 Copiar Todo", "btn-outline-secondary", "btn-success");
    });

    btnListoSwitch.addEventListener("click", () => {
        const nodo = nodoActual();
        if (nodo) {
            nodo.scriptSwitch = terminalSwitch.textContent;
            renderizarTabla();
            seccionResumenNodos.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // --- Generador de Script para ROUTER (Capa 3) y Auditoría ---
    btnGenerarConfigRouter.addEventListener("click", () => {
        if (!guardEdit()) return;
        const nodo = nodoActual(); if (!nodo) return;

        const logsAuditoria = auditarNodo(nodo);
        nodo.auditoriaLogs = logsAuditoria;

        panelAuditoria.style.display = "block";
        panelAuditoria.innerHTML = `
            <div class="alert ${logsAuditoria.some(l => l.tipo === 'danger') ? 'alert-danger' : 'alert-success'} shadow-sm">
                <h6 class="fw-bold mb-2">🔍 Reporte de Auditoría Matemática:</h6>
                <ul class="mb-0 small font-monospace">${logsAuditoria.map(log => `<li>${log.tipo === 'danger' ? '❌' : (log.tipo === 'warning' ? '⚠️' : '✅')} ${esc(log.texto)}</li>`).join('')}</ul>
            </div>
        `;

        let cli = "enable\nconfigure terminal\n";

        // 1. Interfaces Físicas L3 del Router (excluyendo puertos físicos sin IP que son padres dot1Q)
        const padresDot1q = new Set((nodo.vlansHabilitado ? nodo.vlans : []).map(v => v.intf));
        const intfsL3 = nodo.interfaces.filter(i => (!i.mode || i.mode === 'none') && !(padresDot1q.has(i.nombre) && !i.ip));
        if (intfsL3.length > 0) {
            intfsL3.forEach(intf => {
                const nombreCompleto = formatearInterfazCisco(intf.nombre, false);
                cli += `interface ${nombreCompleto}\n`;
                if (intf.ip && intf.mascara) cli += `ip address ${intf.ip} ${intf.mascara}\n`;
                if (intf.helper) cli += `ip helper-address ${intf.helper}\n`;
                const esSerial = intf.nombre.toLowerCase().startsWith('s');
                if (esSerial && intf.clockRate && intf.clockRateValue) {
                    cli += `clock rate ${intf.clockRateValue}\n`;
                }
                cli += `no shutdown\nexit\n`;
            });
        }

        // 2. Subinterfaces VLAN (Router-on-a-Stick / encapsulation dot1Q)
        if (nodo.vlansHabilitado && nodo.vlans.length > 0) {
            const padresUnicos = [...new Set(nodo.vlans.map(v => v.intf))];
            const padresYaConfigurados = new Set(intfsL3.map(i => i.nombre));
            padresUnicos.filter(p => !padresYaConfigurados.has(p)).forEach(p => {
                cli += `interface ${formatearInterfazCisco(p, false)}\nno ip address\nno shutdown\nexit\n`;
            });

            nodo.vlans.forEach(v => {
                cli += `interface ${formatearInterfazCisco(v.intf, false)}.${v.id}\n`;
                cli += `encapsulation dot1Q ${v.id}${v.nativa ? ' native' : ''}\n`;
                cli += `ip address ${v.ip} ${v.mascara}\n`;
                if (v.helper) cli += `ip helper-address ${v.helper}\n`;
                cli += `exit\n`;
            });
        }

        // 3. DHCP Pools y Rangos Excluidos
        if (nodo.dhcpHabilitado && nodo.dhcpPools.length > 0) {
            nodo.dhcpPools.forEach(pool => {
                if (pool.excluidas) {
                    const grupos = pool.excluidas.split(',').map(g => g.trim()).filter(g => g !== "");
                    grupos.forEach(g => {
                        const ips = g.split(/[\s\-]+/).filter(i => i !== "");
                        if (ips.length > 0) {
                            cli += `ip dhcp excluded-address ${ips.join(' ')}\n`;
                        }
                    });
                }
                cli += `ip dhcp pool ${pool.nombre}\nnetwork ${pool.red} ${pool.mascara}\n`;
                if (pool.gateway) cli += `default-router ${pool.gateway}\n`;
                if (pool.dns) cli += `dns-server ${pool.dns}\n`;
                cli += `exit\n`;
            });
        }

        // 4. Enrutamiento RIPv2
        if (nodo.ripHabilitado && nodo.ripNetworks.length > 0) {
            cli += `router rip\nversion 2\nno auto-summary\n`;
            nodo.ripNetworks.forEach(net => cli += `network ${net}\n`);
            cli += `exit\n`;
        }

        // 5. Enrutamiento EIGRP
        const asEigrp = String(nodo.eigrpAS ?? "");
        const asEigrpValido = /^\d+$/.test(asEigrp) && parseInt(asEigrp, 10) >= 1 && parseInt(asEigrp, 10) <= 65535;
        if (nodo.eigrpHabilitado && nodo.eigrpNetworks.length > 0 && asEigrpValido) {
            cli += `router eigrp ${parseInt(asEigrp, 10)}\nno auto-summary\n`;
            nodo.eigrpNetworks.forEach(e => cli += `network ${e.red} ${e.wildcard}\n`);
            cli += `exit\n`;
        }

        // 6. Enrutamiento OSPF
        const pidOspf = String(nodo.ospfProcessId ?? "");
        const pidOspfValido = /^\d+$/.test(pidOspf) && parseInt(pidOspf, 10) >= 1 && parseInt(pidOspf, 10) <= 65535;
        if (nodo.ospfHabilitado && nodo.ospfNetworks.length > 0 && pidOspfValido) {
            cli += `router ospf ${parseInt(pidOspf, 10)}\n`;
            nodo.ospfNetworks.forEach(o => {
                const areaId = (o.area !== undefined && o.area !== null && String(o.area) !== "") ? o.area : "0";
                cli += `network ${o.red} ${o.wildcard} area ${areaId}\n`;
            });
            cli += `exit\n`;
        }

        cli += "exit\nwrite memory\n";
        terminalRouter.textContent = cli;
        nodo.scriptRouter = cli;
        nodo.scriptGenerado = cli;
        btnListoRouter.style.display = "inline-block";
        renderizarResumenNodos();
        guardarDatosStorage();
    });

    btnCopiarRouter.addEventListener("click", () => {
        copiarAlPortapapeles(terminalRouter.textContent, btnCopiarRouter, "📋 Copiar Todo", "btn-outline-secondary", "btn-success");
    });

    btnListoRouter.addEventListener("click", () => {
        const nodo = nodoActual();
        if (nodo) {
            nodo.scriptRouter = terminalRouter.textContent;
            nodo.scriptGenerado = terminalRouter.textContent;
            renderizarTabla();
            seccionResumenNodos.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // --- Acordeón de Resumen de Nodos Configurados ---
    function renderizarResumenNodos() {
        const nodosConfigurados = listaNodos.filter(n => n.scriptGenerado || n.scriptRouter || n.scriptSwitch);
        if (nodosConfigurados.length > 0) {
            seccionResumenNodos.style.display = "flex";
        } else {
            seccionResumenNodos.style.display = "none";
            return;
        }

        acordeonResumenNodos.innerHTML = nodosConfigurados.map((nodo) => {
            const indexReal = listaNodos.indexOf(nodo);
            const tieneRouter = !!(nodo.scriptRouter || nodo.scriptGenerado);
            const semaforoBadge = tieneRouter
                ? (nodo.auditoriaLogs.some(l => l.tipo === 'danger') ? `<span class="badge bg-danger ms-2">🔴 Error IP</span>` : `<span class="badge bg-success ms-2">🟢 OK IP</span>`)
                : `<span class="badge bg-info text-dark ms-2">🔌 Switch L2</span>`;

            const desgloseIntf = nodo.interfaces.length > 0
                ? nodo.interfaces.map(intf => `<li class="list-group-item py-1 px-2 d-flex justify-content-between"><span class="fw-bold">${esc(intf.nombre.toUpperCase())}</span><span class="font-monospace text-muted">${intf.ip ? esc(intf.ip) : (intf.mode ? `L2 ${esc(intf.mode.toUpperCase())}` : 'Padre dot1Q / Sin IP')}</span></li>`).join('')
                : `<li class="list-group-item text-muted small">Sin interfaces</li>`;

            const dhcpActivo = nodo.dhcpHabilitado && nodo.dhcpPools.length > 0;
            const desgloseDhcp = dhcpActivo
                ? nodo.dhcpPools.map(pool => `<li class="list-group-item py-1 px-2 d-flex justify-content-between"><span class="fw-bold text-success">${esc(pool.nombre)}</span><span class="font-monospace text-muted">${esc(pool.red)}</span></li>`).join('')
                : `<li class="list-group-item text-muted small">Sin DHCP</li>`;

            const ripActivo = nodo.ripHabilitado && nodo.ripNetworks.length > 0;
            const desgloseRip = ripActivo
                ? nodo.ripNetworks.map(net => `<li class="list-group-item py-1 px-2 font-monospace">${esc(net)}</li>`).join('')
                : `<li class="list-group-item text-muted small">Sin RIPv2</li>`;

            const eigrpActivo = nodo.eigrpHabilitado && nodo.eigrpNetworks.length > 0;
            const desgloseEigrp = eigrpActivo
                ? nodo.eigrpNetworks.map(e => `<li class="list-group-item py-1 px-2 d-flex justify-content-between font-monospace"><span>${esc(e.red)}</span><span class="text-success">${esc(e.wildcard)}</span></li>`).join('')
                : `<li class="list-group-item text-muted small">Sin EIGRP</li>`;

            const ospfActivo = nodo.ospfHabilitado && nodo.ospfNetworks.length > 0;
            const desgloseOspf = ospfActivo
                ? nodo.ospfNetworks.map(o => `<li class="list-group-item py-1 px-2 d-flex justify-content-between font-monospace"><span>${esc(o.red)} (${esc(o.wildcard)})</span><span class="badge bg-success">Área ${esc(o.area ?? "0")}</span></li>`).join('')
                : `<li class="list-group-item text-muted small">Sin OSPF</li>`;

            const vlansActivo = nodo.vlansHabilitado && nodo.vlans.length > 0;
            const desgloseVlans = vlansActivo
                ? nodo.vlans.map(v => `<li class="list-group-item py-1 px-2 d-flex justify-content-between font-monospace"><span>${esc(v.intf.toUpperCase())}.${esc(v.id)} (dot1Q)</span><span class="text-success">${esc(v.ip)}</span></li>`).join('')
                : `<li class="list-group-item text-muted small">Sin Subinterfaces</li>`;

            const auditList = nodo.auditoriaLogs.length > 0
                ? nodo.auditoriaLogs.map(l => `<li class="list-group-item py-1 px-2 small font-monospace">${l.tipo === 'danger' ? '❌' : (l.tipo === 'warning' ? '⚠️' : '✅')} ${esc(l.texto)}</li>`).join('')
                : `<li class="list-group-item text-muted small">Sin auditoría L3</li>`;

            const scriptRouterTexto = nodo.scriptRouter || nodo.scriptGenerado;

            return `
            <div class="accordion-item mb-2 border shadow-sm">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed fw-bold text-dark bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_${indexReal}">
                        ✅ ${esc(nodo.cliente)} ${nodo.sitio ? `<span class="badge bg-dark ms-2">${esc(nodo.sitio)}</span>` : ''} <span class="badge bg-danger ms-2">${esc(etiquetaVlan(nodo))}</span> <span class="badge bg-secondary ms-1">${esc(nodo.direccion)}</span> ${semaforoBadge}
                        <span class="ms-auto me-3 d-none d-md-block">
                            <span class="badge bg-primary me-1">${nodo.interfaces.length} INTs</span>
                            <span class="badge bg-info text-dark me-1">${vlansActivo ? nodo.vlans.length : 0} dot1Q</span>
                            <span class="badge bg-success me-1">${dhcpActivo ? nodo.dhcpPools.length : 0} DHCPs</span>
                            <span class="badge bg-dark me-1">${ripActivo ? nodo.ripNetworks.length : 0} RIPs</span>
                            <span class="badge bg-secondary me-1">${eigrpActivo ? nodo.eigrpNetworks.length : 0} EIGRPs</span>
                            <span class="badge bg-warning text-dark">${ospfActivo ? nodo.ospfNetworks.length : 0} OSPFs</span>
                        </span>
                    </button>
                </h2>
                <div id="collapse_${indexReal}" class="accordion-collapse collapse" data-bs-parent="#acordeonResumenNodos">
                    <div class="accordion-body bg-white border-top">
                        <div class="row mb-4">
                            <div class="col-md-4 mb-3"><h6 class="fw-bold text-primary border-bottom pb-1">Interfaces</h6><ul class="list-group list-group-flush">${desgloseIntf}</ul></div>
                            <div class="col-md-4 mb-3"><h6 class="fw-bold text-success border-bottom pb-1">Subinterfaces dot1Q</h6><ul class="list-group list-group-flush">${desgloseVlans}</ul></div>
                            <div class="col-md-4 mb-3"><h6 class="fw-bold text-success border-bottom pb-1">Pools DHCP</h6><ul class="list-group list-group-flush">${desgloseDhcp}</ul></div>
                            <div class="col-md-3 mb-3"><h6 class="fw-bold text-dark border-bottom pb-1">Redes RIPv2</h6><ul class="list-group list-group-flush">${desgloseRip}</ul></div>
                            <div class="col-md-3 mb-3"><h6 class="fw-bold text-success border-bottom pb-1">Redes EIGRP${nodo.eigrpAS ? ` (AS ${esc(nodo.eigrpAS)})` : ''}</h6><ul class="list-group list-group-flush">${desgloseEigrp}</ul></div>
                            <div class="col-md-3 mb-3"><h6 class="fw-bold text-success border-bottom pb-1">Redes OSPF${nodo.ospfProcessId ? ` (PID ${esc(nodo.ospfProcessId)})` : ''}</h6><ul class="list-group list-group-flush">${desgloseOspf}</ul></div>
                            <div class="col-md-3 mb-3"><h6 class="fw-bold text-danger border-bottom pb-1">Diagnóstico IP</h6><ul class="list-group list-group-flush">${auditList}</ul></div>
                        </div>
                        ${nodo.scriptSwitch ? `
                        <div class="mb-3">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="badge bg-info text-dark fs-6">🔌 Script Switch CLI (Capa 2)</span>
                                <button class="btn btn-sm btn-outline-info text-dark btn-copiar-resumen fw-bold" type="button" data-script="${encodeURIComponent(nodo.scriptSwitch)}">📋 Copiar Script Switch</button>
                            </div>
                            <pre class="bg-dark text-info p-3 rounded font-monospace m-0">${esc(nodo.scriptSwitch)}</pre>
                        </div>` : ''}
                        ${scriptRouterTexto ? `
                        <div>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="badge bg-success fs-6">⚡ Script Router CLI (Capa 3)</span>
                                <button class="btn btn-sm btn-outline-primary btn-copiar-resumen fw-bold" type="button" data-script="${encodeURIComponent(scriptRouterTexto)}">📋 Copiar Script Router</button>
                            </div>
                            <pre class="bg-dark text-success p-3 rounded font-monospace m-0">${esc(scriptRouterTexto)}</pre>
                        </div>` : ''}
                    </div>
                </div>
            </div>`;
        }).join('');
    }

    acordeonResumenNodos.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-copiar-resumen")) {
            const claseBase = event.target.classList.contains("btn-outline-info") ? "btn-outline-info" : "btn-outline-primary";
            copiarAlPortapapeles(
                decodeURIComponent(event.target.getAttribute("data-script")),
                event.target,
                event.target.textContent,
                claseBase,
                "btn-success"
            );
        }
    });

    btnDeshacer.addEventListener("click", () => {
        if (!guardEdit()) return;
        if (historialBorrados.length > 0) {
            const r = historialBorrados.pop();
            listaNodos.splice(r.index, 0, r.nodo);
            if (nodoSeleccionadoIndex !== null && nodoSeleccionadoIndex >= r.index) {
                nodoSeleccionadoIndex++;
            }
            renderizarTabla();
        }
    });

    tablaNodosBody.addEventListener("click", function (event) {
        if (event.target.closest(".copy-click")) {
            event.stopPropagation();
            flashCopia(event.target.closest(".copy-click"));
            return;
        }
        const seleccion = window.getSelection ? window.getSelection() : null;
        if (!event.target.closest("button") && seleccion && String(seleccion).trim() !== "" && tablaNodosBody.contains(seleccion.anchorNode)) {
            return; // se está seleccionando texto con el mouse para copiar a mano
        }

        if (event.target.closest(".btn-eliminar")) {
            if (!guardEdit()) return;
            const index = parseInt(event.target.closest(".btn-eliminar").getAttribute("data-index"), 10);
            historialBorrados.push({ index: index, nodo: listaNodos[index] });
            listaNodos.splice(index, 1);
            if (nodoSeleccionadoIndex === index) {
                nodoSeleccionadoIndex = null;
                intfEditIndex = null;
            } else if (nodoSeleccionadoIndex !== null && nodoSeleccionadoIndex > index) {
                nodoSeleccionadoIndex--;
            }
            renderizarTabla();
            return;
        }

        const fila = event.target.closest(".fila-nodo");
        if (fila) {
            if (!guardEdit()) return;
            const index = parseInt(fila.getAttribute("data-index"), 10);
            nodoSeleccionadoIndex = (nodoSeleccionadoIndex === index) ? null : index;
            intfEditIndex = null;
            seccionRouter.style.display = "none";
            seccionSwitch.style.display = "none";
            panelAuditoria.style.display = "none";

            const sel = nodoActual();
            terminalRouter.textContent = (sel && (sel.scriptRouter || sel.scriptGenerado)) ? (sel.scriptRouter || sel.scriptGenerado) : TEXTO_TERMINAL_VACIO;
            terminalSwitch.textContent = (sel && sel.scriptSwitch) ? sel.scriptSwitch : TEXTO_SWITCH_VACIO;
            btnListoRouter.style.display = (sel && (sel.scriptRouter || sel.scriptGenerado)) ? "inline-block" : "none";
            btnListoSwitch.style.display = (sel && sel.scriptSwitch) ? "inline-block" : "none";

            renderizarTabla();
        }
    });

    // =====================================================================
    // --- SUBNETEO DE VLANs (VLSM / FLSM) ---
    // =====================================================================

    // Construye un objeto de nodo completo a partir de una red (entero) y su prefijo
    function crearDatosRed(redInt, cidr, vid, sitio = "") {
        const maskOct = calcularMascara(cidr);
        const maskInt = ipToInt(maskOct);
        const netInt = (redInt & maskInt) >>> 0;
        const bcastInt = (netInt | (~maskInt >>> 0)) >>> 0;
        let hMin, hMax, n;
        if (cidr === 32) { n = 1; hMin = netInt; hMax = netInt; }
        else if (cidr === 31) { n = 2; hMin = netInt; hMax = bcastInt; }
        else { n = Math.pow(2, 32 - cidr) - 2; hMin = netInt + 1; hMax = bcastInt - 1; }
        return {
            vlanId: vid,
            sitio,
            direccion: `${intToIp(netInt).join('.')}/${cidr}`,
            mascara: maskOct.join('.'),
            hostMin: intToIp(hMin).join('.'),
            hostMax: intToIp(hMax).join('.'),
            broadcast: intToIp(bcastInt).join('.'),
            hosts: n.toLocaleString(),
            hostsCrudo: n,
            interfaces: [], dhcpPools: [], ripNetworks: [], eigrpNetworks: [], ospfNetworks: [], vlans: [],
            eigrpAS: "", ospfProcessId: "1",
            dhcpHabilitado: false, ripHabilitado: false, eigrpHabilitado: false, ospfHabilitado: false, vlansHabilitado: false,
            scriptGenerado: null, scriptRouter: null, scriptSwitch: null, auditoriaLogs: []
        };
    }

    function redesSeTraslapan(dirA, dirB) {
        const [ipA, cA] = String(dirA).split('/');
        const [ipB, cB] = String(dirB).split('/');
        const a = parseInt(cA, 10), b = parseInt(cB, 10);
        if (!esIPv4Valida(ipA) || !esIPv4Valida(ipB) || !Number.isInteger(a) || !Number.isInteger(b)) return false;
        const m = ipToInt(calcularMascara(Math.min(a, b)));
        return ((ipToInt(ipA.split('.').map(Number)) & m) >>> 0) === ((ipToInt(ipB.split('.').map(Number)) & m) >>> 0);
    }

    // Bits de host mínimos para alojar h hosts (bloque mínimo /30)
    function bitsParaHosts(h) {
        let k = 2;
        while (Math.pow(2, k) - 2 < h && k < 32) k++;
        return k;
    }

    function guardarSubneteoStorage() {
        try {
            localStorage.setItem('ipcalc_subneteo', JSON.stringify({
                red: subRedBase.value, cidr: subCidrBase.value, metodo: subMetodo.value, filas: subFilas
            }));
        } catch (e) { }
    }

    function cargarSubneteoStorage() {
        try {
            const d = JSON.parse(localStorage.getItem('ipcalc_subneteo'));
            if (d && typeof d === "object") {
                if (typeof d.red === "string") subRedBase.value = d.red;
                if (typeof d.cidr === "string") subCidrBase.value = d.cidr;
                if (d.metodo === "vlsm" || d.metodo === "flsm") subMetodo.value = d.metodo;
                if (Array.isArray(d.filas)) {
                    subFilas = d.filas.filter(f => f && typeof f === "object").map(f => ({
                        sitio: String(f.sitio ?? ""), vlanId: String(f.vlanId ?? ""), nombre: String(f.nombre ?? ""), hosts: String(f.hosts ?? "")
                    }));
                }
            }
        } catch (e) { }
        actualizarAyudaMetodo();
        renderizarFilasSubneteo();
    }

    function actualizarAyudaMetodo() {
        subAyudaMetodo.textContent = subMetodo.value === "vlsm"
            ? "VLSM: cada subred recibe el bloque más chico que alcance para sus hosts. Se asignan de mayor a menor; si empatan, se agrupan por Red / Sitio en el orden en que las capturaste."
            : "FLSM: la red se parte en subredes iguales (2^n ≥ número de filas), agrupadas por Red / Sitio. Los hosts son opcionales y solo se usan para verificar que quepan.";
    }

    function invalidarResultadoSubneteo() {
        subResultado = null;
        resultadoSubneteo.innerHTML = "";
    }

    function renderizarFilasSubneteo() {
        if (subFilas.length === 0) {
            subFilasBody.innerHTML = `<tr><td colspan="6" class="text-muted fst-italic py-3">Agrega subredes con el formulario de arriba. Puedes repetir el mismo VLAN ID en distintas redes.</td></tr>`;
        } else {
            subFilasBody.innerHTML = subFilas.map((f, i) => `
                <tr>
                    <td class="text-muted">${i + 1}</td>
                    <td><input type="text" class="form-control form-control-sm font-monospace sub-campo" data-index="${i}" data-campo="sitio" value="${esc(f.sitio)}" placeholder="—"></td>
                    <td><input type="number" class="form-control form-control-sm font-monospace sub-campo" data-index="${i}" data-campo="vlanId" value="${esc(f.vlanId)}" min="1" max="4094" placeholder="—"></td>
                    <td><input type="text" class="form-control form-control-sm sub-campo" data-index="${i}" data-campo="nombre" value="${esc(f.nombre)}"></td>
                    <td><input type="number" class="form-control form-control-sm font-monospace sub-campo" data-index="${i}" data-campo="hosts" value="${esc(f.hosts)}" min="0" placeholder="${subMetodo.value === 'flsm' ? 'Opcional' : ''}"></td>
                    <td><button class="btn btn-sm btn-outline-danger fw-bold btn-sub-quitar" type="button" data-index="${i}">X</button></td>
                </tr>`).join('');
        }
        guardarSubneteoStorage();
    }

    function agregarFilasSubneteo() {
        const vidTxt = subVlanId.value.trim();
        const vid = parseInt(vidTxt, 10);
        const sitios = subSitio.value.split(',').map(s => s.trim()).filter(s => s !== "");
        const nombre = subNombre.value.trim();
        const hostsTxt = subHosts.value.trim();
        const cantTxt = subCantidad.value.trim() || "1";
        const cant = parseInt(cantTxt, 10);

        if (vidTxt !== "" && (!/^\d+$/.test(vidTxt) || vid < 1 || vid > 4094)) { alert("El VLAN ID debe estar entre 1 y 4094 (o vacío para una red sin VLAN)."); return; }
        if (nombre === "" && sitios.length === 0) { alert("Escribe al menos la Red / Sitio o un nombre."); return; }
        if (hostsTxt !== "" && !/^\d+$/.test(hostsTxt)) { alert("Los hosts deben ser un número entero (0 o más)."); return; }
        if (subMetodo.value === "vlsm" && (hostsTxt === "" || parseInt(hostsTxt, 10) < 1)) { alert("En VLSM indica cuántos hosts necesita cada subred."); return; }
        if (!/^\d+$/.test(cantTxt) || cant < 1 || cant > 256) { alert("La cantidad debe estar entre 1 y 256."); return; }

        (sitios.length > 0 ? sitios : [""]).forEach(sitio => {
            for (let i = 0; i < cant; i++) subFilas.push({ sitio, vlanId: vidTxt, nombre, hosts: hostsTxt });
        });

        // Se conservan Red / Sitio y VLAN ID para seguir agregando rápido (ej. la VLAN 20 en las mismas redes)
        subNombre.value = "";
        subHosts.value = "";
        subCantidad.value = "1";
        subNombre.focus();
        invalidarResultadoSubneteo();
        renderizarFilasSubneteo();
    }

    // Agrega enlaces punto a punto entre routers: sin VLAN, 2 hosts (→ /30)
    function agregarSerialesSubneteo() {
        const txt = subSerialesCant.value.trim();
        const cant = parseInt(txt, 10);
        if (!/^\d+$/.test(txt) || cant < 1 || cant > 64) { alert("La cantidad de enlaces seriales debe estar entre 1 y 64."); return; }
        let siguiente = 1;
        const usados = new Set(subFilas.map(f => f.sitio.trim().toUpperCase()));
        for (let i = 0; i < cant; i++) {
            while (usados.has(`S${siguiente}`)) siguiente++;
            usados.add(`S${siguiente}`);
            subFilas.push({ sitio: `S${siguiente}`, vlanId: "", nombre: "Enlace serial", hosts: "2" });
        }
        invalidarResultadoSubneteo();
        renderizarFilasSubneteo();
    }

    function calcularSubneteo() {
        const ip = subRedBase.value.trim();
        const cidrTxt = subCidrBase.value.trim();
        const metodo = subMetodo.value;

        if (!esIPv4Valida(ip) || !/^\d{1,2}$/.test(cidrTxt) || parseInt(cidrTxt, 10) > 32) {
            mostrarMensaje(resultadoSubneteo, "Ingresa una red base IPv4 válida y un prefijo CIDR de 0 a 32.", "danger");
            return;
        }
        const cidr = parseInt(cidrTxt, 10);
        if (subFilas.length === 0) {
            mostrarMensaje(resultadoSubneteo, "Agrega al menos una subred a la lista.", "warning");
            return;
        }

        const baseInt = ipToInt(ip.split('.').map(Number));
        const netInt = (baseInt & ipToInt(calcularMascara(cidr))) >>> 0;
        if (netInt !== baseInt) {
            mostrarMensaje(resultadoSubneteo, `La dirección <strong>${esc(ip)}/${cidr}</strong> tiene bits de host activos. La red base correcta es <strong>${intToIp(netInt).join('.')}/${cidr}</strong>.`, "danger");
            return;
        }
        const totalBase = Math.pow(2, 32 - cidr);
        const finBase = netInt + totalBase; // exclusivo

        const filas = [];
        const ordenSitio = new Map(); // orden de primera aparición de cada Red / Sitio
        for (let i = 0; i < subFilas.length; i++) {
            const f = subFilas[i];
            const vTxt = String(f.vlanId).trim();
            const vid = vTxt === "" ? null : parseInt(vTxt, 10);
            const sitio = String(f.sitio ?? "").trim();
            const nombre = String(f.nombre).trim();
            const hTxt = String(f.hosts).trim();
            if (vid !== null && (!/^\d+$/.test(vTxt) || vid < 1 || vid > 4094)) { mostrarMensaje(resultadoSubneteo, `Fila ${i + 1}: el VLAN ID debe estar entre 1 y 4094 (o vacío).`, "danger"); return; }
            if (nombre === "" && sitio === "") { mostrarMensaje(resultadoSubneteo, `Fila ${i + 1}: escribe la Red / Sitio o un nombre.`, "danger"); return; }
            if (hTxt !== "" && !/^\d+$/.test(hTxt)) { mostrarMensaje(resultadoSubneteo, `Fila ${i + 1}: los hosts deben ser un número entero.`, "danger"); return; }
            const h = hTxt === "" ? 0 : parseInt(hTxt, 10);
            if (metodo === "vlsm" && h < 1) { mostrarMensaje(resultadoSubneteo, `Fila ${i + 1}: en VLSM debes indicar los hosts requeridos.`, "danger"); return; }
            const clave = sitio.toLowerCase();
            if (!ordenSitio.has(clave)) ordenSitio.set(clave, ordenSitio.size);
            filas.push({ orden: i, grupo: ordenSitio.get(clave), sitio, vlanId: vid, nombre: nombre || sitio, hosts: h, bits: bitsParaHosts(h) });
        }

        const asignadas = [];
        const baseTxt = `${intToIp(netInt).join('.')}/${cidr}`;

        if (metodo === "vlsm") {
            // Mayor a menor; en empate se mantienen juntas las subredes de la misma Red / Sitio
            const ordenadas = [...filas].sort((a, b) => b.hosts - a.hosts || a.grupo - b.grupo || a.orden - b.orden);
            let cursor = netInt;
            for (const f of ordenadas) {
                const tam = Math.pow(2, f.bits);
                const prefijo = 32 - f.bits;
                if (prefijo < cidr || cursor + tam > finBase) {
                    mostrarMensaje(resultadoSubneteo, `No hay espacio en <strong>${baseTxt}</strong> para "<strong>${esc(f.nombre)}</strong>" (${f.sitio ? esc(f.sitio) + ', ' : ''}${f.vlanId !== null ? `VLAN ${f.vlanId}, ` : ''}${f.hosts} hosts → /${prefijo}). Usa una red base más grande o reduce los hosts.`, "danger");
                    return;
                }
                asignadas.push({ ...f, redInt: cursor, prefijo, tam });
                cursor += tam;
            }
        } else {
            const bitsSub = Math.ceil(Math.log2(filas.length));
            const prefijo = cidr + bitsSub;
            const maxBits = Math.max(...filas.map(f => f.bits));
            if (prefijo > 30 || 32 - prefijo < maxBits) {
                const hostsPorSub = prefijo <= 30 ? Math.pow(2, 32 - prefijo) - 2 : 0;
                const mayor = Math.max(...filas.map(f => f.hosts));
                mostrarMensaje(resultadoSubneteo, `Con FLSM, partir <strong>${baseTxt}</strong> en ${filas.length} subredes da <strong>/${prefijo}</strong> (${hostsPorSub} hosts c/u)${mayor > 0 ? `, pero la subred más grande necesita ${mayor} hosts` : ''}. Usa una red base más grande o VLSM.`, "danger");
                return;
            }
            const tam = Math.pow(2, 32 - prefijo);
            [...filas].sort((a, b) => a.grupo - b.grupo || a.orden - b.orden)
                .forEach((f, i) => asignadas.push({ ...f, redInt: netInt + i * tam, prefijo, tam }));
        }

        const usadas = asignadas.reduce((acc, a) => acc + a.tam, 0);
        subResultado = {
            base: baseTxt,
            metodo,
            total: totalBase,
            usadas,
            siguienteLibre: usadas < totalBase ? intToIp(netInt + usadas).join('.') : null,
            guardado: false,
            subredes: asignadas.map(a => ({ ...crearDatosRed(a.redInt, a.prefijo, a.vlanId, a.sitio), cliente: a.nombre, hostsReq: a.hosts }))
        };
        renderizarResultadoSubneteo();
    }

    function renderizarResultadoSubneteo() {
        const r = subResultado;
        if (!r) { resultadoSubneteo.innerHTML = ""; return; }
        const pct = Math.round((r.usadas / r.total) * 1000) / 10;

        const filasHtml = r.subredes.map(s => {
            const uso = s.hostsCrudo > 0 && s.hostsReq > 0 ? Math.round((s.hostsReq / s.hostsCrudo) * 100) : null;
            return `
                <tr>
                    <td class="fw-bold">${s.sitio ? esc(s.sitio) : '<span class="text-muted">—</span>'}</td>
                    <td class="fw-bold text-danger">${s.vlanId === null ? '<span class="text-muted">—</span>' : esc(s.vlanId)}</td>
                    <td class="fw-bold text-primary">${esc(s.cliente)}</td>
                    <td>${s.hostsReq > 0 ? esc(s.hostsReq) : '—'}</td>
                    <td><span class="badge bg-secondary copy-click" data-copy="${esc(s.direccion.split('/')[0])}" title="Clic para copiar">${esc(s.direccion)}</span></td>
                    <td><span class="copy-click" title="Clic para copiar">${esc(s.mascara)}</span></td>
                    <td><span class="copy-click" title="Clic para copiar">${esc(s.hostMin)}</span></td>
                    <td><span class="copy-click fw-bold text-success" title="Clic para copiar">${esc(s.hostMax)}</span></td>
                    <td><span class="copy-click" title="Clic para copiar">${esc(s.broadcast)}</span></td>
                    <td>${esc(s.hosts)}${uso !== null ? ` <small class="text-muted">(${uso}%)</small>` : ''}</td>
                </tr>`;
        }).join('');

        resultadoSubneteo.innerHTML = `
            <div class="alert alert-success py-2 small mb-2">
                <strong>${r.metodo.toUpperCase()}</strong> sobre <strong>${esc(r.base)}</strong>: ${r.subredes.length} subred(es),
                ${r.usadas.toLocaleString()} de ${r.total.toLocaleString()} direcciones usadas (${pct}%).
                ${r.siguienteLibre ? `Siguiente red libre: <strong class="copy-click" title="Clic para copiar">${esc(r.siguienteLibre)}</strong>` : 'Sin espacio libre.'}
            </div>
            <div class="table-responsive border rounded">
                <table class="table table-sm table-hover align-middle mb-0 text-center" style="font-size: 0.85rem;">
                    <thead class="table-light">
                        <tr>
                            <th>Red / Sitio</th><th>VLAN</th><th>Nombre</th><th>Hosts req.</th><th>Red</th><th>Máscara</th>
                            <th>Primer Host</th><th>Último Host / GW</th><th>Broadcast</th><th>Hosts disp.</th>
                        </tr>
                    </thead>
                    <tbody>${filasHtml}</tbody>
                </table>
            </div>
            <div class="d-flex flex-wrap gap-2 mt-3">
                <button class="btn btn-warning fw-bold flex-grow-1 btn-sub-guardar" type="button" ${r.guardado ? 'disabled' : ''}>${r.guardado ? `✅ Guardadas en la lista (${r.subredes.length})` : '💾 Guardar todas a la lista de Nodos / Clientes'}</button>
                <button class="btn btn-outline-secondary fw-bold btn-sub-copiar-tabla" type="button">📋 Copiar tabla</button>
            </div>`;
    }

    function guardarSubneteoEnNodos() {
        if (!guardEdit()) return;
        const r = subResultado;
        if (!r || r.guardado) return;

        const traslapes = [];
        r.subredes.forEach(s => {
            const choque = listaNodos.find(n => redesSeTraslapan(n.direccion, s.direccion));
            if (choque) traslapes.push(`${s.direccion} ↔ ${choque.cliente} (${choque.direccion})`);
        });
        if (traslapes.length > 0 && !confirm(`Estas subredes se traslapan con nodos ya guardados:\n\n${traslapes.slice(0, 10).join('\n')}${traslapes.length > 10 ? '\n…' : ''}\n\n¿Guardarlas de todos modos?`)) {
            return;
        }

        r.subredes.forEach(s => {
            const { hostsReq, ...datos } = s;
            listaNodos.push(normalizarNodo(JSON.parse(JSON.stringify(datos))));
        });
        historialBorrados.length = 0;
        const vidsGuardados = r.subredes.map(s => s.vlanId).filter(v => v !== null);
        if (vidsGuardados.length > 0) vlanIdCounter = Math.min(Math.max(...vidsGuardados) + 10, 4094);
        r.guardado = true;
        renderizarResultadoSubneteo();
        renderizarTabla();
        seccionTabla.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function copiarTablaSubneteo(btn) {
        const r = subResultado; if (!r) return;
        const cab = ["Red / Sitio", "VLAN", "Nombre", "Hosts req.", "Red", "Máscara", "Primer Host", "Último Host / GW", "Broadcast", "Hosts disp."];
        const filas = r.subredes.map(s => [s.sitio, s.vlanId ?? "", s.cliente, s.hostsReq || "", s.direccion, s.mascara, s.hostMin, s.hostMax, s.broadcast, s.hostsCrudo]);
        const texto = [cab, ...filas].map(f => f.join('\t')).join('\n');
        copiarAlPortapapeles(texto, btn, "📋 Copiar tabla", "btn-outline-secondary", "btn-success");
    }

    // Copia el contenido de una celda .copy-click, la marca en verde y muestra un aviso
    function flashCopia(span) {
        const texto = span.getAttribute("data-copy") || span.textContent.trim();
        copiarAlPortapapeles(texto, null, "", "", "", () => {
            clearTimeout(span._timerCopiado);
            span.classList.remove("copiado");
            void span.offsetWidth; // reinicia la animación si se da clic varias veces
            span.classList.add("copiado");
            span._timerCopiado = setTimeout(() => span.classList.remove("copiado"), 1500);
            mostrarAvisoCopia(texto);
        });
    }

    let timerAvisoCopia = null;
    function mostrarAvisoCopia(texto) {
        let aviso = document.getElementById("avisoCopia");
        if (!aviso) {
            aviso = document.createElement("div");
            aviso.id = "avisoCopia";
            document.body.appendChild(aviso);
        }
        aviso.textContent = `📋 Copiado: ${texto}`;
        aviso.classList.add("visible");
        clearTimeout(timerAvisoCopia);
        timerAvisoCopia = setTimeout(() => aviso.classList.remove("visible"), 1500);
    }

    // Eventos del subneteo
    btnSubAgregarFila.addEventListener("click", agregarFilasSubneteo);
    btnSubAgregarSeriales.addEventListener("click", agregarSerialesSubneteo);
    subSerialesCant.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter") { ev.preventDefault(); agregarSerialesSubneteo(); }
    });
    [subSitio, subVlanId, subNombre, subHosts, subCantidad].forEach(inp => {
        inp.addEventListener("keydown", (ev) => {
            if (ev.key === "Enter") { ev.preventDefault(); agregarFilasSubneteo(); }
        });
    });
    [subRedBase, subCidrBase].forEach(inp => {
        inp.addEventListener("input", () => { invalidarResultadoSubneteo(); guardarSubneteoStorage(); });
        inp.addEventListener("keydown", (ev) => {
            if (ev.key === "Enter") { ev.preventDefault(); calcularSubneteo(); }
        });
    });
    subMetodo.addEventListener("change", () => {
        actualizarAyudaMetodo();
        invalidarResultadoSubneteo();
        renderizarFilasSubneteo();
    });
    subFilasBody.addEventListener("input", (ev) => {
        const t = ev.target;
        if (!t.classList.contains("sub-campo")) return;
        const i = parseInt(t.getAttribute("data-index"), 10);
        const campo = t.getAttribute("data-campo");
        if (subFilas[i] && ["sitio", "vlanId", "nombre", "hosts"].includes(campo)) {
            subFilas[i][campo] = t.value;
            invalidarResultadoSubneteo();
            guardarSubneteoStorage();
        }
    });
    subFilasBody.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" && ev.target.classList.contains("sub-campo")) { ev.preventDefault(); calcularSubneteo(); }
    });
    subFilasBody.addEventListener("click", (ev) => {
        const btn = ev.target.closest(".btn-sub-quitar");
        if (!btn) return;
        subFilas.splice(parseInt(btn.getAttribute("data-index"), 10), 1);
        invalidarResultadoSubneteo();
        renderizarFilasSubneteo();
    });
    btnSubCalcular.addEventListener("click", calcularSubneteo);
    btnSubLimpiarFilas.addEventListener("click", () => {
        if (subFilas.length === 0 || !confirm("¿Borrar todas las filas del subneteo?")) return;
        subFilas = [];
        invalidarResultadoSubneteo();
        renderizarFilasSubneteo();
    });
    resultadoSubneteo.addEventListener("click", (ev) => {
        const span = ev.target.closest(".copy-click");
        if (span) { flashCopia(span); return; }
        if (ev.target.closest(".btn-sub-guardar")) { guardarSubneteoEnNodos(); return; }
        const btnCopiar = ev.target.closest(".btn-sub-copiar-tabla");
        if (btnCopiar) copiarTablaSubneteo(btnCopiar);
    });

    // =====================================================================
    // --- SWITCH COMPLETO (todas las VLANs de la tabla) ---
    // =====================================================================
    function estadoSwitchGlobalVacio() {
        return {
            hostname: "", multicapa: false, portfast: true, vlans: {},
            trunk: "", nativa: "", allowed: true,
            mgmtVlan: "", mgmtIp: "", mgmtMask: "", mgmtGw: "",
            enable: "", consola: "", vty: "", encrypt: false, banner: "",
            script: null
        };
    }

    // Normaliza una configuración de switch leída de localStorage
    function normalizarCfgSwitch(d) {
        const base = estadoSwitchGlobalVacio();
        if (!d || typeof d !== "object") return base;
        Object.keys(base).forEach(k => {
            if (k === "vlans") return;
            if (typeof base[k] === "boolean" && typeof d[k] === "boolean") base[k] = d[k];
            else if (typeof base[k] === "string" && d[k] != null && typeof d[k] !== "object") base[k] = String(d[k]);
            else if (k === "script" && typeof d[k] === "string") base[k] = d[k];
        });
        if (d.vlans && typeof d.vlans === "object") {
            Object.entries(d.vlans).forEach(([id, c]) => {
                if (c && typeof c === "object") {
                    base.vlans[id] = { incluir: c.incluir !== false, nombre: String(c.nombre ?? ""), puertos: String(c.puertos ?? "") };
                }
            });
        }
        return base;
    }

    function guardarSwitchGlobalStorage() {
        try { localStorage.setItem('ipcalc_switch_global', JSON.stringify(swgTodos)); } catch (e) { }
    }

    function cargarSwitchGlobalStorage() {
        swgTodos = { seleccionado: null, oculto: false, sitios: {} };
        try {
            const d = JSON.parse(localStorage.getItem('ipcalc_switch_global'));
            if (d && typeof d === "object") {
                if (d.sitios && typeof d.sitios === "object") {
                    Object.entries(d.sitios).forEach(([s, cfg]) => { swgTodos.sitios[s] = normalizarCfgSwitch(cfg); });
                    swgTodos.seleccionado = typeof d.seleccionado === "string" ? d.seleccionado : null;
                    swgTodos.oculto = d.oculto === true;
                } else {
                    // Formato anterior (un solo switch): pasa a la red "sin sitio"
                    swgTodos.sitios[""] = normalizarCfgSwitch(d);
                    swgTodos.oculto = d.oculto === true;
                }
            }
        } catch (e) { }
        cuerpoSwitchGlobal.style.display = swgTodos.oculto ? "none" : "block";
        btnToggleSwitchGlobal.textContent = swgTodos.oculto ? "Mostrar" : "Ocultar";
    }

    // Cambia la configuración activa al switch de la red indicada y refresca el formulario
    function activarSitioSwitch(sitio) {
        if (!swgTodos.sitios[sitio]) swgTodos.sitios[sitio] = estadoSwitchGlobalVacio();
        swgTodos.seleccionado = sitio;
        swg = swgTodos.sitios[sitio];
        cuerpoSwitchGlobal.querySelectorAll("[data-swg]").forEach(el => {
            const k = el.getAttribute("data-swg");
            if (el.type === "checkbox") el.checked = !!swg[k];
            else el.value = swg[k] ?? "";
        });
        terminalSwitchGlobal.textContent = swg.script || TEXTO_SWITCH_GLOBAL_VACIO;
    }

    function cfgVlan(id) {
        const k = String(id);
        if (!swg.vlans[k]) swg.vlans[k] = { incluir: true, nombre: "", puertos: "" };
        return swg.vlans[k];
    }

    function esVlanReservada(id) {
        return id === 1 || (id >= 1002 && id <= 1005);
    }

    function etiquetaSitio(sitio) {
        return sitio === "" ? "(Sin red asignada)" : sitio;
    }

    // Redes / sitios que tienen al menos una VLAN (son las que llevan switch)
    function sitiosConVlan() {
        const vistos = [];
        listaNodos.forEach(n => {
            if (n.vlanId !== null && !vistos.includes(n.sitio)) vistos.push(n.sitio);
        });
        return vistos;
    }

    // Agrupa por VLAN ID los nodos del switch activo: varias subredes con el mismo ID = una VLAN
    function agruparVlansDeNodos() {
        const sitio = swgTodos.seleccionado ?? "";
        const mapa = new Map();
        listaNodos.forEach(n => {
            if (n.vlanId === null || n.sitio !== sitio) return;
            const id = Number(n.vlanId);
            if (!mapa.has(id)) mapa.set(id, { id, nombreDefault: nombreVlanCisco(n.cliente, id), redes: [] });
            mapa.get(id).redes.push(n.direccion);
        });
        return [...mapa.values()].sort((a, b) => a.id - b.id);
    }

    function nombreVlanSwitch(grupo) {
        const c = cfgVlan(grupo.id);
        return c.nombre.trim() !== "" ? nombreVlanCisco(c.nombre, grupo.id) : grupo.nombreDefault;
    }

    function renderizarSwitchGlobal() {
        const sitios = sitiosConVlan();
        if (sitios.length === 0) {
            seccionSwitchGlobal.style.display = "none";
            return;
        }
        seccionSwitchGlobal.style.display = "flex";

        const sel = sitios.includes(swgTodos.seleccionado) ? swgTodos.seleccionado : sitios[0];
        swgSitio.innerHTML = sitios.map(s => `<option value="${esc(s)}" ${s === sel ? 'selected' : ''}>${esc(etiquetaSitio(s))}</option>`).join('');
        if (swg !== swgTodos.sitios[sel] || swgTodos.seleccionado !== sel) activarSitioSwitch(sel);

        const grupos = agruparVlansDeNodos();
        swgVlansBody.innerHTML = grupos.map(g => {
            const c = cfgVlan(g.id);
            const reservada = esVlanReservada(g.id);
            return `
                <tr>
                    <td><input class="form-check-input swg-vlan-campo" type="checkbox" data-vid="${g.id}" data-campo="incluir" ${c.incluir ? 'checked' : ''}></td>
                    <td class="fw-bold text-danger">${g.id}${g.redes.length > 1 ? ` <span class="badge bg-warning text-dark" title="Subredes de esta VLAN en esta red">×${g.redes.length}</span>` : ''}</td>
                    <td><input type="text" class="form-control form-control-sm font-monospace swg-vlan-campo" data-vid="${g.id}" data-campo="nombre" value="${esc(c.nombre)}" placeholder="${esc(g.nombreDefault)}" ${reservada ? 'disabled title="VLAN reservada de Cisco: no se puede renombrar"' : ''}></td>
                    <td class="small font-monospace text-muted text-start">${g.redes.map(d => `<span class="copy-click" data-copy="${esc(String(d).split('/')[0])}" title="Clic para copiar la red">${esc(d)}</span>`).join('<br>')}</td>
                    <td><input type="text" class="form-control form-control-sm font-monospace swg-vlan-campo" data-vid="${g.id}" data-campo="puertos" value="${esc(c.puertos)}" placeholder="Ej. fa0/1-12" autocomplete="off"></td>
                </tr>`;
        }).join('');
    }

    // "fa0/1-5, fa0/10" -> ["fa0/1-5", "fa0/10"] (validado)
    function parsearListaPuertosSwitch(texto, etiqueta) {
        const items = String(texto || "").split(',').map(s => canonIntf(s)).filter(s => s !== "");
        const regex = /^(?:fa|g)\d+\/\d+(?:\/\d+)?(?:-\d+)?$/;
        for (const p of items) {
            const r = parsearRangoPuerto(p);
            if (!regex.test(p) || !r || r.ini > r.fin) {
                throw new Error(`${etiqueta}: el puerto "${p}" no es válido. Ejemplos: fa0/1, fa0/1-10, g0/1.`);
            }
            if (r.ini === 0) {
                throw new Error(`${etiqueta}: "${p}" usa el puerto 0, que no existe en switches Cisco (inician en 1, ej. fa0/1).`);
            }
        }
        return items;
    }

    function lineaInterfazSwitch(p) {
        const nombre = formatearInterfazCisco(p, false);
        return p.includes("-") ? `interface range ${nombre}\n` : `interface ${nombre}\n`;
    }

    function generarSwitchGlobalHandler() {
        if (!guardEdit()) return;
        let cli = "";
        try {
            const grupos = agruparVlansDeNodos();
            const incluidas = grupos.filter(g => cfgVlan(g.id).incluir);

            const hostname = swg.hostname.trim();
            if (hostname !== "" && !/^[A-Za-z][A-Za-z0-9-]{0,62}$/.test(hostname)) {
                throw new Error("El hostname debe iniciar con letra y solo llevar letras, números o guiones (sin espacios).");
            }

            const leerVlan = (txt, etiqueta) => {
                const t = String(txt).trim();
                if (t === "") return null;
                const n = parseInt(t, 10);
                if (!/^\d+$/.test(t) || n < 1 || n > 4094) throw new Error(`La ${etiqueta} debe estar entre 1 y 4094.`);
                return n;
            };
            const nativa = leerVlan(swg.nativa, "VLAN nativa");
            const mgmt = leerVlan(swg.mgmtVlan, "VLAN de gestión");

            let mgmtIp = "", mgmtMask = "", mgmtGw = "";
            if (mgmt !== null) {
                mgmtIp = swg.mgmtIp.trim(); mgmtMask = swg.mgmtMask.trim(); mgmtGw = swg.mgmtGw.trim();
                if (!esIPv4Valida(mgmtIp)) throw new Error("Gestión: la IP del switch no es válida.");
                if (!esMascaraValida(mgmtMask)) throw new Error("Gestión: la máscara no es válida.");
                const ipI = ipToInt(mgmtIp.split('.').map(Number));
                const mI = ipToInt(mgmtMask.split('.').map(Number));
                const redI = (ipI & mI) >>> 0, bcI = (redI | (~mI >>> 0)) >>> 0;
                if (contarBitsMascara(mgmtMask.split('.').map(Number)) < 31 && (ipI === redI || ipI === bcI)) {
                    throw new Error("Gestión: la IP del switch no puede ser la dirección de red ni la de broadcast.");
                }
                if (mgmtGw !== "") {
                    if (!esIPv4Valida(mgmtGw)) throw new Error("Gestión: el default gateway no es válido.");
                    if (((ipToInt(mgmtGw.split('.').map(Number)) & mI) >>> 0) !== redI) throw new Error("Gestión: el default gateway no está en la misma subred que la IP del switch.");
                    if (mgmtGw === mgmtIp) throw new Error("Gestión: el default gateway no puede ser la misma IP del switch.");
                }
            } else if (swg.mgmtIp.trim() !== "") {
                throw new Error("Gestión: escribiste una IP pero falta la VLAN de gestión.");
            }

            const pass = { enable: swg.enable.trim(), consola: swg.consola.trim(), vty: swg.vty.trim() };
            if (Object.values(pass).some(p => /\s/.test(p))) throw new Error("Las contraseñas no deben llevar espacios.");
            const banner = swg.banner.trim();
            if (banner.includes("#")) throw new Error("El banner no puede contener el carácter # (se usa como delimitador).");

            if (incluidas.length === 0 && nativa === null && mgmt === null) {
                throw new Error("Marca al menos una VLAN en la columna \"Incluir\".");
            }

            // Puertos y detección de traslapes entre VLANs / troncales
            const asignados = [];
            const registrar = (p, dueno) => {
                const r = parsearRangoPuerto(p);
                const c = asignados.find(a => a.r.base === r.base && a.r.ini <= r.fin && r.ini <= a.r.fin);
                if (c) throw new Error(`El puerto ${p.toUpperCase()} (${dueno}) se traslapa con ${c.p.toUpperCase()} (${c.dueno}).`);
                asignados.push({ p, r, dueno });
            };
            const accesos = incluidas.map(g => {
                const puertos = parsearListaPuertosSwitch(cfgVlan(g.id).puertos, `VLAN ${g.id}`);
                puertos.forEach(p => registrar(p, `acceso VLAN ${g.id}`));
                return { g, puertos };
            });
            const troncales = parsearListaPuertosSwitch(swg.trunk, "Troncal");
            troncales.forEach(p => registrar(p, "troncal"));

            const nombrePorId = (id, porDefecto) => {
                const g = grupos.find(x => x.id === id);
                return g ? nombreVlanSwitch(g) : porDefecto;
            };

            cli = "enable\nconfigure terminal\n";
            if (hostname !== "") cli += `hostname ${hostname}\n`;
            cli += "no ip domain-lookup\n";
            if (pass.enable) cli += `enable secret ${pass.enable}\n`;
            if (pass.consola) cli += `line console 0\npassword ${pass.consola}\nlogin\nexit\n`;
            if (pass.vty) cli += `line vty 0 15\npassword ${pass.vty}\nlogin\nexit\n`;
            if (swg.encrypt) cli += "service password-encryption\n";
            if (banner) cli += `banner motd #${banner}#\n`;

            // VLANs (una sola vez por ID, aunque haya varias subredes)
            const creadas = new Set();
            const crearVlan = (id, nombre) => {
                if (creadas.has(id)) return;
                creadas.add(id);
                if (esVlanReservada(id)) return;
                cli += `vlan ${id}\nname ${nombre}\nexit\n`;
            };
            incluidas.forEach(g => crearVlan(g.id, nombreVlanSwitch(g)));
            if (nativa !== null) crearVlan(nativa, nombrePorId(nativa, "NATIVA"));
            if (mgmt !== null) crearVlan(mgmt, nombrePorId(mgmt, "GESTION"));

            // Puertos de acceso
            accesos.forEach(({ g, puertos }) => {
                puertos.forEach(p => {
                    cli += lineaInterfazSwitch(p);
                    cli += `switchport mode access\nswitchport access vlan ${g.id}\n`;
                    if (swg.portfast) cli += "spanning-tree portfast\n";
                    cli += "no shutdown\nexit\n";
                });
            });

            // Troncales
            const permitidas = [...new Set([...incluidas.map(g => g.id), ...(nativa !== null ? [nativa] : []), ...(mgmt !== null ? [mgmt] : [])])].sort((a, b) => a - b);
            troncales.forEach(p => {
                cli += lineaInterfazSwitch(p);
                if (swg.multicapa) cli += "switchport trunk encapsulation dot1q\n";
                cli += "switchport mode trunk\n";
                if (nativa !== null) cli += `switchport trunk native vlan ${nativa}\n`;
                if (swg.allowed && permitidas.length > 0) cli += `switchport trunk allowed vlan ${permitidas.join(',')}\n`;
                cli += "no shutdown\nexit\n";
            });

            // SVI de gestión
            if (mgmt !== null) {
                cli += `interface vlan ${mgmt}\nip address ${mgmtIp} ${mgmtMask}\nno shutdown\nexit\n`;
                if (mgmtGw !== "") cli += `ip default-gateway ${mgmtGw}\n`;
            }

            cli += "exit\nwrite memory\n";
        } catch (err) {
            alert(err.message);
            return;
        }

        terminalSwitchGlobal.textContent = cli;
        swg.script = cli;
        guardarSwitchGlobalStorage();
    }

    // Eventos del switch completo
    cuerpoSwitchGlobal.addEventListener("input", manejarCambioSwitchGlobal);
    cuerpoSwitchGlobal.addEventListener("change", manejarCambioSwitchGlobal);

    function manejarCambioSwitchGlobal(ev) {
        const t = ev.target;
        const clave = t.getAttribute("data-swg");
        if (clave) {
            swg[clave] = t.type === "checkbox" ? t.checked : t.value;
            // Al elegir VLAN de gestión, sugerir máscara y gateway de esa VLAN
            if (clave === "mgmtVlan" && ev.type === "change") {
                const nodo = listaNodos.find(n => n.vlanId !== null && String(n.vlanId) === t.value.trim() && n.sitio === (swgTodos.seleccionado ?? ""));
                if (nodo) {
                    if (!swg.mgmtMask.trim()) { swg.mgmtMask = nodo.mascara; document.getElementById("swgMgmtMask").value = nodo.mascara; }
                    if (!swg.mgmtGw.trim()) { swg.mgmtGw = nodo.hostMax; document.getElementById("swgMgmtGw").value = nodo.hostMax; }
                }
            }
        } else if (t.classList.contains("swg-vlan-campo")) {
            const c = cfgVlan(t.getAttribute("data-vid"));
            const campo = t.getAttribute("data-campo");
            if (campo === "incluir") c.incluir = t.checked;
            else if (campo === "nombre" || campo === "puertos") c[campo] = t.value;
        } else {
            return;
        }
        guardarSwitchGlobalStorage();
    }

    cuerpoSwitchGlobal.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" && ev.target.tagName === "INPUT" && ev.target.type !== "checkbox") {
            ev.preventDefault();
            generarSwitchGlobalHandler();
        }
    });
    btnGenerarSwitchGlobal.addEventListener("click", generarSwitchGlobalHandler);
    btnCopiarSwitchGlobal.addEventListener("click", () => {
        copiarAlPortapapeles(terminalSwitchGlobal.textContent, btnCopiarSwitchGlobal, "📋 Copiar Todo", "btn-outline-secondary", "btn-success");
    });
    btnToggleSwitchGlobal.addEventListener("click", () => {
        swgTodos.oculto = !swgTodos.oculto;
        cuerpoSwitchGlobal.style.display = swgTodos.oculto ? "none" : "block";
        btnToggleSwitchGlobal.textContent = swgTodos.oculto ? "Mostrar" : "Ocultar";
        guardarSwitchGlobalStorage();
    });
    swgSitio.addEventListener("change", () => {
        activarSitioSwitch(swgSitio.value);
        renderizarSwitchGlobal();
        guardarSwitchGlobalStorage();
    });

    // =====================================================================
    // --- CONFIGURACIÓN DE ROUTERS (topología + rutas estáticas) ---
    // =====================================================================
    const seccionRouters = document.getElementById("seccionRouters");
    const cuerpoRouters = document.getElementById("cuerpoRouters");
    const btnToggleRouters = document.getElementById("btnToggleRouters");
    const rtSel = document.getElementById("rtSel");
    const rtNuevoNombre = document.getElementById("rtNuevoNombre");
    const btnRtAgregar = document.getElementById("btnRtAgregar");
    const btnRtEliminar = document.getElementById("btnRtEliminar");
    const rtSinRouters = document.getElementById("rtSinRouters");
    const rtPanel = document.getElementById("rtPanel");
    const rtLansBody = document.getElementById("rtLansBody");
    const rtEnlacesBody = document.getElementById("rtEnlacesBody");
    const rtAvisos = document.getElementById("rtAvisos");
    const btnRtGenerar = document.getElementById("btnRtGenerar");
    const btnRtCopiar = document.getElementById("btnRtCopiar");
    const terminalRouters = document.getElementById("terminalRouters");

    // rtState.conexiones[clave] = [{ router, intf, dce }]  (LAN: 1 extremo, enlace: 2 extremos)
    let rtState = { routers: [], sel: null, oculto: false, conexiones: {} };

    function routerVacio(nombre) {
        return {
            id: "r" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
            nombre, hostname: nombre.replace(/[^A-Za-z0-9-]/g, "") || "",
            enrutamiento: "ospf", ospfPid: "1", ospfArea: "0", ospfPasivas: false,
            dhcp: false, dns: "", helper: "", clock: "64000", script: null
        };
    }

    function guardarRoutersStorage() {
        try { localStorage.setItem('ipcalc_routers', JSON.stringify(rtState)); } catch (e) { }
    }

    function cargarRoutersStorage() {
        try {
            const d = JSON.parse(localStorage.getItem('ipcalc_routers'));
            if (d && typeof d === "object") {
                if (Array.isArray(d.routers)) {
                    rtState.routers = d.routers.filter(r => r && typeof r.id === "string" && typeof r.nombre === "string").map(r => ({
                        id: r.id, nombre: r.nombre, hostname: String(r.hostname ?? ""),
                        enrutamiento: ["ospf", "estatico", "ninguno"].includes(r.enrutamiento) ? r.enrutamiento : (r.estatico === false ? "ninguno" : "estatico"),
                        ospfPid: String(r.ospfPid ?? "1"), ospfArea: String(r.ospfArea ?? "0"), ospfPasivas: r.ospfPasivas === true,
                        dhcp: r.dhcp === true,
                        dns: String(r.dns ?? ""), helper: String(r.helper ?? ""), clock: String(r.clock ?? "64000"),
                        script: typeof r.script === "string" ? r.script : null
                    }));
                }
                if (d.conexiones && typeof d.conexiones === "object") {
                    Object.entries(d.conexiones).forEach(([k, arr]) => {
                        if (Array.isArray(arr)) {
                            rtState.conexiones[k] = arr.filter(x => x && typeof x.router === "string").map(x => ({ router: x.router, intf: String(x.intf ?? ""), dce: x.dce === true })).slice(0, 2);
                        }
                    });
                }
                rtState.sel = typeof d.sel === "string" ? d.sel : null;
                rtState.oculto = d.oculto === true;
            }
        } catch (e) { }
        cuerpoRouters.style.display = rtState.oculto ? "none" : "block";
        btnToggleRouters.textContent = rtState.oculto ? "Mostrar" : "Ocultar";
    }

    function routerActual() {
        return rtState.routers.find(r => r.id === rtState.sel) || null;
    }

    function nombreRouter(id) {
        const r = rtState.routers.find(x => x.id === id);
        return r ? r.nombre : "?";
    }

    // Agrupa los nodos: por Red / Sitio si tiene, o cada red sola. Un enlace = red sin VLAN /30 o /31
    function elementosTopologia() {
        const mapa = new Map();
        listaNodos.forEach(n => {
            const clave = n.sitio ? `s:${n.sitio}` : `n:${n.direccion}`;
            if (!mapa.has(clave)) mapa.set(clave, { clave, etiqueta: n.sitio || n.cliente, nodos: [] });
            mapa.get(clave).nodos.push(n);
        });
        return [...mapa.values()].map(e => {
            const n0 = e.nodos[0];
            const prefijo = parseInt(String(n0.direccion).split('/')[1], 10);
            e.tipo = (e.nodos.length === 1 && n0.vlanId === null && prefijo >= 30) ? "enlace" : "lan";
            return e;
        });
    }

    function extremos(clave) {
        const ids = new Set(rtState.routers.map(r => r.id));
        return (rtState.conexiones[clave] || []).filter(x => ids.has(x.router));
    }

    function renderizarRouters() {
        if (listaNodos.length === 0) { seccionRouters.style.display = "none"; return; }
        seccionRouters.style.display = "flex";

        if (!routerActual()) rtState.sel = rtState.routers.length ? rtState.routers[0].id : null;
        rtSel.innerHTML = rtState.routers.map(r => `<option value="${esc(r.id)}" ${r.id === rtState.sel ? 'selected' : ''}>${esc(r.nombre)}</option>`).join('');
        rtSel.disabled = rtState.routers.length === 0;
        btnRtEliminar.disabled = rtState.routers.length === 0;

        const r = routerActual();
        rtSinRouters.style.display = r ? "none" : "block";
        rtPanel.style.display = r ? "block" : "none";
        if (!r) return;

        cuerpoRouters.querySelectorAll("[data-rt]").forEach(el => {
            const k = el.getAttribute("data-rt");
            if (el.type === "checkbox") el.checked = !!r[k];
            else if (document.activeElement !== el) el.value = r[k] ?? "";
        });
        terminalRouters.textContent = r.script || TEXTO_ROUTERS_VACIO;
        document.getElementById("rtOspfCampos").style.display = r.enrutamiento === "ospf" ? "block" : "none";

        const elementos = elementosTopologia();
        const lans = elementos.filter(e => e.tipo === "lan");
        const enlaces = elementos.filter(e => e.tipo === "enlace");

        rtLansBody.innerHTML = lans.length === 0
            ? `<tr><td colspan="3" class="text-muted fst-italic py-2">No hay redes LAN guardadas.</td></tr>`
            : lans.map(e => {
                const ex = extremos(e.clave);
                const mio = ex.find(x => x.router === r.id);
                const otro = ex.find(x => x.router !== r.id);
                const subredes = [...e.nodos].sort((a, b) => (a.vlanId ?? -1) - (b.vlanId ?? -1)).map(n =>
                    `<div><span class="badge ${n.vlanId === null ? 'bg-secondary' : 'bg-danger'}">${esc(etiquetaVlan(n))}</span> <span class="font-monospace copy-click" data-copy="${esc(String(n.direccion).split('/')[0])}" title="Clic para copiar la red">${esc(n.direccion)}</span> <span class="font-monospace copy-click text-muted" title="Clic para copiar la máscara">${esc(n.mascara)}</span> → GW <span class="font-monospace fw-bold text-success copy-click" title="Clic para copiar el gateway">${esc(n.hostMax)}</span></div>`).join('');
                const celda = otro
                    ? `<span class="text-muted small">Conectada a <strong>${esc(nombreRouter(otro.router))}</strong> (${esc(otro.intf.toUpperCase())})</span>`
                    : `<input type="text" class="form-control form-control-sm font-monospace border-success rt-intf" data-clave="${esc(e.clave)}" value="${esc(mio ? mio.intf : '')}" placeholder="Ej. g0/0 (vacío = no está aquí)" autocomplete="off">`;
                return `<tr><td class="fw-bold">${esc(e.etiqueta)}</td><td class="text-start small">${subredes}</td><td style="min-width: 210px;">${celda}</td></tr>`;
            }).join('');

        rtEnlacesBody.innerHTML = enlaces.length === 0
            ? `<tr><td colspan="6" class="text-muted fst-italic py-2">No hay enlaces seriales (redes /30 sin VLAN).</td></tr>`
            : enlaces.map(e => {
                const n = e.nodos[0];
                const ex = extremos(e.clave);
                const idx = ex.findIndex(x => x.router === r.id);
                const mio = idx >= 0 ? ex[idx] : null;
                const otros = ex.filter(x => x.router !== r.id);
                const lleno = !mio && ex.length >= 2;
                const ipMia = idx >= 0 ? (idx === 0 ? n.hostMin : n.hostMax) : (ex.length === 0 ? n.hostMin : n.hostMax);
                const otroTxt = otros.length
                    ? otros.map(o => `<strong>${esc(nombreRouter(o.router))}</strong> ${esc(o.intf.toUpperCase())} (<span class="font-monospace copy-click" title="Clic para copiar">${esc(ex.indexOf(o) === 0 ? n.hostMin : n.hostMax)}</span>)`).join('<br>')
                    : '<span class="text-muted">— sin asignar —</span>';
                const celdaIntf = lleno
                    ? `<span class="text-muted small">Ya tiene sus 2 extremos</span>`
                    : `<input type="text" class="form-control form-control-sm font-monospace border-success rt-intf" data-clave="${esc(e.clave)}" value="${esc(mio ? mio.intf : '')}" placeholder="Ej. s0/0/0" autocomplete="off">`;
                return `<tr>
                    <td class="fw-bold">${esc(e.etiqueta)}</td>
                    <td class="font-monospace"><span class="copy-click" data-copy="${esc(String(n.direccion).split('/')[0])}" title="Clic para copiar la red">${esc(n.direccion)}</span><br><span class="copy-click text-muted small" title="Clic para copiar la máscara">${esc(n.mascara)}</span></td>
                    <td style="min-width: 160px;">${celdaIntf}</td>
                    <td class="font-monospace fw-bold ${mio ? 'text-success' : 'text-muted'}">${lleno ? '—' : `<span class="copy-click" title="Clic para copiar">${esc(ipMia)}</span>`}</td>
                    <td>${mio ? `<input class="form-check-input rt-dce" type="checkbox" data-clave="${esc(e.clave)}" ${mio.dce ? 'checked' : ''}>` : ''}</td>
                    <td class="small">${otroTxt}</td>
                </tr>`;
            }).join('');

        const pendientes = elementos.filter(e => extremos(e.clave).length === 0).map(e => e.etiqueta);
        const enlacesIncompletos = enlaces.filter(e => extremos(e.clave).length === 1).map(e => e.etiqueta);
        const avisos = [];
        if (pendientes.length) avisos.push(`Sin router asignado: <strong>${pendientes.map(esc).join(', ')}</strong>.`);
        if (enlacesIncompletos.length) avisos.push(`Enlaces con un solo extremo (asigna el otro router): <strong>${enlacesIncompletos.map(esc).join(', ')}</strong>.`);
        rtAvisos.innerHTML = avisos.length ? `<div class="alert alert-warning py-2 small mb-0">${avisos.join('<br>')}</div>` : '';
    }

    // Calcula las rutas estáticas del router con BFS sobre los enlaces seriales completos
    function calcularRutasEstaticas(routerId, elementos) {
        const ady = new Map(rtState.routers.map(r => [r.id, []]));
        elementos.filter(e => e.tipo === "enlace").forEach(e => {
            const ex = extremos(e.clave);
            if (ex.length === 2) {
                const n = e.nodos[0];
                ady.get(ex[0].router).push({ vecino: ex[1].router, nexthop: n.hostMax });
                ady.get(ex[1].router).push({ vecino: ex[0].router, nexthop: n.hostMin });
            }
        });
        const salto = new Map([[routerId, null]]);
        const dist = new Map([[routerId, 0]]);
        const cola = [routerId];
        while (cola.length) {
            const u = cola.shift();
            for (const { vecino, nexthop } of ady.get(u) || []) {
                if (!dist.has(vecino)) {
                    dist.set(vecino, dist.get(u) + 1);
                    salto.set(vecino, u === routerId ? nexthop : salto.get(u));
                    cola.push(vecino);
                }
            }
        }
        const rutas = [], avisos = [];
        elementos.forEach(e => {
            const duenos = extremos(e.clave).map(x => x.router);
            if (duenos.length === 0 || duenos.includes(routerId)) return;
            const alcanzables = duenos.filter(id => dist.has(id)).sort((a, b) => dist.get(a) - dist.get(b));
            if (alcanzables.length === 0) {
                avisos.push(`No hay camino hacia ${e.etiqueta} (revisa que los seriales tengan sus 2 extremos).`);
                return;
            }
            const nh = salto.get(alcanzables[0]);
            e.nodos.forEach(n => {
                const [red] = String(n.direccion).split('/');
                rutas.push(`ip route ${red} ${n.mascara} ${nh}`);
            });
        });
        return { rutas, avisos };
    }

    function generarRouterHandler() {
        if (!guardEdit()) return;
        const r = routerActual(); if (!r) return;
        const elementos = elementosTopologia();
        const avisos = [];
        let cli = "";
        try {
            const hostname = r.hostname.trim();
            if (hostname !== "" && !/^[A-Za-z][A-Za-z0-9-]{0,62}$/.test(hostname)) throw new Error("El hostname debe iniciar con letra y solo llevar letras, números o guiones.");
            const clock = r.clock.trim() || "64000";
            if (!/^\d+$/.test(clock)) throw new Error("El clock rate debe ser un número (ej. 64000).");
            if (r.dns.trim() && !esIPv4Valida(r.dns.trim())) throw new Error("El DNS no es una IP válida.");
            if (r.helper.trim() && !esIPv4Valida(r.helper.trim())) throw new Error("El ip helper-address no es una IP válida.");
            const ospfPid = r.ospfPid.trim() || "1";
            const ospfArea = r.ospfArea.trim() || "0";
            if (r.enrutamiento === "ospf") {
                if (!/^\d+$/.test(ospfPid) || +ospfPid < 1 || +ospfPid > 65535) throw new Error("El ID de proceso OSPF debe estar entre 1 y 65535.");
                if (!/^\d+$/.test(ospfArea)) throw new Error("El área OSPF debe ser un número (ej. 0).");
            }

            const misLans = [], misEnlaces = [], usados = new Map();
            elementos.forEach(e => {
                const ex = extremos(e.clave);
                const idx = ex.findIndex(x => x.router === r.id);
                if (idx < 0) return;
                const intf = canonIntf(ex[idx].intf);
                const regex = e.tipo === "lan" ? /^(?:fa|g)\d+\/\d+(?:\/\d+)?$/ : /^(?:fa|g|s)\d+\/\d+(?:\/\d+)?$/;
                if (!regex.test(intf)) throw new Error(`${e.etiqueta}: el puerto "${ex[idx].intf}" no es válido (${e.tipo === "lan" ? "ej. g0/0, f0/1" : "ej. s0/0/0, s0/1/0"}).`);
                if (usados.has(intf)) throw new Error(`El puerto ${intf.toUpperCase()} está asignado a ${usados.get(intf)} y a ${e.etiqueta}.`);
                usados.set(intf, e.etiqueta);
                if (e.tipo === "lan") misLans.push({ e, intf });
                else misEnlaces.push({ e, intf, idx, dce: ex[idx].dce });
            });
            if (misLans.length === 0 && misEnlaces.length === 0) throw new Error("Este router no tiene redes ni enlaces asignados. Escribe los puertos en las tablas.");

            cli = "enable\nconfigure terminal\n";
            if (hostname) cli += `hostname ${hostname}\n`;
            cli += "no ip domain-lookup\n";
            const helper = r.helper.trim();

            // LANs: IP directa (sin VLAN) y subinterfaces dot1Q (con VLAN)
            misLans.forEach(({ e, intf }) => {
                const nombreIntf = formatearInterfazCisco(intf, false);
                const sinVlan = e.nodos.filter(n => n.vlanId === null);
                const conVlan = e.nodos.filter(n => n.vlanId !== null).sort((a, b) => a.vlanId - b.vlanId);
                cli += `interface ${nombreIntf}\n`;
                if (sinVlan.length) {
                    sinVlan.forEach((n, i) => { cli += `ip address ${n.hostMax} ${n.mascara}${i > 0 ? ' secondary' : ''}\n`; });
                    if (helper) cli += `ip helper-address ${helper}\n`;
                } else {
                    cli += "no ip address\n";
                }
                cli += "no shutdown\nexit\n";
                const vistas = new Set();
                conVlan.forEach(n => {
                    if (!vistas.has(n.vlanId)) {
                        if (vistas.size > 0) cli += "exit\n";
                        vistas.add(n.vlanId);
                        cli += `interface ${nombreIntf}.${n.vlanId}\nencapsulation dot1Q ${n.vlanId}\nip address ${n.hostMax} ${n.mascara}\n`;
                        if (helper) cli += `ip helper-address ${helper}\n`;
                    } else {
                        cli += `ip address ${n.hostMax} ${n.mascara} secondary\n`;
                    }
                });
                if (vistas.size > 0) cli += "exit\n";
            });

            // Enlaces seriales: el 1er extremo toma el primer host y el 2º el último
            misEnlaces.forEach(({ e, intf, idx, dce }) => {
                const n = e.nodos[0];
                cli += `interface ${formatearInterfazCisco(intf, false)}\nip address ${idx === 0 ? n.hostMin : n.hostMax} ${n.mascara}\n`;
                if (dce) {
                    if (intf.startsWith("s")) cli += `clock rate ${clock}\n`;
                    else avisos.push(`${e.etiqueta}: el clock rate solo aplica a puertos seriales; se omitió en ${intf.toUpperCase()}.`);
                }
                cli += "no shutdown\nexit\n";
                if (extremos(e.clave).length < 2) avisos.push(`${e.etiqueta}: falta asignar el otro router del enlace.`);
            });

            // DHCP para las LANs de este router
            if (r.dhcp) {
                const dns = r.dns.trim();
                misLans.forEach(({ e }) => {
                    e.nodos.forEach(n => {
                        const [red] = String(n.direccion).split('/');
                        const pool = nombreVlanCisco(`${e.etiqueta}_${n.cliente}${n.vlanId !== null ? '_V' + n.vlanId : ''}`, n.vlanId ?? 0);
                        cli += `ip dhcp excluded-address ${n.hostMax}\nip dhcp pool ${pool}\nnetwork ${red} ${n.mascara}\ndefault-router ${n.hostMax}\n`;
                        if (dns) cli += `dns-server ${dns}\n`;
                        cli += "exit\n";
                    });
                });
            }

            // Enrutamiento: estático (calculado) u OSPF (anuncia sus redes conectadas)
            if (r.enrutamiento === "estatico") {
                const { rutas, avisos: avRutas } = calcularRutasEstaticas(r.id, elementos);
                rutas.forEach(l => { cli += l + "\n"; });
                avisos.push(...avRutas);
            } else if (r.enrutamiento === "ospf") {
                cli += `router ospf ${ospfPid}\n`;
                const anunciadas = new Set();
                const anunciar = (n) => {
                    const [red] = String(n.direccion).split('/');
                    const wc = calcularWildcard(n.mascara.split('.').map(Number)).join('.');
                    const linea = `network ${red} ${wc} area ${ospfArea}`;
                    if (!anunciadas.has(linea)) { anunciadas.add(linea); cli += linea + "\n"; }
                };
                misLans.forEach(({ e }) => e.nodos.forEach(anunciar));
                misEnlaces.forEach(({ e }) => anunciar(e.nodos[0]));
                if (r.ospfPasivas) {
                    misLans.forEach(({ e, intf }) => {
                        const nombreIntf = formatearInterfazCisco(intf, false);
                        if (e.nodos.some(n => n.vlanId === null)) cli += `passive-interface ${nombreIntf}\n`;
                        [...new Set(e.nodos.filter(n => n.vlanId !== null).map(n => n.vlanId))].sort((a, b) => a - b)
                            .forEach(v => { cli += `passive-interface ${nombreIntf}.${v}\n`; });
                    });
                }
                cli += "exit\n";
                if (misEnlaces.some(({ e }) => extremos(e.clave).length < 2)) avisos.push("OSPF: hay enlaces con un solo extremo; los vecinos OSPF solo se forman cuando ambos routers tienen el serial configurado.");
            }

            cli += "exit\nwrite memory\n";
        } catch (err) {
            alert(err.message);
            return;
        }
        r.script = cli;
        terminalRouters.textContent = cli;
        guardarRoutersStorage();
        if (avisos.length) {
            rtAvisos.innerHTML = `<div class="alert alert-warning py-2 small mb-0">${avisos.map(esc).join('<br>')}</div>`;
        } else {
            renderizarRouters();
        }
    }

    function asignarExtremo(clave, intfTxt) {
        const r = routerActual(); if (!r) return;
        const arr = (rtState.conexiones[clave] || []).filter(x => rtState.routers.some(rr => rr.id === x.router));
        const intf = canonIntf(intfTxt);
        const i = arr.findIndex(x => x.router === r.id);
        if (intf === "") {
            if (i >= 0) arr.splice(i, 1);
        } else if (i >= 0) {
            arr[i].intf = intf;
        } else {
            arr.push({ router: r.id, intf, dce: false });
        }
        rtState.conexiones[clave] = arr.slice(0, 2);
        r.script = null;
        guardarRoutersStorage();
        renderizarRouters();
    }

    // Eventos de routers
    btnRtAgregar.addEventListener("click", () => {
        const nombre = rtNuevoNombre.value.trim();
        if (nombre === "") { alert("Escribe el nombre del router (ej. R0)."); return; }
        if (rtState.routers.some(r => r.nombre.toLowerCase() === nombre.toLowerCase())) { alert(`Ya existe el router ${nombre}.`); return; }
        const r = routerVacio(nombre);
        rtState.routers.push(r);
        rtState.sel = r.id;
        rtNuevoNombre.value = "";
        guardarRoutersStorage();
        renderizarRouters();
    });
    rtNuevoNombre.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter") { ev.preventDefault(); btnRtAgregar.click(); }
    });
    btnRtEliminar.addEventListener("click", () => {
        const r = routerActual(); if (!r) return;
        if (!confirm(`¿Eliminar el router ${r.nombre} y sus conexiones?`)) return;
        rtState.routers = rtState.routers.filter(x => x.id !== r.id);
        Object.keys(rtState.conexiones).forEach(k => {
            rtState.conexiones[k] = rtState.conexiones[k].filter(x => x.router !== r.id);
        });
        rtState.sel = null;
        guardarRoutersStorage();
        renderizarRouters();
    });
    rtSel.addEventListener("change", () => {
        rtState.sel = rtSel.value;
        guardarRoutersStorage();
        renderizarRouters();
    });
    cuerpoRouters.addEventListener("input", (ev) => {
        const k = ev.target.getAttribute("data-rt");
        const r = routerActual();
        if (!k || !r || ev.target.type === "checkbox") return;
        r[k] = ev.target.value;
        if (k !== "enrutamiento") r.script = null;
        guardarRoutersStorage();
    });
    cuerpoRouters.addEventListener("change", (ev) => {
        const t = ev.target;
        const r = routerActual(); if (!r) return;
        const k = t.getAttribute("data-rt");
        if (k && t.type === "checkbox") {
            r[k] = t.checked;
            r.script = null;
            guardarRoutersStorage();
        } else if (k === "enrutamiento") {
            r.enrutamiento = t.value;
            r.script = null;
            guardarRoutersStorage();
            renderizarRouters();
        } else if (t.classList.contains("rt-intf")) {
            asignarExtremo(t.getAttribute("data-clave"), t.value);
        } else if (t.classList.contains("rt-dce")) {
            const ex = (rtState.conexiones[t.getAttribute("data-clave")] || []).find(x => x.router === r.id);
            if (ex) { ex.dce = t.checked; guardarRoutersStorage(); }
        }
    });
    cuerpoRouters.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" && ev.target.classList.contains("rt-intf")) { ev.preventDefault(); ev.target.blur(); }
    });
    btnRtGenerar.addEventListener("click", generarRouterHandler);
    [cuerpoRouters, swgVlansBody].forEach(cont => {
        cont.addEventListener("click", (ev) => {
            const span = ev.target.closest(".copy-click");
            if (span) flashCopia(span);
        });
    });
    btnRtCopiar.addEventListener("click", () => {
        copiarAlPortapapeles(terminalRouters.textContent, btnRtCopiar, "📋 Copiar Todo", "btn-outline-secondary", "btn-success");
    });
    btnToggleRouters.addEventListener("click", () => {
        rtState.oculto = !rtState.oculto;
        cuerpoRouters.style.display = rtState.oculto ? "none" : "block";
        btnToggleRouters.textContent = rtState.oculto ? "Mostrar" : "Ocultar";
        guardarRoutersStorage();
    });

    // --- Helpers Matemáticos ---
    function esIPv4Valida(ip) {
        return /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/.test(ip);
    }
    function esMascaraValida(m) {
        return esIPv4Valida(m) && /^1*0*$/.test(m.split('.').map(o => Number(o).toString(2).padStart(8, '0')).join(''));
    }
    function contarBitsMascara(maskOct) {
        return maskOct.reduce((acc, o) => acc + (o.toString(2).split('1').length - 1), 0);
    }
    function calcularMascara(cidr) {
        const m = [];
        for (let i = 0; i < 4; i++) {
            if (cidr >= 8) { m.push(255); cidr -= 8; }
            else if (cidr > 0) { m.push(256 - Math.pow(2, 8 - cidr)); cidr = 0; }
            else { m.push(0); }
        }
        return m;
    }
    function calcularWildcard(maskArray) {
        return maskArray.map(m => 255 - m);
    }
    function calcularRed(ipArray, maskArray) {
        return ipArray.map((octeto, i) => octeto & maskArray[i]);
    }
    function calcularBroadcast(redArray, wildcardArray) {
        return redArray.map((octeto, i) => octeto | wildcardArray[i]);
    }
    function ipToInt(ipArray) {
        return ((ipArray[0] << 24) | (ipArray[1] << 16) | (ipArray[2] << 8) | ipArray[3]) >>> 0;
    }
    function intToIp(int) {
        return [(int >>> 24) & 255, (int >>> 16) & 255, (int >>> 8) & 255, int & 255];
    }
    function mostrarMensaje(contenedor, html, tipo) {
        contenedor.innerHTML = `<div class="alert alert-${tipo}" role="alert">${html}</div>`;
    }

    cargarSwitchGlobalStorage();
    cargarRoutersStorage();
    cargarSubneteoStorage();
    cargarDatosStorage();
});