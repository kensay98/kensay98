chrome.storage.sync.get('connectionId', function (data) {
    var url = "https://15cc140e5c0e.ngrok.io/?connection=" + data.connectionId
    new QRCode(document.getElementById("qrcode"), url);
})