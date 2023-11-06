escrever = (msg)=> alert (msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
div = (a,b) => a / b;
mult = (a,b) => a * b;
raiz = a => Math.sqrt(a);
eq2grau = (a,b,c) => {
    if (a == 0) return "Não é uma equação do Segundo Grau.";
    let delta = sub(mult(b,b), mult (4, mult (a,c)));
    if (delta < 0) return "Não possui raiz real.";

    document.getElementById ("delta").innerHTML= delta;

    if (delta == 0) return "x1 = x2 =" + div(-b, mult (2,a));
    return "x1"+ div (soma(-b, raiz(delta)), mult (2,a)) +
           "x2"+ div (sub(-b, raiz(delta)), mult (2,a));
} 
let a ="0";
let b ="0";
let c ="0";

let sa = "+";
let sb = "+";
let sc = "+";

let op ="";
let resultado = 0;
let valor = "";
let tem_ponto = false;
let desligada = false;

function raiz_quadrada (){
    mostrar_resultado (raiz(valor));
    valor = "";
}
function porcentagem (){
  if (op == "mult"){
    mostrar_resultado(div(mult(a,valor),100));
    a = "";
    valor = "";
}}

function zerar(){
    if(desligada) return;
    a= "";
    b= "";
    op= "";
    valor= "0";
    tem_ponto= false;
    mostrar_resultado(0);
}
function desligar(){
    if (desligada){
        desligada = false;
        zerar();
    }else{
        zerar();
        mostrar_resultado("")
        desligada = true;
        
    }
    return desligada;
}

function mostrar_resultado (resul){
    if(desligada) return;
    document.getElementById ("resultado").value = resul;
}
function operacao (nova_op){
    if(desligada) return;
    op = nova_op;
    a = valor;
    valor = "";
}
function calcula (){
    if(desligada) return;
    if (op != ""){
        b = valor;
        valor = "";
        if (op == "soma") mostrar_resultado (soma(a,b));
        if (op == "sub") mostrar_resultado (sub(a,b));
        if (op == "div") mostrar_resultado (div(a,b));
        if (op == "mult") mostrar_resultado (mult(a,b));
        a = "";
        b = "";
        tem_ponto = false;
    }
}
function digitando(tecla){
    if(desligada) return;
    if (tecla == "."){
        if (!tem_ponto){
            valor = valor + tecla;
            mostrar_resultado (valor);
            tem_ponto = true;
            
        }
    }
   valor = valor + tecla;
   mostrar_resultado (valor);
}
const set_sinal_a = () =>{
    sa = document.getElementById("sinal_a").value;
    a= Number (a);
    a = -a;
    calcular2g();
}
const set_sinal_b = () =>{
    sb = document.getElementById("sinal_b").value;
    b= Number (b);
    b = -b;
    calcular2g();
}
const set_sinal_c = () =>{
    sc = document.getElementById("sinal_c").value;
    c= Number (c);
    c = -c;
    calcular2g();
}
const set_valor_a = () =>{
    a = document.getElementById("valor_a").value;
    a = Number(a);
    if (sa == "-") a = -a;
    calcular2g();
}
const set_valor_b = () =>{
    b = document.getElementById("valor_b").value;
    b = Number(b);
    if (sb == "-") b = -b;
    calcular2g();
}
const set_valor_c = () =>{
    c = document.getElementById("valor_c").value;
    c = Number(c);
    if (sc == "-") c = -c;
    calcular2g();
}
const calcular2g = ()=>{
    document.getElementById ("raiz").innerHTML = eq2grau (a,b,c);
}