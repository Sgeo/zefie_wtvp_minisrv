var minisrv_service_file = true;

request_is_async = true;

geminiPromise.then((gemini) => {
    gemini.sendGeminiRequest(request_headers.request_url, {
        tlsOpt: {
            rejectUnauthorized: false
        }
    }, (err, res) => {
        if(err) {
            sendToClient(socket, `500 Error`, "Unexpected error");
        } else {
            let text = "";
            let headers = `200 OK\nContent-Type: text/plain`;
            res.on("data", (chunk) => {
                text += chunk;
            });
            res.on("end", () => {
                if(10 <= res.statusCode && res.statusCode <= 19) {
                    let url = request_headers.request_url.replaceAll(/\?.*/g, "");
                    let query = res.meta.replaceAll('\\', '\\\\').replaceAll('"', '\\"');
                    let html = `<script>var input = prompt("${query}"); if(input != null) { location.replace("${url}?"+input); } else { history.back(); }</script>`
                    sendToClient(socket, `200 OK\nContent-Type: text/html`, html);
                }
                else if(20 <= res.statusCode && res.statusCode <= 29) {
                    if(res.meta.startsWith("text/gemini")) {
                        text = gmi2webtv.gmi2webtv(text);
                        sendToClient(socket, `200 OK\nContent-Type: text/html`, text);
                    } else {
                        sendToClient(socket, `200 OK\nContent-Type: ${res.meta}`, text);
                    }
                } else if(30 <= res.statusCode && res.statusCode <= 39) {
                    sendToClient(socket, `302 Redirect\nLocation: ${res.meta}`, "Redirecting...");
                }
            });
        }
    });
});

