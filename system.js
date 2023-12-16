const container = document.querySelector('.container')
const qrCodBTN = document.querySelector('#qr-form button')
const qrCodInput = document.querySelector('#qr-form input')
const qrCodIMG = document.querySelector('#qr-code img')

//eventos

function GerarQrCode(){
    const qrCodInputValue = qrCodInput.value

    if(!qrCodInputValue)return;

    qrCodBTN.innerText = 'Gerando Codigo...'

    qrCodIMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodInputValue}`

    qrCodIMG.addEventListener('load', () => {
        container.classList.add('active')
    qrCodBTN.innerText = 'Codigo Criado!'
    })

}



qrCodBTN.addEventListener('click', ()=>{
    GerarQrCode()
})

//Evento apartir do enter

qrCodInput.addEventListener('keydown', (e)=>{
    if(e.code === 'Enter'){
        GerarQrCode()
    }
})

//limpar area do QRCOD 
qrCodInput.addEventListener('keyup', ()=>{

    if(!qrCodInput.value){
        container.classList.remove('active')
    qrCodBTN.innerText = 'Gerar QR Code'
    }

})