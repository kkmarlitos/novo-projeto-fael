const ativando_barra = {
    contas : document.querySelector('#contas_container>span'),
    cont_barra_lateral : document.getElementById('container_barra_lateral'),
    barra_lateral: document.querySelector('#barra_lateral'),

    barra_lateral_func: function(){
        let abre_fecha = 0

        ativando_barra.contas.addEventListener('click', () =>{
            if(abre_fecha == 0){
                ativando_barra.cont_barra_lateral.style = `height: 13vw;`

                abre_fecha ++
            }
            else{
                ativando_barra.cont_barra_lateral.style = `height: 0vw;`
            
                abre_fecha --
            }
        })
    }
}


ativando_barra.barra_lateral_func()