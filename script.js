//declarados como global para a função exame() visualizar
let media_semestral;
let div;

function verificar(){
    //esconder botao depois de clicado
    document.getElementById("btn-verificar").style.display = "none";

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
        div.innerHTML += `<span class="span-divisao"></span><h2 class="situacao">Situação: Aprovado!<h2>`;
    }else if(presenca < 75){
        div.innerHTML += `<span class="span-divisao"></span><h2 class="situacao">Situação: Reprovado por falta!<h2>`;
    }else if(media_semestral < 7 && presenca >= 75){
        div.innerHTML += `<form class="form-exame situacao"><h2 id="resultado-exame">EXAME</h2><div class="calc-exame"><div class="box div-nota"><input class="input" required type="text" id="nota-exame" value=""><span>Nota exame:</span></div><button class="btn" id="btn-exame" onclick="exame()">CALCULAR</button></div></form>`; 
           
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
    // esconder elementos depois de clicar no botao
	document.getElementById("btn-exame").style.display = "none";
    document.getElementById("resultado-exame").style.display = "none";

    let nota_exame = Number(document.getElementById("nota-exame").value);
    if(((media_semestral + nota_exame) / 2) > 5){
        div.innerHTML += `<span class="span-divisao"></span><h2 class="situacao">Situação: Aprovado no exame!<h2>`;
    }else{
        div.innerHTML += `<span class="span-divisao"></span><h2 class="situacao">Situação: Reprovado no exame!<h2>`;
    }
}