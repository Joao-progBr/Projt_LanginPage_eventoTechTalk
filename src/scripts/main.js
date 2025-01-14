document.addEventListener('DOMContentLoaded', function(){
    AOS.init();

    const dataEvento = new Date("Apr, 2025 19:00:00")
    const TimeStampEvento = dataEvento.getTime()

    const contaHoras = setInterval(function(){
        const agora = new Date()
        const TimeStampAgora = agora.getTime()

        const inicioEvento =  TimeStampEvento - TimeStampAgora

        const diaEmMS = 1000 * 60 * 60 * 24
        const horasEmMs = 1000 * 60 * 60 
        const minutosEmMs = 1000 * 60

        if( inicioEvento <= 0){
            clearInterval(contaHoras)
            document.getElementById('contagem').innerHTML = 'Evento expirado'
        }
        else{
            const DiasAteEvento = Math.floor(inicioEvento / diaEmMS);
            const HorastaAteEvento = Math.floor((inicioEvento % diaEmMS) / horasEmMs);
            const minutosAteEvento = Math.floor((inicioEvento % horasEmMs) / minutosEmMs);
            const segundosAteEvento = Math.floor((inicioEvento %  minutosEmMs) / 1000);
            // const DiasAteEvento = Math.floor(inicioEvento / (1000 * 60 * 60 * 24))
            // const HorastaAteEvento = Math.floor((inicioEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) 
            // const minutosAteEvento = Math.floor((inicioEvento % (1000 * 60 * 60)) / (1000 * 60))
            // const segundosAteEvento = Math.floor((inicioEvento % (1000 * 60)) / 1000)
    
            document.getElementById ('contagem').innerHTML = `${DiasAteEvento}d ${HorastaAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`
        }
    }, 1000)
})

