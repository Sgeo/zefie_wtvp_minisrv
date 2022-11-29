var minisrv_service_file = true;

if (minisrv_config.config.allow_guests) {
    headers = `300 Moved
Connection: Close
wtv-noback-all: wtv-register:
wtv-expire-all: wtv-`;
    if (socket.ssid) {
        if (session_data) {
            if (session_data.data_store) {
                if (session_data.data_store.wtvsec_login) {
                    headers += "\nwtv-ticket: " + session_data.data_store.wtvsec_login.ticket_b64;
                }
            }
        }
    }
    headers += `
wtv-service: reset
${getServiceString('wtv-1800')}
wtv-relogin-url: wtv-1800:/preregister?guest_login=true&skip_splash=true
wtv-reconnect-url: wtv-1800:/preregister?guest_login=true&reconnect=true
wtv-boot-url: wtv-1800:/preregister?guest_login=true
Location: client:relogin`;
} else {
    var errpage = wtvshared.doErrorPage(400, "Guest mode is not enabled on this service.");
    headers = errpage[0];
    data = errpage[1];
}