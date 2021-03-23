
// Menu Mobile

document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style['right'] = "0px";
}

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style['right'] = "-320px";
}


// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

let single_tabs = document.getElementsByClassName("single-tab");

for(let i = 0; i < 3; i++){
  single_tabs[i].onclick = function() {
    
    document.getElementById("box-text").innerHTML = aboutUs[this.innerHTML]
    
    this.style["background-color"] = selected_color;
    for(let y = 0; y < 3; y++){
      if(single_tabs[y] != this){
        single_tabs[y].style["background-color"] = unselected_color;
      }
    }
  }
}

// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

let servicos_index = 0
let los = (our_services.length - 1) * (-1)

document.getElementById("service-next").onclick = function () {
  servicos_index += servicos_index > 1 ? los : 1;
  change_servicos_text(servicos_index);
}

document.getElementById("service-previous").onclick = function () {
  servicos_index -= servicos_index > 0 ? 1 : los;
  change_servicos_text(servicos_index);
}

function change_servicos_text(index){
  document.getElementById("service-title").innerHTML = our_services[index].title;
  document.getElementById("service-text").innerHTML = our_services[index].text;
}

// Data Footer

let ano_atual = new Date;
document.getElementById("current_year").innerHTML = ano_atual.getFullYear();

  
   


   