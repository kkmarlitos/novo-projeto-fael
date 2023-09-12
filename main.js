const manipulando_main = {
    li_array: document.getElementsByClassName("escolha_eventos"),
    h1: document.getElementsByTagName('h1')[0],
    
    alterando_eventos: function(){
        let frase_h1 = 'Lista de ' 
        for(let c = 0; c < manipulando_main.li_array.length; c++){
            manipulando_main.li_array[c].addEventListener('click', () =>{
                switch(c){
                    case 0: manipulando_main.h1.textContent = frase_h1 + 'Workshops'
                    Equilibrium.evento_equilibrium.style.display = 'none'
                    break
                    case 1: manipulando_main.h1.textContent = frase_h1 + 'Festivais'
                    Equilibrium.evento_equilibrium.style.display = 'none'
                    break
                    case 2: manipulando_main.h1.textContent = frase_h1 + 'Eventos'
                    Equilibrium.evento_equilibrium.style.display = 'block'
                    default:
                }
            })
        }
    }
}

manipulando_main.alterando_eventos()

const criando_eventos = {
    logo: document.getElementById('logo'),
    conteudo_main: document.getElementById('conteudo_eventos'),

    criando_div_evento: function(){
        //div de evento
        const div_evento = document.createElement('div')
        div_evento.classList.add('evento')

        //conteudos da div
        const nome_organizador = document.createElement('p')
        nome_organizador.classList.add('nome_organizador')
        nome_organizador.textContent = 'Mutantes'
        
        const container_img_evento = document.createElement('div')
        container_img_evento.id = 'container_img_evento'
        const img_evento = document.createElement('img')
        img_evento.classList.add('img_evento')
        img_evento.src = '25_evento.jpg'

        const container_info_evento = document.createElement('div')
        container_info_evento.id = 'container_info_evento'
        const preco = document.createElement('p')
        preco.classList.add('preco')
        preco.textContent = '22,00'
        const data_evento = document.createElement('p')
        data_evento.classList.add('data_evento')
        data_evento.textContent = '12/02'

        //adicionando os conteudos na div principal
        criando_eventos.conteudo_main.appendChild(div_evento)

        div_evento.appendChild(nome_organizador)
        div_evento.appendChild(container_img_evento)
        container_img_evento.appendChild(img_evento)
        div_evento.appendChild(container_info_evento)
        container_info_evento.appendChild(preco)
        container_info_evento.appendChild(data_evento)
    },

    finalizando_criacao: function(){
        criando_eventos.logo.addEventListener('click', () =>{
            criando_eventos.criando_div_evento()
        })
    }
}
criando_eventos.finalizando_criacao()

const Equilibrium = {
    evento_equilibrium : document.querySelectorAll('.evento')[0],
    container_eventos : document.getElementById('container_eventos'),
    container_equilibrium : document.getElementById('container_equilibrium'),

    visualizar_lista : function(){
        Equilibrium.evento_equilibrium.addEventListener('click', () =>{
            Equilibrium.container_eventos.style.display = 'none'
            this.container_equilibrium.style.display = 'block'
        })
    }
}

Equilibrium.visualizar_lista()