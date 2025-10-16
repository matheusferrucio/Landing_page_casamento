document.addEventListener('DOMContentLoaded', function(){
    const btnCopiar = document.getElementById('btnCopiarPix');

    btnCopiar.addEventListener('click', function(){
        const chavePix = btnCopiar.getAttribute('data-chave');

        // usa a API clipboard para copiar o texto
        navigator.clipboard.writeText(chavePix).then(()=>{

            // para dar um feedback visual de que a chave foi copiada
            const textoOriginal = btnCopiar.textContent;
            btnCopiar.textContent = "Chave copiada";

            setTimeout(() => {
                btnCopiar.textContent = textoOriginal;
            }, 3000);
        }).catch(err => {
            console.error("Erro ao copiar a chave PIX: ", err);
            alert("Não foi possível copiar a chave. Tente novamente ou use o QR Code.")
        });
    });
});