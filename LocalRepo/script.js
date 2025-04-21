function generateQR() {
    const input = document.getElementById("qr-input").value;
    const qrBox = document.getElementById("qr-code-box");
    const qrImage = document.getElementById("qr-code");
  
    if (!input.trim()) {
      alert("Please enter text or URL.");
      qrBox.style.display = "none";
      return;
    }
  
    // Use API to generate QR Code
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;
  
    qrImage.src = apiUrl;
    qrBox.style.display = "block";
  }