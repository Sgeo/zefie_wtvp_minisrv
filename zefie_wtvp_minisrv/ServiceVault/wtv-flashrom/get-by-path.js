const WTVFlashrom = require("./WTVFlashrom.js");
request_is_async = true;

var bf0app_update = false;
var request_path = request_headers.query.path;
var romtype = ssid_sessions[socket.ssid].get("wtv-client-rom-type");
var bootver = ssid_sessions[socket.ssid].get("wtv-client-bootrom-version")

if ((romtype == "bf0app" || !romtype) && (bootver == "105" || !bootver)) {
	// assume old classic in flash mode, override user setting and send tellyscript
	// because it is required to proceed in flash mode
	bf0app_update = true;
	ssid_sessions[socket.ssid].set("bf0app_update", bf0app_update);
}

if (request_headers.query.raw || bf0app_update) {
	if (!ssid_sessions[socket.ssid].data_store.WTVFlashrom) {
		ssid_sessions[socket.ssid].data_store.WTVFlashrom = new WTVFlashrom(service_vaults, service_name, minisrv_config.services[service_name].use_zefie_server, bf0app_update, minisrv_config.services[service_name].debug);
	}

	ssid_sessions[socket.ssid].data_store.WTVFlashrom.getFlashRom(request_path, function (data, headers) {
		sendToClient(socket, headers, data);
	});
} else {
	headers = "200 OK\n"
	if (request_headers.query.path) {
		headers += "Content-type: text/html\n"
		headers += "wtv-visit: wtv-flashrom:/initiate-lc2-download?path=" + request_headers.query.path;
		data = '';
	} else {
		var errpage = doErrorPage(404)
		headers = errpage[0];
		data = errpage[1];
	}
	sendToClient(socket, headers, data);
}