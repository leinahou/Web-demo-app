stx = String.fromCharCode(02);
fs = String.fromCharCode(28);
etx = String.fromCharCode(03);
us = String.fromCharCode(31);
version = "1.39";

function toBase64(data) {
    var toBase64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var base64Pad = '=';

    var result = '';
    var length = data.length;
    var i;
    // Convert every three bytes to 4 ascii characters.                                                 

    for (i = 0; i < (length - 2); i += 3) {
        result += toBase64Table[data.charCodeAt(i) >> 2];
        result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
        result += toBase64Table[((data.charCodeAt(i + 1) & 0x0f) << 2) + (data.charCodeAt(i + 2) >> 6)];
        result += toBase64Table[data.charCodeAt(i + 2) & 0x3f];
    }

    // Convert the remaining 1 or 2 bytes, pad out to 4 characters.                                     

    if (length % 3) {
        i = length - (length % 3);
        result += toBase64Table[data.charCodeAt(i) >> 2];
        if ((length % 3) == 2) {
            result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
            result += toBase64Table[(data.charCodeAt(i + 1) & 0x0f) << 2];
            result += base64Pad;
        } else {
            result += toBase64Table[(data.charCodeAt(i) & 0x03) << 4];
            result += base64Pad + base64Pad;
        }
    }
    return result;
}

function getlrc(params) {
    var lrc = 0;
    for (i = 1; i < params.length; i++) {
        var type_of = typeof (params[i]);
        if (type_of == "string") {
            var element = params[i].split("");
            for (ii = 0; ii < element.length; ii++) {
                lrc ^= element[ii].charCodeAt(0);
            }
        } else {
            lrc ^= params[i];
        }
    }
    return (lrc > 0) ? String.fromCharCode(lrc) : 0;
}

function getvalue(name) {
    var str = window.location.search;

    if (str.indexOf(name) != -1) {
        var pos_start = str.indexOf(name) + name.length + 1;
        var pos_end = str.indexOf("&", pos_start);
        if (pos_end == -1) {
            return str.substring(pos_start);
        } else {
            alert("no IP");
        }
    }
}

function onClick(param) {
    var argsFromPageA = getvalue("DstIP");
    var url = {};
    if (argsFromPageA)
        url = "http://" + argsFromPageA + "/?" + param;
    else {
        alert("no IP");
        return false;
    }
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange = function(){
        if (oReq.readyState == XMLHttpRequest.DONE)
        alert(oReq.responseText);
    }
    oReq.open('GET', url, true);
    oReq.send();
}