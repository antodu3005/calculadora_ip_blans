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

    // --- Estado General ---
    const listaNodos = [];
    const historialBorrados = [];
    let nodoSeleccionadoIndex = null;
    let intfEditIndex = null;
    let vlanIdCounter = 10;

    const TEXTO_TERMINAL_VACIO = 'Haz clic en "Generar Código Router y Auditar" para evaluar IPs y crear script.';
    const TEXTO_SWITCH_VACIO = 'Haz clic en "Generar Script Switch" para crear los comandos de la VLAN y sus puertos.';

    // --- Utilidades de Sanitización y Formateo Cisco IOS ---
    function esc(valor) {
        const mapa = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
        return String(valor ?? "").replace(/[&<>"']/g, c => mapa[c]);
    }

    function nodoActual() {
        return nodoSeleccionadoIndex !== null ? (listaNodos[nodoSeleccionadoIndex] || null) : null;
    }

    function invalidarScript(nodo) {
        if (!nodo) return;
        nodo.scriptGenerado = null;
        nodo.scriptRouter = null;
        nodo.scriptSwitch = null;
        nodo.auditoriaLogs = [];
        terminalRouter.textContent = TEXTO_TERMINAL_VACIO;
        terminalSwitch.textContent = TEXTO_SWITCH_VACIO;
        btnListoRouter.style.display = "none";
        btnListoSwitch.style.display = "none";
        panelAuditoria.style.display = "none";
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

    // Expande correctamente nombres cortos (f0/1, fa0/1, g0/1/0, s0/1/0, lo0) y rangos (fa0/2-10)
    // Si es para Switch (forzarInicioEnUno = true), corrige cualquier /0 a /1 para evitar % Invalid input detected
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

    function copiarAlPortapapeles(texto, btnElement, textoOriginal, claseBase = "", claseExito = "") {
        if (!texto || texto === TEXTO_TERMINAL_VACIO || texto === TEXTO_SWITCH_VACIO) return;

        const exito = () => {
            if (btnElement && claseBase && claseExito) {
                btnElement.textContent = "¡Copiado!";
                try {
                    btnElement.classList.replace(claseBase, claseExito);
                } catch (e) {
                    btnElement.classList.add(claseExito);
                }
                setTimeout(() => {
                    btnElement.textContent = textoOriginal;
                    try {
                        btnElement.classList.replace(claseExito, claseBase);
                    } catch (e) {
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
        const interfaces = (Array.isArray(base.interfaces) ? base.interfaces : []).filter(i => i && typeof i.nombre === "string");
        const dhcpPools = (Array.isArray(base.dhcpPools) ? base.dhcpPools : []).filter(p => p && typeof p.nombre === "string" && typeof p.red === "string" && typeof p.mascara === "string");
        const ripNetworks = (Array.isArray(base.ripNetworks) ? base.ripNetworks : []).filter(r => typeof r === "string");
        const eigrpNetworks = (Array.isArray(base.eigrpNetworks) ? base.eigrpNetworks : []).filter(e => e && typeof e.red === "string" && typeof e.mascara === "string" && typeof e.wildcard === "string");
        const ospfNetworks = (Array.isArray(base.ospfNetworks) ? base.ospfNetworks : []).filter(o => o && typeof o.red === "string" && typeof o.mascara === "string" && typeof o.wildcard === "string");
        const vlans = (Array.isArray(base.vlans) ? base.vlans : []).filter(v => v && typeof v.intf === "string" && v.id);

        const str = (v) => (typeof v === "string" ? v : (v == null ? "" : String(v)));

        return {
            ...base,
            vlanId: Number.isFinite(Number(base.vlanId)) && Number(base.vlanId) >= 1 ? Number(base.vlanId) : 10,
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

        if (ipOctetos.join('.') === redOctetos.join('.')) {
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
                            <label class="form-label text-light fw-bold mb-1" style="font-size: 0.85rem;">Asignar red a Cliente / Nodo / VLAN (Presiona Enter para guardar):</label>
                            <div class="row g-2">
                                <div class="col-3">
                                    <div class="input-group input-group-sm">
                                        <span class="input-group-text bg-secondary text-white border-secondary">VLAN</span>
                                        <input type="number" class="form-control input-vlan-id" value="${datosRedCalculada.vlanId}" min="1" max="4094" title="VLAN ID">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control form-control-sm input-cliente" placeholder="Ej. Ventas, Sistemas, Pachuca 1">
                                </div>
                                <div class="col-3">
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
                span.addEventListener('click', () => {
                    copiarAlPortapapeles(span.textContent.trim(), null, "");
                    const originalBg = span.style.backgroundColor;
                    const originalColor = span.style.color;
                    span.style.backgroundColor = "#198754";
                    span.style.color = "white";
                    setTimeout(() => {
                        span.style.backgroundColor = originalBg;
                        span.style.color = originalColor;
                    }, 800);
                });
            });

            const inputClienteEl = contenedor.querySelector('.input-cliente');
            const inputVlanEl = contenedor.querySelector('.input-vlan-id');
            const btnGuardarEl = contenedor.querySelector('.btn-guardar-nodo');

            const ejecutarGuardadoNodo = () => {
                if (!guardEdit()) return;
                const clienteNombre = inputClienteEl.value.trim();
                const vid = parseInt(inputVlanEl.value.trim(), 10);

                if (clienteNombre === "") {
                    alert("Por favor, ingresa un nombre para el cliente o VLAN.");
                    return;
                }
                if (isNaN(vid) || vid < 1 || vid > 4094) {
                    alert("El VLAN ID debe ser un número entre 1 y 4094.");
                    return;
                }
                if (listaNodos.some(n => n.cliente.toLowerCase() === clienteNombre.toLowerCase())) {
                    alert(`El nodo "${clienteNombre}" ya existe en la lista.`);
                    return;
                }

                datosRedCalculada.vlanId = vid;
                guardarNodoLista(clienteNombre, JSON.parse(JSON.stringify(datosRedCalculada)));
                vlanIdCounter = vid + 10;
                inputClienteEl.value = "";
                inputVlanEl.value = vlanIdCounter;
            };

            btnGuardarEl.addEventListener('click', ejecutarGuardadoNodo);

            [inputClienteEl, inputVlanEl].forEach(inp => {
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
                `${htmlAdicional}<h5 class="alert-heading mt-2">Dirección Inválida</h5><p>La dirección <strong>${esc(ipValue)}/${cidr}</strong> contiene bits de host activos.</p><hr><p class="mb-0">Dirección de red base correcta: <strong>${redOctetos.join('.')}</strong></p>`,
                "danger"
            );
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

        const intfsL3 = nodo.interfaces.filter(i => !i.mode || i.mode === 'none');

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
                        logs.push({ tipo: 'danger', texto: `DHCP [${esc(pool?.nombre || 'sin-nombre')}]: red o máscara corrupta o faltante.` });
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

        // Auditoría OSPF (Considerando Interfaces L3 y Subinterfaces encapsulation dot1Q)
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

                // Verificar si existen subinterfaces encapsulation dot1Q que olvidaron anunciarse en OSPF
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
            tablaNodosBody.innerHTML = `<tr><td colspan="10" class="text-center text-muted py-3">Todos los nodos eliminados. Puedes deshacer la acción.</td></tr>`;
        } else {
            tablaNodosBody.innerHTML = listaNodos.map((nodo, index) => {
                const isSelected = index === nodoSeleccionadoIndex;
                const totalIntf = nodo.interfaces.length + (nodo.vlansHabilitado ? nodo.vlans.length : 0);
                const ipBase = nodo.direccion.split('/')[0];
                return `
                    <tr class="fila-nodo ${isSelected ? 'table-primary border-primary' : ''}" data-index="${index}">
                        <td class="fw-bold text-danger">${esc(nodo.vlanId)}</td>
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
        tituloConfiguracion.innerHTML = `Gestión de Interfaces: <span class="text-dark border-bottom border-2 border-primary">${esc(nodo.cliente)} (VLAN ${esc(nodo.vlanId)})</span>`;

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
                const modeBadge = intf.mode === 'access'
                    ? `<span class="badge bg-info text-dark ms-2">SWITCH ACCESS (VLAN ${esc(nodo.vlanId)})</span>`
                    : (intf.mode === 'trunk' ? `<span class="badge bg-warning text-dark ms-2">SWITCH TRUNK</span>` : '');
                const clockBadge = (esSerial && intf.clockRate) ? `<span class="badge bg-warning text-dark ms-2 border border-secondary" style="font-size: 0.65rem;">⏱ CLOCK: ${esc(intf.clockRateValue)}</span>` : '';
                const helperBadge = intf.helper ? `<span class="badge bg-info text-dark ms-2 border border-secondary" style="font-size: 0.65rem;">HELPER: ${esc(intf.helper)}</span>` : '';
                
                const estadoConfig = (intf.ip && intf.mascara)
                    ? `<div class="text-muted font-monospace mt-1" style="font-size: 0.85rem;">IP: <span class="text-dark fw-bold">${esc(intf.ip)}</span> | Mask: <span class="text-dark fw-bold">${esc(intf.mascara)}</span></div>`
                    : (intf.mode
                        ? `<div class="text-success fst-italic mt-1" style="font-size: 0.80rem;">✔ Puerto Capa 2 listo para Switch (${esc(formatearInterfazCisco(intf.nombre, true))})</div>`
                        : `<div class="text-danger fst-italic mt-1" style="font-size: 0.80rem;">⚠️ Falta configurar IP y máscara</div>`);

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
        const valorIntf = inputInterfaz.value.trim().toLowerCase().replace(/\s+/g, "");
        const mode = inputModoPuerto.value;

        if (valorIntf === "") return;

        const regexValida = /^(?:(?:fa|f|gi|gig|g|se|s)\d+\/\d+(?:\/\d+)?(?:-\d+)?|lo\d+)$/;
        if (!regexValida.test(valorIntf)) {
            alert("Formato inválido. Ejemplos válidos:\n- Router: f0/0, g0/0, g0/1/0, s0/0, s0/1/0, lo0\n- Switch: fa0/1, fa0/2-10, g0/1");
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

        if (nodo.interfaces.some(intf => intf.nombre === valorIntf && (intf.mode || null) === (mode === 'none' ? null : mode))) {
            alert(`La interfaz ${valorIntf.toUpperCase()} ya existe en este nodo.`);
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
        invalidarScript(nodo);
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

        invalidarScript(nodo);
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
            nodo.interfaces.splice(parseInt(event.target.getAttribute("data-intf-index"), 10), 1);
            invalidarScript(nodo);
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
        nombreNodoMenu.textContent = `${nodo.cliente} (VLAN ${nodo.vlanId})`;

        switchInfoVlanId.textContent = nodo.vlanId;
        switchInfoVlanName.textContent = nodo.cliente.replace(/\s+/g, '_');

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
        invalidarScript(nodo);
        renderizarTabla();
    });

    checkHabilitarRip.addEventListener("change", function () {
        if (!guardEdit()) { this.checked = !this.checked; return; }
        const nodo = nodoActual(); if (!nodo) return;
        nodo.ripHabilitado = this.checked;
        invalidarScript(nodo);
        renderizarTabla();
    });

    checkHabilitarEigrp.addEventListener("change", function () {
        if (!guardEdit()) { this.checked = !this.checked; return; }
        const nodo = nodoActual(); if (!nodo) return;
        nodo.eigrpHabilitado = this.checked;
        invalidarScript(nodo);
        renderizarTabla();
    });

    checkHabilitarOspf.addEventListener("change", function () {
        if (!guardEdit()) { this.checked = !this.checked; return; }
        const nodo = nodoActual(); if (!nodo) return;
        nodo.ospfHabilitado = this.checked;
        invalidarScript(nodo);
        renderizarTabla();
    });

    checkHabilitarVlans.addEventListener("change", function () {
        if (!guardEdit()) { this.checked = !this.checked; return; }
        const nodo = nodoActual(); if (!nodo) return;
        nodo.vlansHabilitado = this.checked;
        invalidarScript(nodo);
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
        invalidarScript(nodo);
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
            invalidarScript(nodo);
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
        invalidarScript(nodo);
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
            invalidarScript(nodo);
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
        invalidarScript(nodo);
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
        invalidarScript(nodo);
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
            invalidarScript(nodo);
            renderizarTabla();
        }
    });

    // --- OSPF (Con Wildcard Automática e Importación directa de Subinterfaces dot1Q) ---
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
        invalidarScript(nodo);
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
        invalidarScript(nodo);
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

    // Importar automáticamente a OSPF todas las subinterfaces dot1Q y puertos físicos L3 del router
    btnImportarDot1qOspf.addEventListener("click", () => {
        if (!guardEdit()) return;
        const nodo = nodoActual(); if (!nodo) return;

        const areaStr = ospfAreaInput.value.trim() !== "" ? ospfAreaInput.value.trim() : "0";
        let agregadas = 0;

        // 1. Importar desde Subinterfaces VLAN (encapsulation dot1Q)
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

        // 2. Importar también desde Interfaces Físicas L3 configuradas
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

        invalidarScript(nodo);
        renderizarTabla();
    });

    listaOspfNetworks.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-quitar-ospf")) {
            if (!guardEdit()) return;
            const nodo = nodoActual(); if (!nodo) return;
            nodo.ospfNetworks.splice(parseInt(event.target.getAttribute("data-ospf-index"), 10), 1);
            invalidarScript(nodo);
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

        const intf = vlanIntfFisica.value.trim().toLowerCase().replace(/\s+/g, "");
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

        nodo.vlans.push({
            intf,
            id,
            ip,
            mascara: mask,
            helper: hlp !== "" ? hlp : null,
            nativa
        });
        invalidarScript(nodo);
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
            invalidarScript(nodo);
            renderizarTabla();
        }
    });

    // --- Generador de Script para SWITCH (Capa 2) ---
    function generarScriptSwitchHandler() {
        if (!guardEdit()) return;
        const nodo = nodoActual(); if (!nodo) return;

        const pDefault = switchPuertoDefault.value.trim().toLowerCase().replace(/\s+/g, "");
        const pTrunk = switchPuertoTrunkOpcional.value.trim().toLowerCase().replace(/\s+/g, "");

        if (tienePuertoCeroDeSwitch(pDefault) || tienePuertoCeroDeSwitch(pTrunk)) {
            alert("⚠️ Recuerda: En los switches de Cisco la numeración de los puertos físicos siempre inicia en 1 (FastEthernet 0/1, 0/2, etc.) y el puerto 0/0 NO existe (provoca % Invalid input detected en Packet Tracer).\n\nSe ajustará automáticamente a 0/1.");
        }

        const nombreVlanLimpio = nodo.cliente.trim().replace(/\s+/g, "_") || `VLAN_${nodo.vlanId}`;
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
        btnListoSwitch.style.display = "inline-block";
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

        // 1. Interfaces Físicas L3 del Router (Se configuran primero para dar Router-ID activo a OSPF)
        const intfsL3 = nodo.interfaces.filter(i => !i.mode || i.mode === 'none');
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
            padresUnicos.forEach(p => {
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

        // 6. Enrutamiento OSPF (Incluye redes locales y redes de subinterfaces encapsulation dot1Q)
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
        btnListoRouter.style.display = "inline-block";
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
                ? nodo.interfaces.map(intf => `<li class="list-group-item py-1 px-2 d-flex justify-content-between"><span class="fw-bold">${esc(intf.nombre.toUpperCase())}</span><span class="font-monospace text-muted">${intf.ip ? esc(intf.ip) : (intf.mode ? `L2 ${esc(intf.mode.toUpperCase())}` : 'Sin IP')}</span></li>`).join('')
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
                        ✅ ${esc(nodo.cliente)} <span class="badge bg-danger ms-2">VLAN ${esc(nodo.vlanId)}</span> <span class="badge bg-secondary ms-1">${esc(nodo.direccion)}</span> ${semaforoBadge}
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
            copiarAlPortapapeles(
                decodeURIComponent(event.target.getAttribute("data-script")),
                event.target,
                event.target.textContent,
                "btn-outline-primary",
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
            const span = event.target.closest(".copy-click");
            const textoACopiar = span.getAttribute("data-copy") || span.textContent.trim();
            copiarAlPortapapeles(textoACopiar, null, "");
            const originalBg = span.style.backgroundColor;
            const originalColor = span.style.color;
            span.style.backgroundColor = "#198754";
            span.style.color = "white";
            setTimeout(() => {
                span.style.backgroundColor = originalBg;
                span.style.color = originalColor;
            }, 800);
            return;
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
            terminalRouter.textContent = TEXTO_TERMINAL_VACIO;
            terminalSwitch.textContent = TEXTO_SWITCH_VACIO;
            btnListoRouter.style.display = "none";
            btnListoSwitch.style.display = "none";
            renderizarTabla();
        }
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

    cargarDatosStorage();
});