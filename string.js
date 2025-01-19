function processString(str,operation)
{

if (operation == 'upper')
{
    return str.toUpperCase();
}
else if(operation == 'lower')
{
    return str.toLowerCase();
}
else if(operation == 'trim')
{
    return str.trim();
}
else
return 'Invalid Operation';
}

console.log(processString('       sikander','trim'));
console.log(processString('sikandder','upper'));