function fn(cb){
    console.log('Executar acao de callback')
    console.log(typeof cb)
    cb()
}

fn(function(){
    console.log('funcao passada por parametro')
})

function callback(){
    console.log('funcao passada por paramentro')
}
fn(callback)