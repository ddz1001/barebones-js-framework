

class RequestHandler {
    constructor() {

    }

    restReq(method, url, content=null, type="text") {
        let outer = this;
        let rtr = new Promise( function(resolve, reject) {
            
            let xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.responseType = type;

            xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) {                    
                    resolve(xhr.response);
                }
                else if(xhr.status != 200) {
                    reject(xhr.status + " " + xhr.statusText);
                }
            }

            xhr.onerror = function() {
                reject(xhr.status + " " + xhr.statusText);
            }

            if(content != null) {
                xhr.send(content);
            }
            else {
                xhr.send();
            }

        } );

        return rtr;
    }


    restRequest(method, url, content=null) {
        return this.restReq(method, url, content, "text");
    }

    restRequestBlob(method, url, content=null) {
        return this.restReq(method, url, content, "blob");
    }

    restRequestDocument(method, url, content=null) {
        return this.restReq(method, url, content, "document");
    }

    restRequestJson(method, url, content=null) {
        return this.restReq(method, url, content, "json");
    }

    restRequestBuffer(method, url, content=null) {
        return this.restReq(method, url, content, "arraybuffer");
    }

}