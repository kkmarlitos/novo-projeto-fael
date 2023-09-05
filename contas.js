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

const manipulando_main = {
    li_array: document.getElementsByClassName("escolha_eventos"),
    h1: document.getElementsByTagName('h1')[0],
    
    alterando_eventos: function(){
        let frase_h1 = 'Lista de ' 
        for(let c = 0; c < manipulando_main.li_array.length; c++){
            manipulando_main.li_array[c].addEventListener('click', () =>{
                switch(c){
                    case 0: manipulando_main.h1.textContent = frase_h1 + 'Workshops'
                    break
                    case 1: manipulando_main.h1.textContent = frase_h1 + 'Festivais'
                    break
                    case 2: manipulando_main.h1.textContent = frase_h1 + 'Eventos'
                    default:
                }
            })
        }
    }
}

manipulando_main.alterando_eventos()
ativando_barra.barra_lateral_func()