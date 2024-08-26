const textarea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const txtEncriptado =encriptar(textarea.value)
    mensaje.value=txtEncriptado
    textarea.value=""
    document.getElementById("Muñeco").style.display= "none";
    document.getElementById("msj").style.display= "none";
    document.getElementById("parrafo").style.display= "none";
    document.getElementById("copiar").style.display="block";
    document.getElementById("mensaje").style.display="block";
}


function encriptar(stringEncriptado){
let matrizCodigo=[["e","enter"],["i","ines"],["a","ai"],["o","over"],["u","ufat"]];
stringEncriptado= stringEncriptado.toLowerCase()

for(let i = 0; i < matrizCodigo.length ; i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
        stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])    }
}
return stringEncriptado
}

function btnDesencriptar(){
    const txtDesencriptado =desencriptar(textarea.value)
    mensaje.value=txtDesencriptado
    textarea.value=""
    document.getElementById("Muñeco").style.display= "none";
    document.getElementById("msj").style.display= "none";
    document.getElementById("parrafo").style.display= "none";
    document.getElementById("copiar").style.display="block";
}

function desencriptar(stringdesencriptado){
    let matrizCodigo=[["e","enter"],["i","ines"],["a","ai"],["o","over"],["u","ufat"]];
    stringdesencriptado= stringdesencriptado.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length ; i++){
        if(stringdesencriptado.includes(matrizCodigo[i][0])){
            stringdesencriptado = stringdesencriptado.replaceAll( matrizCodigo[i][1], matrizCodigo[i][0])    }
    }
    return stringdesencriptado
    }
    
        document.querySelector('.btnCopiar').addEventListener('click', function() {
            // Selecciona el textarea con la clase 'mensaje'
            const texto = document.querySelector('.mensaje');

            // Selecciona el texto dentro del textarea
            texto.select();
            texto.setSelectionRange(0, 99999); // Para dispositivos móviles

            // Copia el texto al portapapeles
            document.execCommand('copy');

            // Opcional: mensaje de confirmación
            alert('Texto copiado al portapapeles');
            

        });
