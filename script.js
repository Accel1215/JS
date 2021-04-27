let form = document.forms.Calculator;

let elements = form.elements

let result = form.elements.result;

let result2 = 0;

let znak = '+';

elements.One.onclick = () => {
    result.value +=1;
}
elements.Two.onclick = () => {
    result.value +=2;
}
elements.Three.onclick = () => {
    result.value +=3;
}
elements.Four.onclick = () => {
    result.value +=4;
}
elements.Five.onclick = () => {
    result.value +=5;
}
elements.Six.onclick = () => {
    result.value +=6;
}
elements.Seven.onclick = () => {
    result.value +=7;
}
elements.Eight.onclick = () => {
    result.value +=8;
}
elements.Nine.onclick = () => {
    result.value +=9;
}
elements.Zero.onclick = () => {
    result.value +=0;
}
elements.One.onclick = () => {
    result.value +=1;
}
elements.One.onclick = () => {
    result.value +=1;
}

function doZnak()
{
    if(znak == '+') {result2 += Number(result.value)}
    else if (znak == '-') {result2 -= Number(result.value)}
    else if (znak == '*') {result2 *= Number(result.value)}
    else if (znak == '/') {result2 /= Number(result.value)}
    else if (znak == '**') {result2 **= Number(result.value)}
    else if (znak == '%') {result2 %= Number(result.value)}
}

elements.Plus.onclick = () => {
    doZnak();
    result.value ="";
    znak = '+';
}
elements.Minus.onclick = () => {
    doZnak();
    result.value ="";
    znak = '-';
}
elements.Multi.onclick = () => {
    doZnak();
    result.value ="";
    znak = '*';
}
elements.Div.onclick = () => {
    doZnak();
    result.value ="";
    znak = '/';
}
elements.Exp.onclick = () => {
    doZnak();
    result.value ="";
    znak = '**';
}
elements.Div2.onclick = () => {
    doZnak();
    result.value ="";
    znak = '%';
}
elements.Equal.onclick = () => {
    doZnak();
    result.value = result2;
    znak = '+';
}