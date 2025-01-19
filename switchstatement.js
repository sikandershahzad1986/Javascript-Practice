function calculator(num1, num2, oper)
{

switch(oper)
{

case '+':
    return num1 + num2;
    break;
case '-':
    return num1 - num2;
    break;
case '*':
    return num1 * num2;
    break;
case '/':
    return num1 / num2;
    break;
default:
    return "Invalid Operator";

}



}

console.log(calculator(4,5,'/'));