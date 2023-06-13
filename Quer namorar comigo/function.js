function sim(){
    alert('Você aquece o meu coração');
};

function desviar(){
    console.log('desviei hahaha...');
    var btn = document.querySelector("#conteudo > button:nth-child(3)");
    console.log('btn');

    btn.style.position= 'fixed';
    btn.style.bottom= getRandomArbitary(10,90);
    btn.style.lef = getRandomArbitary(10,90);
    btn.style.right= getRandomArbitary(90,10);
}

function getRandomArbitary(min, max){
    return (Math.random() * (max-min) + min) +'%';
}

var temaAlterado = false;

function MudeOTema() {
    var conteudo = document.getElementById('conteudo');
    
    if(!temaAlterado) {
    conteudo.style.backgroundImage = "url('./papelDeparedeCoracao.jpeg')";
    conteudo.style.width = "100vw";
    conteudo.style.height = "100vh";
    conteudo.style.backgroundSize = "cover";
    conteudo.style.backgroundPosition= "center";

    temaAlterado = true;
    }
    else{
        SegundoTema();
    }
}

function SegundoTema(){
    var conteudo = document.getElementById('conteudo');
    
    conteudo.style.backgroundImage = "url('./papelDeparedeCoracao2.jpeg')";
    conteudo.style.backgroundSize = "cover";
    conteudo.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundColor ="rgba(255,223,224,0.3)";
    
    temaAlterado = false;
}

function loop(){
    if(temaAlterado){
        SeguntoTema();
    }
    else{
        MudeOTema();
    }
}


function ajustarTamanhoTexto() {
    var largura = window.innerWidth;
    var altura = window.innerHeight;
    var texto = document.getElementById("meuTexto");
  
    if (largura <= 188 && altura <= 418) {
      texto.style.fontSize = "10px";
    } else {
      texto.style.fontSize = "24px";
    }
}

ajustarTamanhoTexto();
