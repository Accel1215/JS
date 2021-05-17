let form = document.forms.calculator;
let elements = form.elements
let label = form.elements.result;
let viewHistory = form.elements.history;
let firstNumber = 0;
let secondNumber = "";
let sign = '+';
let history = [];

elements.One.onclick = () => {
    label.value +=1;
    secondNumber +=1;
}
elements.Two.onclick = () => {
    label.value +=2;
    secondNumber +=2;
}
elements.Three.onclick = () => {
    label.value +=3;
    secondNumber +=3;
}
elements.Four.onclick = () => {
    label.value +=4;
    secondNumber +=4;
}
elements.Five.onclick = () => {
    label.value +=5;
    secondNumber +=5;
}
elements.Six.onclick = () => {
    label.value +=6;
    secondNumber +=6;
}
elements.Seven.onclick = () => {
    label.value +=7;
    secondNumber +=7;
}
elements.Eight.onclick = () => {
    label.value +=8;
    secondNumber +=8;
}
elements.Nine.onclick = () => {
    label.value +=9;
    secondNumber +=9;
}
elements.Zero.onclick = () => {
    label.value +=0;
    secondNumber +=0;
}

elements.Plus.onclick = () => {
    Calculate();
    secondNumber = "";
    sign = '+';
    label.value = firstNumber  + " " + sign + " ";
}
elements.Minus.onclick = () => {
    Calculate();
    secondNumber = "";
    sign = '-';
    label.value = firstNumber  + " " + sign + " ";
}
elements.Multi.onclick = () => {
    Calculate();
    secondNumber = "";
    sign = '*';
    label.value = firstNumber  + " " + sign + " ";
}
elements.Div.onclick = () => {
    Calculate();
    secondNumber = "";
    sign = '/';
    label.value = firstNumber  + " " + sign + " ";
}
elements.Exp.onclick = () => {
    Calculate();
    secondNumber = "";
    sign = '**';
    label.value = firstNumber  + " " + sign + " ";
}
elements.Div2.onclick = () => {
    Calculate();
    secondNumber = "";
    sign = '%';
    label.value = firstNumber  + " " + sign + " ";
}
elements.Equal.onclick = () => {
    Calculate();
    secondNumber = "";
    sign = '=';
    label.value = firstNumber;
}
elements.Clear.onclick = () => {
    firstNumber = 0;
    secondNumber = "";
    sign = '+';
    label.value = "";
}

function Calculate()
{
    let string = firstNumber + " " + sign + " " + secondNumber + ' = '

    if(sign == '+') {firstNumber = Number(firstNumber) + Number(secondNumber)}
    else if (sign == '-') {firstNumber -= Number(secondNumber)}
    else if (sign == '*') {firstNumber *= Number(secondNumber)}
    else if (sign == '/') {firstNumber /= Number(secondNumber)}
    else if (sign == '**') {firstNumber **= Number(secondNumber)}
    else if (sign == '%') {firstNumber %= Number(secondNumber)}

    string += firstNumber +' \n';
    history.push(string);
    viewHistory.value = '\n';

    if(history.length > 10)
    {
        history.splice(0,1);
    }

    for(let i = 0; i < history.length; ++i)
    {
        viewHistory.value += history[i];
    }

}