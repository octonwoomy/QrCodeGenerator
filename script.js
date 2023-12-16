const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const button = document.getElementById("btn")
function getqr(){
    let data = qrText.value;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`; 
}
button.addEventListener("click", getqr);
