let selectedDeviceId;
const codeReader = new ZXing.BrowserQRCodeReader();
let videoInputDevices = [];

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function changeCamera() {
    const deviceId = document.getElementById('camera-select').value;
    if (deviceId) {
        startScanning(deviceId);
    }
}

function startScanning(deviceId) {
    document.getElementById('loading').classList.add('show');
    codeReader.decodeOnceFromVideoDevice(deviceId, 'preview')
        .then((result) => {
            document.getElementById('loading').classList.remove('show');
            document.getElementById('feedback').classList.add('show');
            setTimeout(() => document.getElementById('feedback').classList.remove('show'), 3000);
            displayDecodedLink(result.text);
        })
        .catch((err) => {
            document.getElementById('loading').classList.remove('show');
            alert('Error: ' + err.message);
        });
}

function displayDecodedLink(decodedText) {
    // If the decoded text is a URL, display it as a clickable link
    const decodedLinkContainer = document.getElementById('decoded-link-container');
    const decodedLink = document.getElementById('decoded-link');
    
    if (isValidURL(decodedText)) {
        decodedLink.href = decodedText;
        decodedLink.textContent = decodedText;
        decodedLinkContainer.style.display = 'block';
    } else {
        decodedLinkContainer.style.display = 'none';
    }
}

function isValidURL(str) {
    const pattern = /^(https?:\/\/)?([\w\-]+(\.[\w\-]+)+)(\/[\w\-]*)*(\?[;&a-z\%=]*)?(#[\w\-]*)?$/i;
    return pattern.test(str);
}

window.addEventListener("load", function () {
    document.getElementById('loading').classList.add('show');
    
    codeReader.listVideoInputDevices()
        .then((devices) => {
            videoInputDevices = devices;
            let cameraSelect = document.getElementById('camera-select');
            devices.forEach((device) => {
                const option = document.createElement('option');
                option.value = device.deviceId;
                option.innerText = device.label || 'Camera ' + (cameraSelect.length + 1);
                cameraSelect.appendChild(option);
            });

            if (devices.length > 0) {
                startScanning(devices[0].deviceId);
            }
        })
        .catch((err) => {
            document.getElementById('loading').classList.remove('show');
            alert('Error: ' + err.message);
        });
});

// QR Code Generation functionality
document.getElementById('generate-qrcode').addEventListener('click', function () {
    var text = document.getElementById('text-to-encode').value;
    if (text) {
        QRCode.toCanvas(document.getElementById("qr-canvas"), text, function (error) {
            if (error) {
                console.error(error);
            } else {
                document.getElementById('download-qrcode').style.display = 'inline-block';
                document.getElementById('download-qrcode').href = document.getElementById("qr-canvas").toDataURL();
            }
        });
    } else {
        alert("Please enter some text or URL to generate QR Code");
    }
});
