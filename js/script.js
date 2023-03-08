let messageArea = document.getElementById("message");
let buttonInput = document.getElementById("button")
let encryp = document.getElementById("encriptador")
class encrypter {
    constructor(encryptext){
        this.encryptedMessage(encryptext)
    }

    encryptedMessage(encryptext){
        function eliminarEspacios(texto) {
            var nuevoTexto = texto.replace(/\s/g, "");
            return nuevoTexto;
          }

        let end = messageArea.value
        console.log(alphabet(end))
        encryp.value = alphabet(eliminarEspacios(end))
    }
}

function alphabet(text){
    let letter = "abcdefghijklmnopqrstuvwxyz"
    let symbol = "defghijklmnopqrstuvwxyzabc"
    let newMessage = ""

    for(let i = 0; i < text.length; i++){
        let letra = text[i].toLowerCase();
        let index = letter.indexOf(letra);

        if(index !== -1){
            newMessage += symbol[index];
        }else{
            newMessage += letra
        }

    }
    return newMessage
}

console.log(alphabet("Hola"))

function checktext(){
    if(messageArea.value !== ""){
        new encrypter(console.log(messageArea.value.split("")))
    }else{
        alert("Ingresa un mensaje")
    }
}

buttonInput.addEventListener('click', function(){
    checktext()
})


