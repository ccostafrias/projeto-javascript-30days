const keys = document.querySelectorAll('.key')
const audios = document.querySelectorAll('audio')

//Faz com que o sistema detecte quando qualquer tecla é pressionada
window.addEventListener('keydown', function(e){
    //Para cada tecla (da tela), irá verificar se a pressionada corresponde a alguma delas
    keys.forEach(key => {
        if (key.dataset.key == e.keyCode){
            //Primeira reseta o som e depois o toca
            audios.forEach(audio => {
                if (audio.dataset.key == key.dataset.key){
                    audio.currentTime = 0
                    audio.play()
                }
            });
            //Adiciona o efeito
            key.classList.add('playing')

            //Desativa o efeito depois de um curto período
            setTimeout(() => {
                key.classList.remove('playing')
            }, 100);
        }
    });
})

