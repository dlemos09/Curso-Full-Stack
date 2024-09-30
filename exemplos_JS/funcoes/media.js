(function () {
    function calcularMedia() {
        let total = 0;
        let qtd = arguments.length;
        for(let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== 'number'){
                throw Error('Only numbers')
            }
            total += arguments[i];
        }
        return total/qtd || 0
    }

    let media = calcularMedia(2, 4)
    console.log(media)
})()