//declarados como global para a função exame() visualizar
let media_semestral;
let div;

function verificar(){
    //notas
    let nota1_1 = Number(document.getElementById("1-nota-1-bimestre").value);
    let nota2_1 = Number(document.getElementById("2-nota-1-bimestre").value);
    let nota3_1 = Number(document.getElementById("3-nota-1-bimestre").value);
    let nota1_2 = Number(document.getElementById("1-nota-2-bimestre").value);
    let nota2_2 = Number(document.getElementById("2-nota-2-bimestre").value);
    let nota3_2 = Number(document.getElementById("3-nota-2-bimestre").value);

    //para não sair o valor dos inputs depois
    localStorage.setItem("1-nota-1-bimestre", document.getElementById("1-nota-1-bimestre").value);
    localStorage.setItem("2-nota-1-bimestre", document.getElementById("2-nota-1-bimestre").value);
    localStorage.setItem("3-nota-1-bimestre", document.getElementById("3-nota-1-bimestre").value);
    localStorage.setItem("1-nota-2-bimestre", document.getElementById("1-nota-2-bimestre").value);
    localStorage.setItem("2-nota-2-bimestre", document.getElementById("2-nota-2-bimestre").value);
    localStorage.setItem("3-nota-2-bimestre", document.getElementById("3-nota-2-bimestre").value);
    localStorage.setItem("num-faltas", document.getElementById("num-faltas").value);
    localStorage.setItem("num-aulas", document.getElementById("num-aulas").value);


    //número de faltas
    let numeros_de_faltas = Number(document.getElementById("num-faltas").value);

    //número de aulas
    let numeros_de_aulas = Number(document.getElementById("num-aulas").value);

    //médias
    let media_bimestre_1 = (nota1_1 + nota2_1 + nota3_1) / 3;
    let media_bimestre_2 = (nota1_2 + nota2_2 + nota3_2) / 3;
    media_semestral = (media_bimestre_1 + media_bimestre_2) / 2;

    div = document.getElementById("resultado");

    //presença
    let presenca = ((numeros_de_aulas - numeros_de_faltas) / numeros_de_aulas) * 100; //retorna o valor da *porcentagem*

    if(media_semestral >= 7 && presenca >= 75){
        div.innerHTML += `<h1>Aprovado!<h1>`; //Editar elementos HTML para mostrar um aprovado bonito
    }else if(presenca < 75){
        div.innerHTML += `<h1>Reprovado por falta!<h1>`; //Editar elementos HTML para mostrar um reprovado bonito
    }else if(media_semestral < 7 && presenca >= 75){
        //arrumar no css a linha abaixo
        div.innerHTML += `<form><div class="div-nota"><input class="input" required type="text" id="nota-exame" value=""><span>Nota exame:</span><button class="btn" onclick="exame()">EXAME</button></div></form>`; 
           
        //carregar informações nos inputs
        document.getElementById("1-nota-1-bimestre").value = localStorage.getItem("1-nota-1-bimestre");
        document.getElementById("2-nota-1-bimestre").value = localStorage.getItem("2-nota-1-bimestre");
        document.getElementById("3-nota-1-bimestre").value = localStorage.getItem("3-nota-1-bimestre");
        document.getElementById("1-nota-2-bimestre").value = localStorage.getItem("1-nota-2-bimestre");
        document.getElementById("2-nota-2-bimestre").value = localStorage.getItem("2-nota-2-bimestre");
        document.getElementById("3-nota-2-bimestre").value = localStorage.getItem("3-nota-2-bimestre");
        document.getElementById("num-faltas").value = localStorage.getItem("num-faltas");
        document.getElementById("num-aulas").value = localStorage.getItem("num-aulas");
    }

}

function exame(){
    let nota_exame = Number(document.getElementById("nota-exame").value);
    if(((media_semestral + nota_exame) / 2) > 5){
        div.innerHTML += `<h1>Aprovado no exame!<h1>`; //Editar elementos HTML para mostrar um aprovado bonito
    }else{
        div.innerHTML += `<h1>Reprovado no exame!<h1>`; //Editar elementos HTML para mostrar um reprovado bonito
    }
}