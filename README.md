# QR Code Reader & Generator

This is a simple and user-friendly web application that allows you to read QR codes using your device's camera and generate QR codes from URLs or text. The app also supports toggling between light and dark modes for better usability.

## Features

- Scan QR codes using your device's camera
- Generate QR codes from any URL or text input
- Download generated QR codes as PNG images
- Toggle between light and dark mode for comfortable viewing
- Select from multiple available cameras if your device has more than one

## How to Use

1. Open the `index.html` file in a modern web browser (preferably Chrome or Firefox).
2. Allow the browser to access your camera when prompted.
3. The app will automatically start scanning for QR codes using the default camera.
4. To switch cameras, use the "Select Camera" dropdown menu.
5. When a QR code is detected, the decoded link will be displayed as a clickable link.
6. To generate a QR code:
   - Enter a URL or any text in the input field under "QR Code Generator".
   - Click the "Generate QR Code" button.
   - The generated QR code will appear below the button.
   - Click the "Download QR Code" link to save the image.

## Dark Mode

Click the "Toggle Dark Mode" button at the top to switch between light and dark themes for better visibility in different lighting conditions.

## Technologies Used

- [ZXing](https://github.com/zxing-js/library) - For QR code scanning
- [QRCode.js](https://github.com/soldair/node-qrcode) - For QR code generation
- HTML, CSS, and JavaScript for the frontend interface

## License

This project is open source and available under the MIT License.

---

Feel free to contribute or report issues by creating a pull request or opening an issue on GitHub.
