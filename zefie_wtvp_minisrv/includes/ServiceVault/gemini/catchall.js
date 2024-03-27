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
                if(res.meta.startsWith("text/gemini")) {
                    text = gmi2webtv.gmi2webtv(text);
                    sendToClient(socket, `200 OK\nContent-Type: text/html`, text);
                } else {
                    console.log(`None-text/gemini: ${res.meta}`);
                    sendToClient(socket, `200 OK\nContent-Type: text/plain`, "text");
                }
            });
        }
    });
});

